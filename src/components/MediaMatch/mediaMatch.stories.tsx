import { Story, Meta } from '@storybook/react';
import { ReactNode } from 'react';
import { MediaMatch, MediaMatchProps } from '.';

export default {
	title: 'MediaMatch',
	component: MediaMatch,
	argTypes: {
		children: {
			type: 'string',
		},
	},
} as Meta;

const Template: Story<MediaMatchProps & { children: ReactNode }> = (args) => (
	<MediaMatch {...args}>{args.children}</MediaMatch>
);

export const Desktop = Template.bind({});
Desktop.args = {
	children: 'Desktop',
	greaterThan: 'medium',
};

export const Mobile = Template.bind({});

Mobile.args = {
	children: 'Mobile',
	lessThan: 'medium',
};
Mobile.parameters = {
	viewport: {
		defaultViewport: 'mobile1',
	},
};
