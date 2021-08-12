import { Input, Header } from "semantic-ui-react";
import styles from "./footer.module.css";

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.categories}>
				<h3>Kategoriler</h3>
				<ul>
					<li><a href="/">Ana Sayfa</a></li>
					<a href='/hakkimizda'><li>Hakkimizda</li></a>
					<a href="/iletisim"><li>Iletisim</li></a>
				</ul>
			</div>
			<div></div>
			<div className={styles.form}>
				<Header className={styles.input_header} as="h2">
					Bize Numaranızı gönderin
				</Header>
				<Input
					action={{
						labelPosition: "right",
						icon: "send",
						content: "Gönder",
					}}
					defaultValue="05"
				/>
				<p className={styles.input_p}>
					© 2021 Dönüşüm Tekstil - Tüm Hakları Saklıdır.
				</p>
			</div>
		</div>
	);
}

export default Footer;
