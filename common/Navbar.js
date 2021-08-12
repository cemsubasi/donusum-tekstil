import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container, Header } from "semantic-ui-react";
import logo from "../images/recycling.png";
import styles from "./navbar.module.css";

export default function Navbar() {
	const { pathname } = useRouter();
	console.log(pathname);

	return (
		<Menu stackable className={styles.container}>
			<Container>
				<Menu.Item as="a" href="/" className={styles.a_menu}>
					<img src={logo.src} />
					<span className={styles.span}>Donusum Tekstil</span>
				</Menu.Item>

				<Menu.Item
					as="a"
					href="/"
					className={styles.a_menu}
					active={pathname === "/"}
				>
					Ana Sayfa
				</Menu.Item>

				<Menu.Item
					as="a"
					href="/hakkimizda"
					className={styles.a_menu}
					active={pathname === "/hakkimizda"}
				>
					Hakkımızda
				</Menu.Item>

				<Menu.Item
					as="a"
					href="/iletisim"
					className={styles.a_menu}
					active={pathname === "/iletisim"}
				>
					İletişim
				</Menu.Item>
			</Container>
		</Menu>
	);
}
