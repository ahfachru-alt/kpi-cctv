<?php

namespace App\Http\Controllers;

use App\Jobs\StartHlsStream;
use App\Models\Cctv;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CctvController extends Controller
{
    public function live(int $id)
    {
        $cctv = Cctv::findOrFail($id);
        if (!$cctv->hls_path) {
            StartHlsStream::dispatch($cctv->id);
        }
        return Inertia::render('User/Cctv/Show', [
            'cctv' => [
                'id' => $cctv->id,
                'name' => $cctv->name,
                'status' => $cctv->status,
                'hls' => $cctv->hls_path ? asset('storage/'.$cctv->hls_path) : null,
            ],
        ]);
    }
}

