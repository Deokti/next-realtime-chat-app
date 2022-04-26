import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { TEST_USER } from "../../config/TEST_DATA";
import styles from "./Profile.module.scss";
import { IoMdClose } from "react-icons/io";

export const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <IoMdClose title="Закрыть окно" className={styles.close} size={40} />
        <Avatar
          alt={TEST_USER.username}
          src={TEST_USER.avatar}
          sx={{ width: 100, height: 100 }}
          className={styles.avatar}
        />
        <h2 className={styles.title}>{TEST_USER.username}</h2>
        <h4 className={styles.span}>test@test.com</h4>
        <Button
          variant="contained"
          className="mt-10"
          style={{
            color: "#FFF",
            borderRadius: 7,
            fontSize: 14,
            boxShadow: "none",
          }}
          color="primary"
        >
          Изменить профиль
        </Button>
        <Button variant="contained" className={styles.exit}>
          Выйти
        </Button>
        <h6 className={styles.joined}>
          Присоеденился <span>25.04.2022</span>
        </h6>
      </div>
    </div>
  );
};
