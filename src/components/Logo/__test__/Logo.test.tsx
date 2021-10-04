import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';
import { Logo } from '..';

describe('<Logo />', () => {
	it('Should render a white label by default', () => {
		renderWithTheme(<Logo />);

		expect(
			screen.getByLabelText('Logo da Won Games').parentElement
		).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('Should render a black label when color is passed', () => {
		renderWithTheme(<Logo color="black" />);

		expect(
			screen.getByLabelText('Logo da Won Games').parentElement
		).toHaveStyle({
			color: '#030517',
		});
	});

	it('Should render a normal logo by default', () => {
		renderWithTheme(<Logo />);

		expect(
			screen.getByLabelText('Logo da Won Games').parentElement
		).toHaveStyle({ width: '11rem', height: '3.3rem' });
	});

	it('Should render a bigger logo', () => {
		renderWithTheme(<Logo size="large" />);

		expect(
			screen.getByLabelText('Logo da Won Games').parentElement
		).toHaveStyle({ width: '20rem', height: '6rem' });
	});
});
