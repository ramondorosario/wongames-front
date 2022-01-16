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
	argTypes: {
		onFav: { action: 'clicked' },
	},
} as Meta;

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />;

Default.parameters = {
	backgrounds: {
		default: 'won-dark',
	},
};

export const WithRibbon: Story<GameCardProps> = (args) => (
	<GameCard {...args} />
);

WithRibbon.args = {
	ribbon: '20% OFF',
	ribbonSize: 'small',
	ribbonColor: 'primary',
};

WithRibbon.parameters = {
	backgrounds: {
		default: 'won-dark',
	},
};
