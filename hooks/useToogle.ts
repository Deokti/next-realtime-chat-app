import { useState } from "react";

export const useToggle = (
  initialValue = false,
): [isToggle: boolean, toggle: () => void] => {
  const [isToggle, setToggle] = useState(initialValue);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggle = () => setToggle((s) => !s);

  return [isToggle, toggle];
};
