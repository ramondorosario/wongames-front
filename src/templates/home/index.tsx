import { Menu } from 'components/Menu';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';

import { Heading } from 'components/Heading';

export const HomeTemplate = () => {
	return (
		<section>
			<Container>
				<Menu />
			</Container>

			<Container>
				<Heading borderLeft color="black" borderColor="secondary">
					News
				</Heading>
			</Container>

			<Container>
				<Heading borderLeft color="white" borderColor="secondary">
					Most Popular
				</Heading>
			</Container>

			<Container>
				<Heading borderLeft color="white" borderColor="secondary">
					Upcomming
				</Heading>
			</Container>

			<Container>
				<Heading borderLeft color="white" borderColor="secondary">
					Free Games
				</Heading>
			</Container>

			<Container>
				<Footer />
			</Container>
		</section>
	);
};
