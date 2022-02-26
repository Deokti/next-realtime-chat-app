import styles from "../styles/Home.module.scss";
import { FC, ReactElement } from "react";
import Login from "./login";
import { ChatItem } from "../components/ChatItem";
import "@fontsource/roboto";
import { IUser } from "../interfaces/auth";

const USERS = {
	KAIN: {
		_id: "01",
		isOnline: false,
		username: "Каин Искариот",
		avatar: "Каин",
	},
	JHON: {
		_id: "01",
		isOnline: true,
		username: "Джон",
		avatar: "Джон",
	},
};

const Home: FC = (): ReactElement => {
	return (
		<main className={styles.app}>
			<ChatItem user={USERS.KAIN} />
			<ChatItem user={USERS.JHON} isSelected />
			{/*<Login />*/}
		</main>
	);
};

export default Home;
