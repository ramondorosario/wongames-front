import { Story, Meta } from '@storybook/react';
import { GameCardProps } from 'components/GameCard';
import { GameCardSlider, GameCardSliderProps } from '.';

const cards: GameCardProps[] = [
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
];

export default {
	title: 'GameCardSlider',
	component: GameCardSlider,
	args: {
		cards,
	},
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark',
		},
	},
} as Meta;

export const Default: Story<GameCardSliderProps> = (args) => (
	<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
		<GameCardSlider {...args} />
	</div>
);
