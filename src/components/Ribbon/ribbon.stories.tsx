import { Meta, Story } from '@storybook/react';
import { Ribbon, RibbonProps } from '.';

export default {
	title: 'Ribbon',
	component: Ribbon,
	args: {
		children: 'Ribbon',
	},
	argTypes: {
		children: {
			type: 'string',
		},
	},
} as Meta;

export const Default: Story<RibbonProps> = (args) => (
	<div
		style={{
			width: '40rem',
			height: '40rem',
			background: '#cecece',
			position: 'relative',
		}}
	>
		<Ribbon {...args}>{args.children}</Ribbon>
	</div>
);
