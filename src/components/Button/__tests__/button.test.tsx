import { AddShoppingCart } from '@styled-icons/material-outlined';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { Button } from '..';

describe('<Button />', () => {
	it('Should render a medium button by default', () => {
		renderWithTheme(<Button>Medium</Button>);

		expect(screen.getByRole('button', { name: 'Medium' })).toHaveStyle({
			padding: '0 3.2rem',
			height: '4rem',
			'font-size': '1.4rem',
		});
	});

	it('Should render a small button', () => {
		renderWithTheme(<Button size="small">Small</Button>);

		expect(screen.getByRole('button', { name: 'Small' })).toHaveStyle({
			padding: '0 0.8rem',
			height: '3rem',
			'font-size': '1.2rem',
		});
	});

	it('Should render a large button', () => {
		renderWithTheme(<Button size="large">Large</Button>);

		expect(screen.getByRole('button', { name: 'Large' })).toHaveStyle({
			padding: '0 4.8rem',
			height: '5rem',
			'font-size': '1.6rem',
		});
	});

	it('Should render a full width button', () => {
		renderWithTheme(<Button fullWidth>Full Width</Button>);

		expect(screen.getByRole('button', { name: 'Full Width' })).toHaveStyle({
			width: '100%',
		});
	});

	it('Should render a button with icon', () => {
		renderWithTheme(
			<Button icon={<AddShoppingCart data-testid="icon" />}>With Icon</Button>
		);

		expect(screen.getByTestId('icon')).toBeInTheDocument();
		expect(screen.getByText('With Icon')).toBeInTheDocument();
	});

	it('Should render a button as a link', () => {
		renderWithTheme(
			<Button as="a" href="/link">
				Link
			</Button>
		);

		expect(screen.getByRole('link', { name: 'Link' })).toHaveAttribute(
			'href',
			'/link'
		);
	});
});
