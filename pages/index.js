import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import "semantic-ui-css/semantic.min.css";
import { Container, Header, Icon, Grid, Button } from "semantic-ui-react";
import Navbar from "../common/Navbar";

function Home() {
	return (
		<>
			<Head>
				<title>Dönüşüm Tekstil</title>
				<meta name="description" content="Dönüşüm Tekstil" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<div className={styles.background}>
					<Header className={styles.background_header}>
						TEKSTILDE DONUSUMUN YERI
					</Header>
					<span className={styles.background_span}></span>
					<p className={styles.background_p}>Lorem ipsum dolor sit amet</p>
					<a href="tel:+905331602882">
						<Button size="large" className={styles.background_button}>
							Hemen Ara
						</Button>
					</a>
				</div>
			</div>
			<div className={styles.middle_section}>
				<Icon
					className={styles.middle_icon}
					name="long arrow alternate down"
					size="huge"
				/>
				<Grid className={styles.middle_grid} stackable columns={2}>
					<Grid.Column className={styles.middle_column}>
						<Icon name="handshake outline" size="huge" />
						<Header as="h3">asdasfjasf</Header>
						<p className={styles.grid_p}>
							asfklashfklnasbklfbaskbfnasnflknaskflnsaklfnkasnfkasnfknaskfnkasjdknaasfklashfklnasbklfbaskbfnasnflknaskflnsaklfnkasnfkasnfknaskfnkasjdkna
							asfklashfklnasbklfbaskbfnasnflknaskflnsaklfnkasnfkasnfknaskfnkasjdkna
						</p>
					</Grid.Column>
					<Grid.Column className={styles.middle_column}>
						<Icon name="recycle" size="huge" />
						<Header as="h3">asdasfjasf</Header>
						<p className={styles.grid_p}>
							asfklashfklnasbklfbaskbfnasnflknaskflnsaklfnkasnfkasnfknaskfnkasjdknaasfklashfklnasbklfbaskbfnasnflknaskflnsaklfnkasnfkasnfknaskfnkasjdkna
							asfklashfklnasbklfbaskbfnasnflknaskflnsaklfnkasnfkasnfknaskfnkasjdkna
						</p>
					</Grid.Column>
				</Grid>
			</div>
		</>
	);
}

export default Home;
