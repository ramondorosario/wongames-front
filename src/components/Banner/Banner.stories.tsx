import { Meta, Story } from '@storybook/react';
import { Banner, BannerProps } from '.';

export default {
	title: 'Banner',
	component: Banner,
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Desafie a morte',
		subtitle: '<p>Jogue a nova temporada de <strong>Crashlands</strong></>',
		buttonLabel: 'Comprar agora',
		buttonLink: '/games/defy-death',
	},
} as Meta;

export const Default: Story<BannerProps> = (args) => <Banner {...args} />;

Default.parameters = {
	viewport: {
		defaultViewport: 'mobile1',
	},
	backgrounds: { default: 'dark' },
	layout: 'fullscreen',
};
