import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="relative min-h-screen bg-gray-900">
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('/images/kilang.png')" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

            <div className="relative z-10 flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
                <div className="flex flex-col items-center gap-2">
                    <Link href="/">
                        <img src="/images/Pertamina.png" alt="Pertamina" className="h-20 w-20 drop-shadow-xl" />
                    </Link>
                    <div className="text-xs tracking-wide text-white/80">KILANG PERTAMINA INTERNASIONAL</div>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white/95 px-6 py-4 shadow-2xl backdrop-blur sm:max-w-md sm:rounded-2xl dark:bg-gray-900/80">
                    {children}
                </div>
            </div>
        </div>
    );
}
