import { Meta, Story } from '@storybook/react';
import { Highlight, HighlightProps } from '.';

export default {
	title: 'Highlight',
	component: Highlight,
	args: {
		title: 'Read Dead está de de volta!',
		subtitle: 'Venha conhecer as novas aventuras de John Marston',
		buttonLabel: 'Comprar agora',
		buttonLink: '/read-dead',
		backgroundImage: '/images/background-highlight.png',
	},
} as Meta;

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;

Default.parameters = {
	viewport: {
		defaultViewport: 'mobile1',
	},
	layout: 'fullscreen',
};

export const WithFloatImage: Story<HighlightProps> = (args) => (
	<Highlight {...args} />
);

WithFloatImage.args = {
	floatImage: '/images/float-image.png',
	alignFloatImage: 'left',
};

WithFloatImage.parameters = {
	viewport: {
		defaultViewport: 'mobile1',
	},
	// backgrounds: { default: 'won-dark' },
	layout: 'fullscreen',
};
