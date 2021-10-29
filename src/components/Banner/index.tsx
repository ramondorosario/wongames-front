import { Button } from 'components/Button';
import { MediaMatch } from 'components/MediaMatch';
import { Ribbon } from 'components/Ribbon';

import * as S from './styles';

import { RibbonColors, RibbonSizes } from 'components/Ribbon';

export interface BannerProps {
	img: string;
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
	ribbonText?: string;
	ribbonColor?: RibbonColors;
	ribbonSize?: RibbonSizes;
}

export const Banner = ({
	img,
	title,
	subtitle,
	buttonLabel,
	buttonLink,
	ribbonText,
	ribbonColor,
	ribbonSize,
}: BannerProps) => {
	return (
		<S.Wrapper>
			{!!ribbonText && (
				<Ribbon color={ribbonColor} size={ribbonSize}>
					{ribbonText}
				</Ribbon>
			)}
			<S.Img src={img} role="img" aria-label={title} />
			<S.Box>
				<S.Title>{title}</S.Title>
				<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
				<MediaMatch greaterThan="medium">
					<Button as="a" href={buttonLink} size="large">
						{buttonLabel}
					</Button>
				</MediaMatch>
				<MediaMatch lessThan="medium">
					<Button as="a" href={buttonLink} size="medium">
						{buttonLabel}
					</Button>
				</MediaMatch>
			</S.Box>
		</S.Wrapper>
	);
};
