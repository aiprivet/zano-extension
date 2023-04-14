import React from "react";
import displayImage from "../../assets/images/display.svg";
import logo from "../../assets/svg/logo.svg";
import questionIcon from "../../assets/svg/question.svg";
import s from "./AppPlug.module.scss";

const AppPlug = () => {
  return (
    <div className={s.plug}>
      <div className={`${s.plugBody} container`}>
        <div className={s.plugLogo}>
          <img src={logo} alt="zano logo" />
        </div>

        <div className={s.plugContent}>
          <div className={s.plugImage}>
            <img src={displayImage} alt="display image" />
          </div>
          <span>We can’t find a Zano wallet app on your device</span>
        </div>

        <button className={s.plugButton}>
          <img src={questionIcon} alt="question icon" />
          How to create wallet?
        </button>
      </div>
    </div>
  );
};

export default AppPlug;