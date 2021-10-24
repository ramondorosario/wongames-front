import React, {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
	ElementType,
} from 'react';
import * as S from './styles';

export type Size = 'large' | 'medium' | 'small';

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	size?: Size;
	fullWidth?: boolean;
	icon?: ReactNode;
	as?: ElementType;
} & ButtonTypes;

export const Button = ({
	children,
	size = 'medium',
	fullWidth = false,
	icon,
	...props
}: ButtonProps) => {
	return (
		<S.Button size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
			{!!icon && icon}
			{!!children && <span>{children}</span>}
		</S.Button>
	);
};
