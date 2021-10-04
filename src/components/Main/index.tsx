import * as S from './styles';

export const Main = ({
	title = 'React Avançado',
	description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => {
	return (
		<S.Wrapper>
			<S.Logo
				src="/images/logo.svg"
				alt="Logo do react e React Avançado escrito ao lado"
			/>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
			<S.Illustration
				src="/images/hero-illustration.svg"
				alt="Desenvolvedor utilizando um computador"
			/>
		</S.Wrapper>
	);
};
