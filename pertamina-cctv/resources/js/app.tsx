import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx');
        const altPages = import.meta.glob('./pages/**/*.tsx');
        if (pages[`./Pages/${name}.tsx`]) {
            return resolvePageComponent(`./Pages/${name}.tsx`, pages);
        }
        if (altPages[`./pages/${name}.tsx`]) {
            return resolvePageComponent(`./pages/${name}.tsx`, altPages);
        }
        return resolvePageComponent(`./Pages/${name}.tsx`, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
