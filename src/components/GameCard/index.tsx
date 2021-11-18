import {
	AddShoppingCart,
	FavoriteBorder,
} from '@styled-icons/material-outlined';
import { Button } from 'components/Button';
import * as S from './styles';

export interface GameCardProps {
	img: string;
	title: string;
	developer: string;
	price: string;
	promotionalPrice?: string;
}

export const GameCard = ({
	img,
	title,
	developer,
	price,
	promotionalPrice,
}: GameCardProps) => {
	return (
		<S.Wrapper>
			<S.ImageBox>
				<img src={img} alt={title} />
			</S.ImageBox>

			<S.Content>
				<S.Info>
					<div>
						<S.Title>{title}</S.Title>
						<S.Developer>{developer}</S.Developer>
					</div>
					<S.FavButton role="button">
						<FavoriteBorder aria-label="Add to wish list" />
					</S.FavButton>
				</S.Info>

				<S.BuyBox>
					{!!promotionalPrice && (
						<S.PromotionalPrice>{promotionalPrice}</S.PromotionalPrice>
					)}
					<S.Price>{price}</S.Price>
					<Button icon={<AddShoppingCart />} size="small" />
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
};
