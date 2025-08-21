<?php

namespace App\Jobs;

use App\Models\Cctv;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class StartHlsStream implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(public int $cctvId) {}

    public function handle(): void
    {
        $cctv = Cctv::find($this->cctvId);
        if (!$cctv) return;

        $outDir = storage_path("app/public/hls/{$cctv->id}");
        if (!is_dir($outDir)) {
            @mkdir($outDir, 0775, true);
        }

        $playlist = $outDir.'/index.m3u8';
        $cctv->update(['hls_path' => 'hls/'.$cctv->id.'/index.m3u8']);

        $cmd = sprintf(
            'ffmpeg -nostdin -rtsp_transport tcp -i %s -c:v libx264 -preset veryfast -g 48 -sc_threshold 0 -c:a aac -f hls -hls_time 2 -hls_list_size 10 -hls_flags delete_segments+append_list "%s" > /dev/null 2>&1 &',
            escapeshellarg($cctv->ip),
            $playlist
        );
        @exec($cmd);
    }
}

