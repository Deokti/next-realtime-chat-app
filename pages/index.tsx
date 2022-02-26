import styles from "../styles/Home.module.scss";
import { FC, ReactElement } from "react";
import Login from "./login";
import "@fontsource/roboto";
import "../assets/scss/theme.css";

const Home: FC = (): ReactElement => {
	return (
		<main className={styles.app}>
			<Login />
		</main>
	);
};

export default Home;
