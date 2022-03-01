import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { HomeTemplate } from '..';

describe('<HomeTemplate />', () => {
	it('sould render a menu and footer', () => {
		renderWithTheme(<HomeTemplate />);

		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: 'Contact' })
		).toBeInTheDocument();
	});

	it('sould render the sections', () => {
		renderWithTheme(<HomeTemplate />);

		expect(screen.getByRole('heading', { name: 'News' })).toHaveStyle({
			'border-left': '0.7rem solid #3CD3C1',
		});

		expect(screen.getByRole('heading', { name: 'Most Popular' })).toHaveStyle({
			'border-left': '0.7rem solid #3CD3C1',
		});

		expect(screen.getByRole('heading', { name: 'Upcomming' })).toHaveStyle({
			'border-left': '0.7rem solid #3CD3C1',
		});

		expect(screen.getByRole('heading', { name: 'Free Games' })).toHaveStyle({
			'border-left': '0.7rem solid #3CD3C1',
		});
	});
});
