import styles from "./call.module.css";
import { Sticky } from "semantic-ui-react";
import whatsapp from "../images/icons/whatsapp.png";

function Call() {
	return (
		<a href="https://api.whatsapp.com/send?phone=+905331602882">
			<div className={styles.container}>
				<h2> Whatsapp </h2>
				<img src={whatsapp.src} className={styles.img} />
			</div>
		</a>
	);
}

export default Call;
