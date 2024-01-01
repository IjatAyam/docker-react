import { it } from 'vitest';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App.tsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div);
});
