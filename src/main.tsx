import { createRoot } from 'react-dom/client';
import { App } from '@app/index';
import { appStart } from '@app/start';

const rootElement = document.getElementById('root') as HTMLDivElement;

const root = createRoot(rootElement);

appStart().then((scope) => root.render(<App scope={scope} />));
