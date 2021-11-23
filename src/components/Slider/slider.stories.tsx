import { Story, Meta } from '@storybook/react';
import { Settings } from 'react-slick';
import { Slider } from '.';
import styled from 'styled-components';

const Slide = styled.div`
	width: 10rem;
	padding: 5rem 0;
	background-color: gray;
	color: white;
	text-align: center;
	border: 5px solid red;
`;

export default {
	title: 'Slider',
	component: Slider,
} as Meta;

const horizontalSettings: Settings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
};

export const HorizontalSlider: Story = () => (
	<Slider settings={horizontalSettings}>
		<Slide>1</Slide>
		<Slide>2</Slide>
		<Slide>3</Slide>
		<Slide>4</Slide>
		<Slide>5</Slide>
		<Slide>6</Slide>
	</Slider>
);

const verticalSettings: Settings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: true,
	verticalSwiping: true,
};

export const VerticalSlider: Story = () => (
	<Slider settings={verticalSettings}>
		<Slide>1</Slide>
		<Slide>2</Slide>
		<Slide>3</Slide>
		<Slide>4</Slide>
		<Slide>5</Slide>
		<Slide>6</Slide>
	</Slider>
);
