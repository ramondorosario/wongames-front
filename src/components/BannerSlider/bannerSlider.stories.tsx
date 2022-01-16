import { Story, Meta } from '@storybook/react';
import { BannerSlider, BannerSliderProps } from '.';

const items = [
	{
		img: 'https://source.unsplash.com/user/willianjusten/2042x580',
		title: 'Defy death 1',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death',
		ribbonText: 'Bestselling',
	},
	{
		img: 'https://source.unsplash.com/user/willianjusten/2042x580',
		title: 'Defy death 2',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death',
		ribbonText: 'Bestselling',
	},
	{
		img: 'https://source.unsplash.com/user/willianjusten/2042x580',
		title: 'Defy death 3',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death',
		ribbonText: 'Bestselling',
	},
];

export default {
	title: 'BannerSlider',
	component: BannerSlider,
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => (
	<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
		<BannerSlider {...args}></BannerSlider>
	</div>
);

Default.args = {
	items,
};

Default.parameters = {
	layout: 'fullscreen',
	backgrounds: {
		default: 'won-dark',
	},
};
