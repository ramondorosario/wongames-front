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

export const Default: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '80rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
);

Default.parameters = {
	viewport: {
		defaultViewport: 'mobile1',
	},
	backgrounds: { default: 'dark' },
	layout: 'fullscreen',
};

export const WithRibbon: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '80rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
);

WithRibbon.args = {
	ribbonText: 'Mais vendido',
	ribbonColor: 'primary',
	ribbonSize: 'xlarge',
};

WithRibbon.parameters = {
	backgrounds: { default: 'dark' },
	layout: 'fullscreen',
};
