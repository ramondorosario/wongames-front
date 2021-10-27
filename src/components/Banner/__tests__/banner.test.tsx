import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Banner } from '..';

const props = {
	img: 'https://source.unsplash.com/user/willianjusten/1042x580',
	title: 'Desafie a morte',
	subtitle: 'Jogue a nova temporada de Crashlands',
	buttonLabel: 'Comprar agora',
	buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
	it('Should render correctly', () => {
		renderWithTheme(<Banner {...props} />);

		expect(screen.getByRole('img')).toHaveStyle({
			'background-image': `url(${props.img})`,
		});

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: props.subtitle })
		).toBeInTheDocument();
	});
});
