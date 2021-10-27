import { Button } from 'components/Button';
import { MediaMatch } from 'components/MediaMatch';

import * as S from './styles';

export interface BannerProps {
	img: string;
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
}

export const Banner = ({
	img,
	title,
	subtitle,
	buttonLabel,
	buttonLink,
}: BannerProps) => {
	return (
		<S.Wrapper>
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
