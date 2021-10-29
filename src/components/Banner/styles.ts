import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as RibbonStyles from 'components/Ribbon/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		position: relative;

		${media.lessThan('large')`
			${RibbonStyles.Wrapper} {
				right: 0;

				&::after {
					display: none;
				}
			}
		`}

		${media.greaterThan('medium')`
			border-radius: ${theme.border.radius};
			box-shadow: 0 .4rem .5rem 0 rgba(0, 0, 0, 0.2);
		`}
	`}
`;

export const Img = styled.div<{ src: string }>`
	${({ src }) => css`
		width: 100%;
		height: 23rem;
		background-image: ${`url(${src})`};
		background-size: cover;
		background-position: center center;

		${media.greaterThan('medium')`
			height: 58rem;
		`}
	`}
`;

export const Box = styled.div`
	${({ theme }) => css`
		padding: ${theme.spacings.small};
		background-color: rgba(0, 0, 0, 0.7);
		color: ${theme.colors.white};

		${media.greaterThan('medium')`
			position: absolute;
			bottom: 0;
			width: 100%;
			border-radius: ${theme.border.radius};
		`}
	`}
`;

export const Title = styled.h2`
	${({ theme }) => css`
		font-weight: ${theme.font.bold};
		font-size: ${theme.font.sizes.xlarge};

		${media.greaterThan('medium')`
			font-size: ${theme.font.sizes.xxlarge};
		`}
	`}
`;

export const Subtitle = styled.h3`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		margin-bottom: ${theme.spacings.xxsmall};
		font-weight: ${theme.font.normal};

		strong {
			color: ${theme.colors.primary};
			font-weight: ${theme.font.bold};
		}

		${media.greaterThan('medium')`
			font-size: ${theme.font.sizes.xlarge};
			margin-bottom: ${theme.spacings.xsmall};
		`}
	`}
`;
