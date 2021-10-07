import { useState } from 'react';

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { UserCircle as UserIcon } from '@styled-icons/heroicons-outline/UserCircle';
import { ChevronDown as Chevronicon } from '@styled-icons/feather/ChevronDown';

import { Logo } from 'components/Logo';
import { MediaMatch } from 'components/MediaMatch';

import * as S from './styles';
import { Button } from 'components/Button';

export interface MenuProps {
	username?: string;
}

export const Menu = ({ username }: MenuProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<S.Wrapper isOpen={isOpen}>
				<MediaMatch lessThan="medium">
					<S.IconWrapper onClick={() => setIsOpen(true)}>
						<MenuIcon aria-label="Open menu" />
					</S.IconWrapper>
				</MediaMatch>

				<S.Box>
					<S.LogoWrapper>
						<Logo hideOnMobile />
					</S.LogoWrapper>

					<MediaMatch greaterThan="medium">
						<S.GroupMenuLink>
							<S.MenuLink href="#">Home</S.MenuLink>
							<S.MenuLink href="#">Store</S.MenuLink>
						</S.GroupMenuLink>
					</MediaMatch>
				</S.Box>

				<S.Box>
					<S.IconWrapper>
						<SearchIcon aria-label="Search" />
					</S.IconWrapper>

					<S.IconWrapper>
						<ShoppingCartIcon aria-label="Open shopping cart" />
					</S.IconWrapper>

					<MediaMatch greaterThan="medium">
						{!username ? (
							<Button>Sign in</Button>
						) : (
							<S.Profile>
								<UserIcon data-testid="user-icon" />
								<span>Username</span>
								<S.IconWrapper>
									<Chevronicon />
								</S.IconWrapper>
							</S.Profile>
						)}
					</MediaMatch>
				</S.Box>
			</S.Wrapper>

			<S.MenuFullScreen aria-hidden={!isOpen} isOpen={isOpen}>
				<S.IconWrapper onClick={() => setIsOpen(false)}>
					<CloseIcon aria-label="Close menu" />
				</S.IconWrapper>

				<S.GroupMenuLink>
					<S.MenuLink href="#">Home</S.MenuLink>
					<S.MenuLink href="#">Store</S.MenuLink>

					{!!username && (
						<>
							<S.MenuLink href="#">My account</S.MenuLink>
							<S.MenuLink href="#">Wishlist</S.MenuLink>
						</>
					)}
				</S.GroupMenuLink>

				{!username && (
					<S.MenuFooter>
						<Button fullWidth size="large">
							Login in now
						</Button>
						<span>or</span>
						<S.MenuFooterLink href="#">Sign up</S.MenuFooterLink>
					</S.MenuFooter>
				)}
			</S.MenuFullScreen>
		</>
	);
};
