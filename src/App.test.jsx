import { render } from '@testing-library/react';

import App from './App';

test('should render', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
