import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { GameCard } from '..';

const props = {
	img: 'https://source.unsplash.com/user/willianjusten/1042x580',
	title: 'Read Dead Redemption',
	developer: 'Rockstar Games',
	price: 'R$ 235,00',
};

describe('<GameCard />', () => {
	it('Should render correctly', () => {
		renderWithTheme(<GameCard {...props} />);

		expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: props.developer })
		).toBeInTheDocument();

		expect(screen.getByLabelText('Add to wish list')).toBeInTheDocument();

		expect(screen.getByText(props.price)).toBeInTheDocument();
	});

	it('Should render promotional price', () => {
		renderWithTheme(<GameCard {...props} promotionalPrice={'R$ 215,00'} />);

		expect(screen.getByText('R$ 215,00')).toBeInTheDocument();

		expect(screen.getByText(props.price)).toHaveStyle({
			'text-decoration': 'line-through',
			color: '#8F8F8F',
		});
	});

	it('Should render a filled favorite icon when favorite is true', () => {
		renderWithTheme(
			<GameCard {...props} promotionalPrice={'R$ 215,00'} favorite={true} />
		);

		expect(screen.getByLabelText('Remove from wish list')).toBeInTheDocument();
	});

	it('Should call onFav method when favorite button is clicked', () => {
		const onFav = jest.fn();

		renderWithTheme(<GameCard {...props} onFav={onFav} />);

		fireEvent.click(screen.getAllByRole('button')[0]);
		expect(onFav).toBeCalled();
	});

	it('Should render a ribbon', () => {
		renderWithTheme(
			<GameCard
				{...props}
				ribbon="Ribbon"
				ribbonSize="small"
				ribbonColor="primary"
			/>
		);

		expect(screen.getByText('Ribbon')).toBeInTheDocument();
		expect(screen.getByText('Ribbon')).toHaveStyle({
			height: '2.4rem',
			fontSize: '1.2rem',
			backgroundColor: '#F231A5',
		});
	});
});
