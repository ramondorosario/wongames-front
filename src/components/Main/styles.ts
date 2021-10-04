import styled from 'styled-components';

export const Wrapper = styled.main`
	min-height: 100vh;
	background-color: #06092b;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-align: center;
	color: #fff;
`;

export const Logo = styled.img`
	max-width: 25rem;
	margin-bottom: 2rem;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
`;

export const Description = styled.h3`
	font-size: 2rem;
	font-weight: 400;
`;

export const Illustration = styled.img`
	margin-top: 3rem;
	width: min(30rem, 100%);
`;
