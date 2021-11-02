import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignFloatImage'>;

const WrapperModifiers = {
	left: () => css`
		flex-direction: row;
	`,
	right: () => css`
		flex-direction: row-reverse;
		text-align: left;
	`,
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, backgroundImage, alignFloatImage }) => css`
		position: relative;
		height: 23rem;
		color: ${theme.colors.white};

		background-image: url(${backgroundImage});
		background-position: center center;
		background-size: cover;

		text-align: right;

		display: flex;
		/* justify-content: space-between; */

		${!!alignFloatImage && WrapperModifiers[alignFloatImage]};

		&::after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.6);
		}
	`}

	${media.greaterThan('medium')`
		height: 32rem;
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		position: relative;
		width: 100%;
		padding: ${theme.spacings.xsmall};
		z-index: ${theme.layers.base};

		${media.lessThan('small')`
			a {
				padding: 0 ${theme.spacings.small};
			}
		`}

		${media.greaterThan('medium')`
			padding: ${theme.spacings.xlarge};
			align-self: flex-end;
		`}
	`}
`;

export const FloatImage = styled.img`
	${({ theme }) => css`
		position: relative;
		max-height: 15.7rem;
		z-index: ${theme.layers.base};

		align-self: flex-end;

		${media.greaterThan('medium')`
			max-height: 32rem;
		`}
	`}
`;

export const Title = styled.h2`
	${({ theme }) => css`
		font-weight: ${theme.font.bold};
		font-size: ${theme.font.sizes.large};

		${media.greaterThan('medium')`
			font-size: ${theme.font.sizes.xxlarge};
		`}
	`}
`;

export const Subtitle = styled.h3`
	${({ theme }) => css`
		font-weight: ${theme.font.light};
		font-size: ${theme.font.sizes.small};
		margin-bottom: ${theme.spacings.xsmall};

		${media.greaterThan('medium')`
			font-size: ${theme.font.sizes.large};
		`}
	`}
`;
