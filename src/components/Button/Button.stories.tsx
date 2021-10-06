import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string',
		},
		icon: {
			type: '',
		},
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Generic = Template.bind({});

Generic.args = {
	children: 'Large',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	children: 'Icon',
	icon: <AddShoppingCart />,
	size: 'small',
};
