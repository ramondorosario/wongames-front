import { ReactNode } from 'react';
import * as S from './styles';

export type ColorHeading = 'white' | 'black';
export type BorderColor = 'primary' | 'secondary';
export type Size = 'small' | 'medium';

export interface HeadingProps {
	children: ReactNode;
	borderLeft?: boolean;
	borderBottom?: boolean;
	borderColor?: BorderColor;
	color?: ColorHeading;
	size?: Size;
}

export const Heading = ({
	color = 'black',
	children,
	borderBottom = false,
	borderColor = 'primary',
	borderLeft = true,
	size = 'medium',
}: HeadingProps) => {
	return (
		<S.Wrapper
			borderColor={borderColor}
			borderBottom={borderBottom}
			borderLeft={borderLeft}
			color={color}
			size={size}
		>
			{children}
		</S.Wrapper>
	);
};
