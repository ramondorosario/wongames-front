import { ReactNode } from 'react';
import SlickSlider, { Settings } from 'react-slick';

import * as S from './styles';

export type SliderSettings = Settings;

export interface SliderProps {
	children: ReactNode;
	settings: SliderSettings;
}

export const Slider = ({ children, settings }: SliderProps) => {
	return (
		<S.Wrapper>
			<SlickSlider {...settings}>{children}</SlickSlider>
		</S.Wrapper>
	);
};
