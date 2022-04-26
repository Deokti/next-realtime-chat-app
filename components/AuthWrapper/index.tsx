import * as React from "react";
import {
  AuthWrapperProps,
  TLinkRedirect,
  TRedirect,
} from "./AuthWrapper.props";
import styles from "./AuthWrapper.module.scss";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "../Spinner";
import { SHOW_AND_HIDE, animationFromLeftToRight } from "../../config/FRAMER";

export const AuthWrapper = (props: AuthWrapperProps): React.ReactElement => {
  const { description, redirect, title, children, isLoading } = props;

  return (
    <React.Fragment>
      <AnimatePresence>
        {isLoading && (
          <motion.div {...SHOW_AND_HIDE}>
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
              <motion.div {...animationFromLeftToRight(0.5)}>
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
              <motion.div {...animationFromLeftToRight(0.3)}>
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
    <Link href={redirect[0]}>
      <a className={styles.redicect}>{redirect[1]}</a>
    </Link>
  );
};
