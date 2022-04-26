import { IUser } from "../interfaces/auth";
import { IMessage } from "../interfaces/message";

export const TEST_USER: IUser = {
  _id: "1",
  avatar:
    "https://avatars.mds.yandex.net/get-images-cbir/1776014/FDNMCWpPldSyC7p_XMaK9Q5954/ocr",
  isOnline: false,
  username: "Каин Искариот",
};

export const TEST_MESSAGE: IMessage = {
  creator: TEST_USER,
  data: "Простое сообщение для проверка отображения",
  timestamp: 1650909402860,
  isWatched: false,
};

export const TEST_USERS: IUser[] = [
  TEST_USER,
  {
    _id: "2",
    avatar:
      "https://avatars.mds.yandex.net/get-images-cbir/1766990/S4WFpIPTEEOIugOigGVBsg5960/ocr",
    isOnline: true,
    username: "Имя Фамилия",
  },
];
