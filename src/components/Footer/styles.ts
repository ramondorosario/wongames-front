import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as LogoStyles from 'components/Logo/styles';

export const Wrapper = styled.footer`
	${({ theme }) => css`
		${LogoStyles.Wrapper} {
			margin-bottom: ${theme.spacings.small};
		}
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: ${theme.spacings.large};
		row-gap: ${theme.spacings.small};

		${HeadingStyles.Wrapper} {
			margin-bottom: ${theme.spacings.xxsmall};
			text-transform: uppercase;
		}

		${media.greaterThan('medium')`
			grid-template-columns: repeat(4, 1fr);
			gap: none;
		`}
	`}
`;

export const Column = styled.div`
	${({ theme }) => css`
		nav {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
		}

		a {
			font-size: ${theme.font.sizes.small};
			color: ${theme.colors.gray};
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	`}
`;

export const Copyright = styled.p`
	${({ theme }) => css`
		text-align: center;
		font-size: ${theme.font.sizes.xsmall};
		color: ${theme.colors.gray};
		margin-top: ${theme.spacings.large};
	`}
`;
