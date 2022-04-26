import React, { ReactElement } from "react";
import styles from "./Message.module.scss";
import { BsCheck2, BsCheck2All } from "react-icons/bs";
import { MessageProps } from "./Message.props";
import { format, formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import cn from "classnames";

export const Message = (props: MessageProps): React.ReactElement => {
  const { creator, data, timestamp, isWatched, isCreator } = props;

  const watched = isWatched ? "Просмотрено" : "Не просмотрено";

  return (
    <div className={cn(styles.wrapper, { [styles.isCreator]: isCreator })}>
      <div
        title={creator.username}
        className={styles.creator}
        style={{ backgroundImage: `url(${creator.avatar})` }}
      />
      <div className={styles.data}>
        <span className={styles.message}>{data}</span>

        <div className={styles.details}>
          <span className={styles.timestamp}>{timestampInTime(timestamp)}</span>
          <span className={styles.isWatched} title={watched}>
            {isWatched ? <BsCheck2All /> : <BsCheck2 />}
          </span>
        </div>
      </div>
    </div>
  );
};

const timestampInTime = (timestamp: number): string =>
  `${formatDistance(timestamp, Date.now(), {
    addSuffix: true,
    locale: ru,
  })} в ${format(timestamp, "H:m")}`;
