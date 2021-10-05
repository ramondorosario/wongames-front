import { ReactNode } from 'react';
import * as S from './styles';

export type ColorHeading = 'white' | 'black';
export type BorderColorHeading = 'greenDark' | 'pink';

export interface HeadingProps {
	children: ReactNode;
	borderLeft?: boolean;
	borderBottom?: boolean;
	borderColor?: BorderColorHeading;
	color?: ColorHeading;
}

export const Heading = ({
	color = 'black',
	children,
	borderBottom = false,
	borderColor = 'greenDark',
	borderLeft = true,
}: HeadingProps) => {
	return (
		<S.Wrapper
			borderColor={borderColor}
			borderBottom={borderBottom}
			borderLeft={borderLeft}
			color={color}
		>
			{children}
		</S.Wrapper>
	);
};
