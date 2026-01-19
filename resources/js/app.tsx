// resources/js/app.tsx

import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,          // ★ここを ./pages ではなく ./Pages に
      import.meta.glob('./Pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    // テーマ初期化（ブラウザ側で DOM がある状態で実行）
    initializeTheme();

    root.render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
    );
  },
  progress: {
    color: '#4B5563',
  },
});
