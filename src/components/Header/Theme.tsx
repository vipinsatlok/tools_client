"use client";

import { FC, useCallback, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Theme() {
  const [theme, setTheme] = useState("light");
  const [openBox, setOpenBox] = useState(false);

  const toggleBox = useCallback(() => {
    setOpenBox(!openBox);
  }, [openBox]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <div className="">
      <div>
        <ThemeIcon onClick={toggleBox} Icon={BsSun} />
        <ThemeIcon onClick={toggleBox} Icon={BsFillMoonStarsFill} />
      </div>

      <div className=" absolute top-2 right-0 border border-border-color rounded p-2 flex flex-col gap-2">
        <ThemeListButton title="Light" Icon={BsSun} onClick={toggleTheme} />
        <ThemeListButton
          title="Dark"
          Icon={BsFillMoonStarsFill}
          onClick={toggleTheme}
        />
        <ThemeListButton
          title="System"
          Icon={BsFillMoonStarsFill}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}

// Theme Icon
interface ThemeIconProps {
  Icon: FC;
  onClick: () => void;
}

function ThemeIcon({ onClick, Icon }: ThemeIconProps) {
  return (
    <button onClick={onClick}>
      <Icon />
    </button>
  );
}

// Theme List
interface ThemeListProps {
  title: string;
  onClick: () => void;
  Icon: FC;
}

function ThemeListButton({ title, onClick, Icon }: ThemeListProps) {
  return (
    <button onClick={onClick}>
      <span>{title}</span>
      <Icon />
    </button>
  );
}
