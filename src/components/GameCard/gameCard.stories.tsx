import { Meta, Story } from '@storybook/react';
import { GameCard, GameCardProps } from '.';

export default {
	title: 'GameCard',
	component: GameCard,
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Read Dead Redemption',
		developer: 'Rockstar Games',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
} as Meta;

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />;

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
