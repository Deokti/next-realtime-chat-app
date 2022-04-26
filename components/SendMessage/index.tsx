import React, { ReactElement } from "react";
import styles from "./SendMessage.module.scss";
import { SendMessageProps } from "./SendMessage.props";
import cn from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import { ReactComponent as Paperplane } from "../../assets/paperplane.svg";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiNeutral } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { animationShowAndHide } from "../../config/FRAMER";

export const SendMessage = (props: SendMessageProps): ReactElement => {
  const { className, onChange, value } = props;

  const isValue = Boolean(value && value?.toString().length > 0);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={cn(styles.writable, { [styles.isValue]: isValue })}>
        <TextareaAutosize
          className={cn(styles.textarea)}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={styles.icons}>
        <BsEmojiNeutral
          size={20}
          className={styles.icon}
          title="Добавить смайлик"
        />
        <AiOutlinePaperClip
          className={styles.icon}
          size={25}
          title="Загрузить сторонний файл"
        />

        <button className={styles.button}>
          <AnimatePresence exitBeforeEnter>
            {isValue && (
              <motion.div
                {...animationShowAndHide({ duration: 0.1 })}
                key="SendMessage"
              >
                <HiOutlinePaperAirplane
                  size={20}
                  className={cn(styles.buttonIcon, styles.stroke)}
                />
              </motion.div>
            )}

            {!isValue && (
              <motion.div
                {...animationShowAndHide({ duration: 0.1 })}
                key="SendMessage2"
              >
                <BiMicrophone
                  size={23}
                  className={cn(styles.buttonIcon, styles.fill)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};
