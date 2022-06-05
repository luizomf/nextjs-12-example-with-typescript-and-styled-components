import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Heading />', () => {
  it('should render a heading', () => {
    renderTheme(<Heading>Example</Heading>);
    const heading = screen.getByRole('heading', { name: 'Example' });
    expect(heading).toBeInTheDocument();
  });
});
