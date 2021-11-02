import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { Highlight } from '..';

const props = {
	title: 'Read Dead está de de volta!',
	subtitle: 'Venha conhecer as novas aventuras de John Marston',
	buttonLabel: 'Comprar agora',
	buttonLink: '/read-dead',
	backgroundImage: '/images/background-highlight.png',
};

describe('<Highlight />', () => {
	it('Should render headings and button', () => {
		renderWithTheme(<Highlight {...props} />);

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: props.subtitle })
		).toBeInTheDocument();

		expect(
			screen.getByRole('link', { name: props.buttonLabel })
		).toHaveAttribute('href', props.buttonLink);
	});

	it('Should render background-image', () => {
		const { container } = renderWithTheme(<Highlight {...props} />);

		expect(container.firstChild).toHaveStyle({
			backgroundImage: `url(${props.backgroundImage})`,
		});
	});

	it('Should render overlay', () => {
		const { container } = renderWithTheme(<Highlight {...props} />);

		expect(container.firstChild).toHaveStyleRule(
			'background-color',
			'rgba(0,0,0,0.6)',
			{
				modifier: '::after',
			}
		);
	});

	it('Should render float image', () => {
		renderWithTheme(
			<Highlight {...props} floatImage="/images/float-image.png" />
		);

		expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
			'src',
			'/images/float-image.png'
		);
	});

	it('Should render float image align left by default', () => {
		const { container } = renderWithTheme(
			<Highlight {...props} floatImage="/images/float-image.png" />
		);

		expect(container.firstChild).toHaveStyle({
			'flex-direction': 'row',
		});
	});

	it('Should render float image align right', () => {
		const { container } = renderWithTheme(
			<Highlight {...props} alignFloatImage="right" />
		);

		expect(container.firstChild).toHaveStyle({
			'flex-direction': 'row-reverse',
		});
	});
});
