import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Echo from 'laravel-echo';
// @ts-ignore
window.Pusher = undefined;
// @ts-ignore
window.Echo = new Echo({
    broadcaster: 'reverb',
    key: (import.meta as any).env?.VITE_REVERB_APP_KEY ?? 'app-key',
    wsHost: (import.meta as any).env?.VITE_REVERB_HOST ?? window.location.hostname,
    wsPort: Number((import.meta as any).env?.VITE_REVERB_PORT ?? 8080),
    wssPort: Number((import.meta as any).env?.VITE_REVERB_PORT ?? 8080),
    forceTLS: false,
    enabledTransports: ['ws'],
});