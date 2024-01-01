import { it } from 'vitest';
import { unmountComponentAtNode } from 'react-dom';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App />);
  unmountComponentAtNode(div);
});
