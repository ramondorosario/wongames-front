import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';
import { Heading } from '..';
import 'jest-styled-components';

describe('<Heading />', () => {
	it('Should render a black heading with border left by default', () => {
		renderWithTheme(<Heading>Lorem Ipsum</Heading>);
		expect(screen.getByRole('heading', { name: 'Lorem Ipsum' })).toHaveStyle({
			'border-left': '0.7rem solid #3CD3C1',
			color: '#030517',
		});
	});

	it('Should render a white heading when color is passed', () => {
		renderWithTheme(<Heading color="white">Lorem Ipsum</Heading>);
		expect(screen.getByRole('heading', { name: 'Lorem Ipsum' })).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('Should render a heading with border bottom', () => {
		renderWithTheme(<Heading borderBottom>Lorem Ipsum</Heading>);
		expect(
			screen.getByRole('heading', { name: 'Lorem Ipsum' })
		).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
			modifier: '::before',
		});
	});

	it('Should render a heading with font-size xlarge when mobile', () => {
		renderWithTheme(<Heading>Lorem Ipsum</Heading>);
		expect(
			screen.getByRole('heading', { name: 'Lorem Ipsum' })
		).toHaveStyleRule('font-size', '2.0rem', {
			media: '(max-width: 768px)',
		});
	});
});
