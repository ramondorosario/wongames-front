import {
	AddShoppingCart,
	Favorite,
	FavoriteBorder,
} from '@styled-icons/material-outlined';
import { Button } from 'components/Button';
import { Ribbon } from 'components/Ribbon';
import * as S from './styles';

import { RibbonSizes, RibbonColors } from 'components/Ribbon';

export interface GameCardProps {
	img: string;
	title: string;
	developer: string;
	price: string;
	promotionalPrice?: string;
	favorite?: boolean;
	onFav?(): void;
	ribbon?: string;
	ribbonSize?: RibbonSizes;
	ribbonColor?: RibbonColors;
}

export const GameCard = ({
	img,
	title,
	developer,
	price,
	promotionalPrice,
	favorite = false,
	onFav,
	ribbon,
	ribbonColor = 'primary',
	ribbonSize = 'small',
}: GameCardProps) => {
	return (
		<S.Wrapper>
			{!!ribbon && (
				<Ribbon color={ribbonColor} size={ribbonSize}>
					{ribbon}
				</Ribbon>
			)}
			<S.ImageBox>
				<img src={img} alt={title} />
			</S.ImageBox>

			<S.Content>
				<S.Info>
					<S.Title>{title}</S.Title>
					<S.Developer>{developer}</S.Developer>
				</S.Info>
				<S.FavButton role="button" onClick={onFav}>
					{favorite ? (
						<Favorite aria-label="Remove from wish list" />
					) : (
						<FavoriteBorder aria-label="Add to wish list" />
					)}
				</S.FavButton>

				<S.BuyBox>
					{!!promotionalPrice && (
						<S.PromotionalPrice>{price}</S.PromotionalPrice>
					)}
					<S.Price>{promotionalPrice || price}</S.Price>
					<Button icon={<AddShoppingCart />} size="small" />
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
};
