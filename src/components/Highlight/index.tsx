import { Button } from 'components/Button';
import * as S from './styles';

type FloatPosition = 'left' | 'right';

export interface HighlightProps {
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
	backgroundImage: string;
	floatImage?: string;
	alignFloatImage?: FloatPosition;
}

export const Highlight = ({
	title,
	subtitle,
	buttonLabel,
	buttonLink,
	backgroundImage,
	floatImage,
	alignFloatImage = 'left',
}: HighlightProps) => {
	return (
		<S.Wrapper
			backgroundImage={backgroundImage}
			alignFloatImage={alignFloatImage}
		>
			{!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
			<S.Content>
				<S.Title>{title}</S.Title>
				<S.Subtitle>{subtitle}</S.Subtitle>
				<Button as="a" href={buttonLink}>
					{buttonLabel}
				</Button>
			</S.Content>
		</S.Wrapper>
	);
};
