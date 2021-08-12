import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Call from "../common/Call";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Call />
			<Footer />
		</>
	);
}

export default MyApp;
