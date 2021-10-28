import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Ribbon } from '..';

describe('<Ribbon />', () => {
	it('Should render with text correctly', () => {
		renderWithTheme(<Ribbon>Ribbon</Ribbon>);

		expect(screen.getByText('Ribbon')).toBeInTheDocument();
	});

	it('Should render with backgroundColor primary', () => {
		renderWithTheme(<Ribbon>Ribbon</Ribbon>);

		expect(screen.getByText('Ribbon')).toHaveStyle({
			backgroundColor: '#F231A5',
		});
	});

	it('Should render with backgroundColor seconday', () => {
		renderWithTheme(<Ribbon color="secondary">Ribbon</Ribbon>);

		expect(screen.getByText('Ribbon')).toHaveStyle({
			backgroundColor: '#3CD3C1',
		});
	});

	it('Should render with the small size by default', () => {
		renderWithTheme(<Ribbon color="secondary">Ribbon</Ribbon>);

		expect(screen.getByText('Ribbon')).toHaveStyle({
			height: '2.4rem',
			fontSize: '1.2rem',
		});
	});

	it('Should render with the large size', () => {
		renderWithTheme(
			<Ribbon color="secondary" size="large">
				Ribbon
			</Ribbon>
		);

		expect(screen.getByText('Ribbon')).toHaveStyle({
			height: '3.3rem',
			fontSize: '1.4rem',
		});
	});

	it('Should render with the xlarge size', () => {
		renderWithTheme(
			<Ribbon color="secondary" size="xlarge">
				Ribbon
			</Ribbon>
		);

		expect(screen.getByText('Ribbon')).toHaveStyle({
			height: '4rem',
			fontSize: '1.8rem',
		});
	});
});
