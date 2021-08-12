import { Container, Segment, Image } from "semantic-ui-react";
import styles from "./body.module.css";

import src from "../../public/image5.jpg";
import src2 from "../../public/image6.jpg";

const ImageExampleFloated = () => {
	console.log(src);
	return (
		<Container text className={styles.container}>
			<Image src={src.src} size="medium" floated="left" />
			<p>
				Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
				facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
				referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
				electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
				Mei ex natum rebum iisque.
			</p>
			<p>
				Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
				definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
				te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
				vide phaedrum, vim vivendum maiestatis in.
			</p>
			<Image className={styles.container_i2} src={src2.src} size="medium" floated="right" />
			<p>
				Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
				ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
				Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
				wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
				mnesarchum eu per, quas minimum postulant per id.
			</p>
		</Container>
	);
};

export default ImageExampleFloated;
