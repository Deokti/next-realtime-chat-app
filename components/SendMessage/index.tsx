import React, { ReactElement } from "react";
import styles from "./SendMessage.module.scss";
import { SendMessageProps } from "./SendMessage.props";
import cn from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiNeutral } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { animationShowAndHide, EMOJI_VISIBLE } from "../../config/FRAMER";
import Picker, { SKIN_TONE_LIGHT } from "emoji-picker-react";

export const SendMessage = (props: SendMessageProps): ReactElement => {
  const {
    className,
    value,
    style,
    isEmojiVisible = false,
    onEmojiClick,
    onEmojiVisible,
    onChange,
  } = props;

  const isValue = Boolean(value && value?.toString().length > 0);

  return (
    <div className={cn(styles.wrapper, className)} style={style}>
      <div className={cn(styles.writable, { [styles.isValue]: isValue })}>
        <TextareaAutosize
          className={cn(styles.textarea)}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={styles.icons}>
        <div className={styles.emoji}>
          <AnimatePresence>
            {isEmojiVisible && (
              <motion.div {...EMOJI_VISIBLE}>
                <Picker
                  disableAutoFocus={true}
                  skinTone={SKIN_TONE_LIGHT}
                  groupNames={{ smileys_people: "PEOPLE" }}
                  native
                  pickerStyle={{ width: "400px" }}
                  onEmojiClick={onEmojiClick}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <BsEmojiNeutral
          size={20}
          className={styles.icon}
          onClick={onEmojiVisible}
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
                key="HiOutlinePaperAirplane"
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
                key="BiMicrophone"
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
