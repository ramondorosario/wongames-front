import styled, {
	css,
	DefaultTheme,
	FlattenSimpleInterpolation,
} from 'styled-components';
import { RibbonColors, RibbonProps, RibbonSizes } from '.';
import { darken } from 'polished';

const wrapperModifiers: Record<
	RibbonSizes,
	(theme: DefaultTheme, color: RibbonColors) => FlattenSimpleInterpolation
> & {
	color: (
		theme: DefaultTheme,
		color: RibbonColors
	) => FlattenSimpleInterpolation;
} = {
	color: (theme: DefaultTheme, color: RibbonColors) => css`
		background-color: ${theme.colors[color]};

		&::after {
			border-left-color: ${darken(0.2, theme.colors[color])};
			border-top-color: ${darken(0.2, theme.colors[color])};
		}
	`,
	small: (theme) => css`
		height: 2.4rem;
		font-size: ${theme.font.sizes.xsmall};
		padding: 0 ${theme.spacings.small};
		right: -1.5rem;

		&::after {
			top: 2.4rem;
			border-top-width: 0.7rem;
			border-right-width: 1.5rem;
		}
	`,
	large: (theme) => css`
		height: 3.3rem;
		font-size: ${theme.font.sizes.small};
		padding: 0 ${theme.spacings.medium};
		right: -2rem;

		&::after {
			top: 3.3rem;
			border-top-width: 1rem;
			border-right-width: 2rem;
		}
	`,
	xlarge: (theme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.large};
		padding: 0 ${theme.spacings.large};
		right: -2.5rem;

		&::after {
			top: 4rem;
			border-top-width: 1.3rem;
			border-right-width: 2.5rem;
		}
	`,
};

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
	${({ theme, color, size }) => css`
		position: absolute;
		display: flex;
		align-items: center;
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};
		right: 0;
		top: 2rem;

		&::after {
			content: '';
			position: absolute;
			right: 0;
			border-style: solid;
			border-left-width: 0;
			border-right-color: transparent;
			border-bottom-color: transparent;
			border-bottom-width: 1rem;
		}

		${!!color && wrapperModifiers.color(theme, color)};
		${!!size && wrapperModifiers[size](theme, color!)};
	`}
`;
