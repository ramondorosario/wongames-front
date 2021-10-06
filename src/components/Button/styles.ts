import styled, {
	css,
	DefaultTheme,
	FlattenSimpleInterpolation,
} from 'styled-components';
import { ButtonProps, Size } from '.';

type ButtonStyleProps = Pick<ButtonProps, 'size' | 'fullWidth'> & {
	hasIcon: boolean;
};

const buttonModifiers: Record<
	Size,
	(theme: DefaultTheme) => FlattenSimpleInterpolation
> & {
	fullWidth(): FlattenSimpleInterpolation;
	withIcon: (theme: DefaultTheme) => FlattenSimpleInterpolation;
} = {
	large: (theme) => css`
		padding: 0 ${theme.spacings.xlarge};
		height: 5rem;
		font-size: ${theme.font.sizes.medium};
	`,

	medium: (theme) => css`
		height: 4rem;
		padding: 0 ${theme.spacings.medium};
		font-size: ${theme.font.sizes.small};
	`,

	small: (theme) => css`
		height: 3rem;
		padding: 0 ${theme.spacings.medium};
		font-size: ${theme.font.sizes.xsmall};
	`,

	fullWidth: () => css`
		width: 100%;
	`,

	withIcon: (theme) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 ${theme.spacings.xsmall};

		svg {
			width: 1.5rem;

			& + span {
				margin-left: ${theme.spacings.xxsmall};
			}
		}
	`,
};

export const Button = styled.button<ButtonStyleProps>`
	${({ theme, size, fullWidth, hasIcon }) => css`
		background: linear-gradient(
			180deg,
			#ff5f5f -14.51%,
			#f062c0 102.86%,
			#f23131 102.86%
		);
		border-radius: ${theme.border.radius};
		cursor: pointer;
		border: 0;
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.bold};

		:hover {
			background: linear-gradient(180deg, #e35565 0%, #d958a6 100%),
				linear-gradient(
					180deg,
					#ff5f5f -14.51%,
					#f062c0 102.86%,
					#f23131 102.86%
				);
		}

		${!!size && buttonModifiers[size!](theme)}
		${hasIcon && buttonModifiers.withIcon(theme)}
		${fullWidth && buttonModifiers.fullWidth}
	`}
`;
