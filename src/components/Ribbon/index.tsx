import { ReactNode } from 'react';
import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'small' | 'large' | 'xlarge';

export interface RibbonProps {
	children: ReactNode;
	color?: RibbonColors;
	size?: RibbonSizes;
}

export const Ribbon = ({
	children,
	color = 'primary',
	size = 'small',
}: RibbonProps) => {
	return (
		<S.Wrapper color={color} size={size}>
			{children}
		</S.Wrapper>
	);
};
