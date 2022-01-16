import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: ${theme.colors.white};
	`}
`;

export const ImageBox = styled.div`
	height: 13.8rem;

	img {
		object-fit: cover;
		object-position: center center;
		width: 100%;
		height: 100%;
	}
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		height: 100%;
		margin: ${theme.spacings.xsmall};
		background-color: ${theme.colors.white};
	`}
`;

export const Info = styled.div`
	max-width: calc(100% - 2.5rem);
`;

export const BuyBox = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		align-self: flex-end;
		margin-top: ${theme.spacings.xxsmall};
	`}
`;

export const Title = styled.h3`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		color: ${theme.colors.black};
	`}
`;

export const Developer = styled.h4`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xsmall};
		font-weight: ${theme.font.normal};
		color: ${theme.colors.gray};
	`}
`;

export const FavButton = styled.div`
	${({ theme }) => css`
		position: absolute;
		right: 0;
		top: -0.5rem;
		cursor: pointer;

		svg {
			width: 2.5rem;
			height: 2.5rem;
			color: ${theme.colors.primary};
		}
	`}
`;

export const PromotionalPrice = styled.p`
	${({ theme }) => css`
		font-weight: ${theme.font.bold};
		font-size: ${theme.font.sizes.small};
		text-decoration: line-through;
		color: ${theme.colors.gray};

		filter: brightness(1.5);
		margin-right: ${theme.spacings.xsmall};
	`}
`;

export const Price = styled.div`
	${({ theme }) => css`
		height: 3rem;
		display: inline-flex;
		align-items: center;

		font-weight: ${theme.font.bold};
		font-size: ${theme.font.sizes.small};
		text-decoration: none;
		color: ${theme.colors.white};

		background-color: ${theme.colors.secondary};
		padding: ${`0 ${theme.spacings.xxsmall}`};
		border-radius: 0.2rem;
		margin-right: calc(${theme.spacings.xxsmall} / 2);
	`}
`;
