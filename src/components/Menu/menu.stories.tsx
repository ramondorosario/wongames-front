import { Story, Meta } from '@storybook/react';
import { Menu, MenuProps } from '.';

export default {
	title: 'Menu',
	compoentn: Menu,
} as Meta;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

Default.args = {
	username: '',
};

Default.parameters = {
	viewport: {
		defaultViewport: 'mobile1',
	},
	backgrounds: {
		default: 'won-dark',
	},
	layout: 'fullscreen',
};
