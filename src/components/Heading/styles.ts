import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps } from '.';

const wrapperModifiers = {
	borderLeft: (theme: DefaultTheme) => css`
		padding-left: ${theme.spacings.xxsmall};
		border-left: 0.7rem solid ${theme.colors.secondary};
	`,
	borderBottom: (theme: DefaultTheme) => css`
		padding-bottom: 0.4rem;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			width: 5rem;
			bottom: 0;
			left: 0;
			border-bottom: 0.5rem solid ${theme.colors.primary};
		}
	`,
};

export const Wrapper = styled.h2<HeadingProps>`
	${({ theme, color, borderBottom, borderLeft }) => css`
		font-size: ${theme.font.sizes.xxlarge};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.xlarge};
		`}

		font-weight: ${theme.font.bold};
		color: ${theme.colors[color!]};

		${borderBottom && wrapperModifiers.borderBottom(theme)}
		${borderLeft && wrapperModifiers.borderLeft(theme)}
	`}
`;
