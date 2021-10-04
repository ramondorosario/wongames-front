import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { LogoProps, Size } from '.';

const wrapperModifiers: Record<Size, () => FlattenSimpleInterpolation> = {
	large: () => css`
		width: 20rem;
		height: 6rem;
	`,
	normal: () => css`
		width: 11rem;
		height: 3.3rem;
	`,
};

export const Wrapper = styled.div<LogoProps>`
	${({ theme, color, size }) => css`
		color: ${theme.colors[color!]};

		${!!size && wrapperModifiers[size]};
	`}
`;
