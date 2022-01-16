import { ArrowBackIos as PreviousArrow } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as NextArrow } from '@styled-icons/material-outlined/ArrowForwardIos';
import { GameCard, GameCardProps } from 'components/GameCard';
import { Slider } from 'components/Slider';
import { Settings } from 'react-slick';

import * as S from './styles';

type ArrowColor = 'white' | 'black';

export interface GameCardSliderProps {
	cards: GameCardProps[];
	color?: ArrowColor;
}

const settings: Settings = {
	dots: false,
	arrows: true,
	vertical: false,
	verticalSwiping: false,
	infinite: false,
	lazyLoad: 'ondemand',
	slidesToShow: 4,
	nextArrow: <NextArrow aria-label="Next games" />,
	prevArrow: <PreviousArrow aria-label="Previous games" />,
	responsive: [
		{
			breakpoint: 1375,
			settings: {
				arrows: false,
				slidesToShow: 3.2,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 2.2,
			},
		},
		{
			breakpoint: 570,
			settings: {
				arrows: false,
				slidesToShow: 1.2,
			},
		},
		{
			breakpoint: 375,
			settings: {
				arrows: false,
				slidesToShow: 1.1,
			},
		},
	],
};

export function GameCardSlider({
	cards,
	color = 'white',
}: GameCardSliderProps) {
	return (
		<S.Wrapper color={color}>
			<Slider settings={settings}>
				{cards.map((item, index) => (
					<GameCard key={index} {...item} />
				))}
			</Slider>
		</S.Wrapper>
	);
}
