import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Head } from '@inertiajs/react';

type Props = { cctv: { id: number; name: string; status: string; hls: string|null } };

export default function CctvShow({ cctv }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !cctv.hls) return;
    if (Hls.isSupported()) {
      const hls = new Hls({ lowLatencyMode: true });
      hls.loadSource(cctv.hls);
      hls.attachMedia(videoRef.current);
      return () => hls.destroy();
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = cctv.hls;
    }
  }, [cctv.hls]);

  return (
    <div className="p-4 space-y-3">
      <Head title={`Live - ${cctv.name}`} />
      <div className="text-lg font-semibold">{cctv.name}</div>
      <div className="text-sm text-gray-600">Status: <span className="capitalize">{cctv.status}</span></div>
      <div className="aspect-video w-full overflow-hidden rounded-lg ring-1 ring-gray-200">
        {cctv.hls ? (
          <video ref={videoRef} className="h-full w-full bg-black" controls autoPlay muted playsInline />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500">
            Menyiapkan stream...
          </div>
        )}
      </div>
    </div>
  );
}

