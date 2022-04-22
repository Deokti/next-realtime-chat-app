import * as React from "react";
import { AuthWrapperProps, TRedirect } from "./AuthWrapper.props";
import styles from "./AuthWrapper.module.scss";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "../../components/Spinner";

export const AuthWrapper = (props: AuthWrapperProps): React.ReactElement => {
  const { description, redirect, title, children, isLoading } = props;

  return (
    <React.Fragment>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Spinner />
          </motion.div>
        )}
        {!isLoading && (
          <motion.div
            className={styles.wrapper}
            exit={{ opacity: 0, scale: 0 }}
            key="AuthFormWrapper"
          >
            <Container fixed>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Typography
                  component="h1"
                  variant="h6"
                  fontWeight="700"
                  textTransform="uppercase"
                  fontSize={18}
                  className={styles.title}
                >
                  {title}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Typography
                  component="p"
                  fontSize={14}
                  className={styles.subtitle}
                >
                  {description}
                </Typography>
              </motion.div>
              <div className={styles.inner}>
                <div className={styles.children}>{children}</div>
                <Redirect redirect={redirect} />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

const Redirect = ({
  redirect,
}: {
  redirect: TRedirect;
}): React.ReactElement => {
  return (
    <Link href={redirect}>
      <a className={styles.redicect}>
        {redirect === "/register"
          ? "Зарегистрироваться"
          : "Уже зарегистрированы?"}
      </a>
    </Link>
  );
};
