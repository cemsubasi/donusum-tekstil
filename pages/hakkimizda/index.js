import Head from "next/head";
import Navbar from "../../common/Navbar";
import styles from "./index.module.css";
import { Container, Header } from "semantic-ui-react";
import Body from "./Body";

function Hakkimizda() {
	return (
		<>
			<Head>
				<title>Hakkimizda</title>
				<meta name="description" content="Dönüşüm Tekstil" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<Container className={styles.text_container}>
					<Header className={styles.header}>Hakkimizda</Header>
					<Body />
				</Container>
			</div>
		</>
	);
}

export default Hakkimizda;
