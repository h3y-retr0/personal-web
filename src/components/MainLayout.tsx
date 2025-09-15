import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Tools } from "./Tools";

export const MainLayout: React.FC = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 className="text-[44px] font-semibold leading-[normal]">
        Jorge Gómez
      </h1>
      <div
        className={`relative z-1 text-[18px] leading-7 space-y-10 pt-10 ${
          darkTheme ? "text-Text-Custom" : "text-Text-Custom-Light"
        } `}
      >
        <p>Hi, I'm Jorge Gómez, a passionate developer from Spain!</p>

        <p>
          I'm currently studying Computer Engineering at the University Carlos
          III in Madrid, with a strong focus on full-stack web development and,
          more recently, on systems programing. Over the past few years, I have
          completed several courses and earned certifications in this field,
          gaining both foundational knowledge and advanced skills.
        </p>
        <p>
          My passion for technology drives me to continuously learn and take on
          new challenges, and I genuinely enjoy dedicating time and effort to
          projects that excite me.
        </p>

        <p>
          As a side note, besides my passion for technology, I'm a very active
          person who loves sports. In my free time, I enjoy going to the gym,
          swimming, running, among other activities.
        </p>
      </div>
      <Tools />
    </>
  );
};
