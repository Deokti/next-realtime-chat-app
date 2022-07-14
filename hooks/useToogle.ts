import { useState } from "react";

export const useToggle = (
  initialValue = false,
): [isToggle: boolean, toggle: () => void] => {
  const [isToggle, setToggle] = useState(initialValue);

  const toggle = () => setToggle((s) => !s);

  return [isToggle, toggle];
};
