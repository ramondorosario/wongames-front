import { ReactNode } from 'react';
import * as S from './styles';

export type Size = 'large' | 'medium' | 'small';

export interface ButtonProps {
	size?: Size;
	children?: ReactNode;
	fullWidth?: boolean;
	icon?: ReactNode;
	onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const Button = ({
	children,
	size = 'medium',
	fullWidth = false,
	icon,
}: ButtonProps) => {
	return (
		<S.Button size={size} fullWidth={fullWidth} hasIcon={!!icon}>
			{!!icon && icon}
			{!!children && <span>{children}</span>}
		</S.Button>
	);
};
