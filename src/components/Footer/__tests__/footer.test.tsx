import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { Footer } from '..';

describe('<Footer />', () => {
	it('Should render four columns topics', () => {
		renderWithTheme(<Footer />);

		expect(
			screen.getByRole('heading', { name: 'Contact' })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: 'Follow Us' })
		).toBeInTheDocument();

		expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: 'Location' })
		).toBeInTheDocument();
	});

	it('Should render two columns list when mobile', () => {
		renderWithTheme(<Footer />);

		expect(screen.getByTestId('grid')).toHaveStyle({
			'grid-template-columns': 'repeat(2,1fr)',
		});
	});

	it('Should render four columns list when desktop', () => {
		renderWithTheme(<Footer />);

		expect(screen.getByTestId('grid')).toHaveStyleRule(
			'grid-template-columns',
			'repeat(4,1fr)',
			{ media: '(min-width: 768px)' }
		);
	});
});
