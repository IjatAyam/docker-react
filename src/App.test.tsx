import { render } from '@testing-library/react';
import App from './App';

test('Should render without crash', () => {
  render(<App />);
});
