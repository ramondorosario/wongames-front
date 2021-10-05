import styled, { css } from 'styled-components';
import { DefaultBreakpoints } from 'styled-media-query';
import media from 'styled-media-query';

type Breakpoints = keyof DefaultBreakpoints;

export interface MediaMatchProps {
	greaterThan?: Breakpoints;
	lessThan?: Breakpoints;
}

const mediaMatchModifiers = {
	lessThan: (size: Breakpoints) => css`
		${media.lessThan(size)`
			display: block;
		`}
	`,
	greaterThan: (size: Breakpoints) => css`
		${media.greaterThan(size)`
			display: block;
		`}
	`,
};

export const MediaMatch = styled.div<MediaMatchProps>`
	${({ greaterThan, lessThan }) => css`
		display: none;

		${!!lessThan && mediaMatchModifiers.lessThan(lessThan)};
		${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)};
	`}
`;
