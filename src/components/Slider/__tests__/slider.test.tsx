import '../../../../.jest/match-media-mock';

import { screen, render } from '@testing-library/react';
import { Slider } from '..';

describe('<Slider />', () => {
	it('Should renderchildren as slider', () => {
		const { container } = render(
			<Slider settings={{ slidesToShow: 1, infinite: false }}>
				<p>Item 1</p>
				<p>Item 2</p>
			</Slider>
		);

		expect(screen.getByText('Item 1').parentElement?.parentElement).toHaveClass(
			'slick-slide'
		);

		expect(screen.getByText('Item 2').parentElement?.parentElement).toHaveClass(
			'slick-slide'
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
