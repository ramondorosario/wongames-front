import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface StateProps {
	isOpen: boolean;
}

export const Wrapper = styled.menu<StateProps>`
	${({ theme, isOpen }) => css`
		display: ${isOpen ? 'none' : 'flex'};
		align-items: center;
		justify-content: space-between;

		padding: ${theme.spacings.small} 0;
		position: relative;
	`}
`;

export const Box = styled.div`
	${({ theme }) => css`
		display: grid;
		align-items: center;
		grid-auto-flow: column;
		column-gap: ${theme.spacings.small};

		${media.greaterThan('medium')`
			column-gap: ${theme.spacings.medium};
		`}
	`}
`;

export const IconWrapper = styled.button`
	${({ theme }) => css`
		all: unset;

		color: ${theme.colors.white};
		cursor: pointer;
		border: 0.2rem solid transparent;
		border-radius: ${theme.border.radius};

		:focus-visible {
			border-color: ${theme.colors.primary};
		}

		svg {
			width: 2.4rem;
			height: 2.4rem;
		}
	`}
`;

export const LogoWrapper = styled.div`
	${media.lessThan('medium')`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`}
`;

export const MenuFullScreen = styled.nav<StateProps>`
	${({ theme, isOpen }) => css`
		background-color: ${theme.colors.white};

		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100vh;
		overflow: hidden;
		pointer-events: ${isOpen ? 'all' : 'none'};

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		opacity: ${isOpen ? 1 : 0};
		transition: opacity 0.3s ease-in-out;

		${IconWrapper} {
			color: ${theme.colors.black};
			position: absolute;
			top: 0;
			right: 0;
			margin: ${theme.spacings.medium};
		}

		${MenuLink} {
			transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}

		${MenuFooter} {
			transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}
	`}
`;

export const MenuLink = styled.a`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: ${theme.font.sizes.xxlarge};
		font-weight: ${theme.font.bold};

		${media.greaterThan('medium')`
			color: ${theme.colors.white};
			font-size: ${theme.font.sizes.medium};
			font-weight: ${theme.font.normal};
		`}

		position: relative;
		text-align: center;
		text-decoration: none;
		outline: none;
		border: 0.2rem solid transparent;
		border-radius: ${theme.border.radius};

		:hover {
			::after {
				content: '';
				position: absolute;
				display: block;
				height: 0.3rem;
				background-color: ${theme.colors.primary};
				animation: hoverAnimationLink 0.2s forwards;
			}
		}

		:focus-visible {
			border-color: ${theme.colors.primary};
		}

		@keyframes hoverAnimationLink {
			from {
				width: 0;
				left: 50%;
			}
			to {
				width: 100%;
				left: 0;
			}
		}
	`}
`;

export const GroupMenuLink = styled.div`
	${({ theme }) => css`
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		a {
			margin-bottom: ${theme.spacings.medium};

			:last-of-type {
				margin-bottom: 0;
			}
		}

		${media.greaterThan('medium')`
			flex-direction: row;

			a {
				margin-bottom: 0;
				margin-right: ${theme.spacings.medium};

				:last-of-type {
					margin-right: 0;
				}
			}
		`}
	`}
`;

export const MenuFooter = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 ${theme.spacings.xxlarge} ${theme.spacings.xxlarge};

		> span {
			font-size: ${theme.font.sizes.xsmall};
			color: ${theme.colors.darkGray};
			margin: ${theme.spacings.xxsmall} 0;
		}
	`}
`;

export const MenuFooterLink = styled.a`
	${({ theme }) => css`
		text-decoration: none;
		font-size: ${theme.font.sizes.medium};
		color: ${theme.colors.primary};
		border: 0.2rem solid transparent;
		border-bottom-color: ${theme.colors.primary};
		outline: none;

		:focus-visible {
			border-radius: ${theme.border.radius};
			border-color: ${theme.colors.primary};
		}
	`}
`;

export const Profile = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		column-gap: ${theme.spacings.xxsmall};
		color: ${theme.colors.white};

		> span {
			display: inline-block;
			font-size: ${theme.font.sizes.medium};
			font-weight: ${theme.font.bold};
		}

		svg {
			width: 2.4rem;
			height: 2.4rem;
		}

		> button svg {
			color: ${theme.colors.gray};
		}
	`}
`;
