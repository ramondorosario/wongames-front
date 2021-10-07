import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { Menu } from '..';

describe('<Menu />', () => {
	it('Should render the menu version mobile', () => {
		renderWithTheme(<Menu />);

		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
		expect(screen.getByLabelText('Logo Won Games')).toBeInTheDocument();
		expect(screen.getByLabelText('Search')).toBeInTheDocument();
		expect(screen.getByLabelText('Open shopping cart')).toBeInTheDocument();
	});

	it('Should handle open/close mobile menu', () => {
		renderWithTheme(<Menu />);

		const fullMenuElement = screen.getByRole('navigation', { hidden: true });

		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
		expect(fullMenuElement).toHaveStyle({ opacity: 0 });

		fireEvent.click(screen.getByLabelText('Open menu'));
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
		expect(fullMenuElement).toHaveStyle({ opacity: 1 });

		fireEvent.click(screen.getByLabelText('Close menu'));
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
		expect(fullMenuElement).toHaveStyle({ opacity: 0 });
	});

	it('Should show MenuFooter when logged out', () => {
		renderWithTheme(<Menu />);

		expect(screen.getByText('Login in now')).toBeInTheDocument();
		expect(screen.getByText('Sign up')).toBeInTheDocument();

		expect(screen.queryByText('My account')).not.toBeInTheDocument();
		expect(screen.queryByText('Wishlist')).not.toBeInTheDocument();
	});

	it('Should show links to my account and wishlist when logged in', () => {
		renderWithTheme(<Menu username="username" />);

		expect(screen.getByText('My account')).toBeInTheDocument();
		expect(screen.getByText('Wishlist')).toBeInTheDocument();

		expect(screen.queryByText('Login in now')).not.toBeInTheDocument();
		expect(screen.queryByText('Sign up')).not.toBeInTheDocument();
	});

	it('Should show profile when logged in', () => {
		renderWithTheme(<Menu username="username" />);

		expect(screen.getByTestId('user-icon')).toBeInTheDocument();
	});

	it('Should show login button when logged out', () => {
		renderWithTheme(<Menu />);

		expect(screen.getByText('Sign in')).toBeInTheDocument();
	});
});
