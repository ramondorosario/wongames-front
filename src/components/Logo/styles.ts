import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps, Size } from '.';

const wrapperModifiers: Record<Size, () => FlattenSimpleInterpolation> & {
	hideOnMobile(): FlattenSimpleInterpolation;
} = {
	large: () => css`
		width: 20rem;
		height: 6rem;
	`,
	normal: () => css`
		width: 11rem;
		height: 3.3rem;
	`,
	hideOnMobile: () => css`
		${media.lessThan('medium')`
		 width: 5.8rem;
		 height: 4.5rem;

		 svg {
			 height: 4.5rem;
			 pointer-events: none;
		 }

		 .text {
			 display: none;
		 }
	 `}
	`,
};

export const Wrapper = styled.div<LogoProps>`
	${({ theme, color, size, hideOnMobile }) => css`
		color: ${theme.colors[color!]};

		${!!size && wrapperModifiers[size]};
		${!!hideOnMobile && wrapperModifiers.hideOnMobile}
	`}
`;
