import { Heading } from 'components/Heading';
import { Logo } from 'components/Logo';
import * as S from './styles';

const mock = [
	{
		title: 'Contact',
		ariaLabel: 'Contacts',
		list: [
			{ name: 'suporte@wongames.gg', link: '#' },
			{ name: '+55 21 33283719', link: '#' },
		],
	},
	{
		title: 'Follow Us',
		ariaLabel: 'Social Media',
		list: [
			{ name: 'Instagram', link: '#' },
			{ name: 'Twitter', link: '#' },
			{ name: 'YouTube', link: '#' },
			{ name: 'Facebook', link: '#' },
		],
	},
	{
		title: 'Links',
		ariaLabel: 'Navegation',
		list: [
			{ name: 'Loja', link: '#' },
			{ name: 'Explorar', link: '#' },
			{ name: 'Buscar', link: '#' },
			{ name: 'FAQ', link: '#' },
		],
	},
	{
		title: 'Location',
		ariaLabel: 'Location',
		list: [
			{ name: 'Rua 7 de Maio', link: '#' },
			{ name: '527 - 89020330', link: '#' },
			{ name: 'Rio de Janeiro, Brasil', link: '#' },
		],
	},
];

export const Footer = () => {
	return (
		<S.Wrapper>
			<Logo size="normal" color="black" />

			<S.Content data-testid="grid">
				{mock.map(({ title, list, ariaLabel }) => (
					<S.Column key={title}>
						<Heading borderBottom borderColor="secondary" size="small">
							{title}
						</Heading>

						<nav aria-label={ariaLabel}>
							{list.map(({ name, link }) => (
								<a href={link} target="_blank" key={name} rel="noreferrer">
									{name}
								</a>
							))}
						</nav>
					</S.Column>
				))}
			</S.Content>

			<S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
		</S.Wrapper>
	);
};
