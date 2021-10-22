import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, BorderColor } from '.';

const wrapperModifiers = {
	borderLeft: (theme: DefaultTheme, borderColor: BorderColor) => css`
		padding-left: ${theme.spacings.xxsmall};
		border-left: 0.7rem solid ${theme.colors[borderColor]};
	`,
	borderBottom: (theme: DefaultTheme, borderColor: BorderColor) => css`
		padding-bottom: 0.4rem;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			width: 5rem;
			bottom: 0;
			left: 0;
			border-bottom: 0.5rem solid ${theme.colors[borderColor]};
		}
	`,
	medium: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.xxlarge};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.xlarge};
		`}
	`,
	small: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.medium};

		&::before {
			width: 3rem;
		}
	`,
};

export const Wrapper = styled.h2<HeadingProps>`
	${({ theme, color, borderBottom, borderLeft, size, borderColor }) => css`
		font-weight: ${theme.font.bold};
		color: ${theme.colors[color!]};

		${borderBottom && wrapperModifiers.borderBottom(theme, borderColor!)}
		${borderLeft && wrapperModifiers.borderLeft(theme, borderColor!)}
		${!!size && wrapperModifiers[size](theme)}
	`}
`;
