import React, { useContext, useEffect, useRef, useState } from "react";
import bitcoinIcon from "../../../../assets/tokens-svg/bitcoin.svg";
import customTokenIcon from "../../../../assets/tokens-svg/custom-token.svg";
import ethIcon from "../../../../assets/tokens-svg/eth.svg";
import zanoIcon from "../../../../assets/tokens-svg/zano.svg";
import arrowIcon from "../../../../assets/svg/arrow-select.svg";
import { Store } from "../../../../store/store-reducer";
import mainStyles from "../../WalletSend.module.scss";
import s from "./AssetsSelect.module.scss";
import { classNames } from "../../../../utils/classNames";

const AssetsSelect = ({ value, setValue }) => {
  const { state } = useContext(Store);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = React.useState(null);
  const selectRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (
        focusedIndex === null ||
        focusedIndex === state.wallet.assets.length - 1
      ) {
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prevIndex) => prevIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (focusedIndex === null || focusedIndex === 0) {
        setFocusedIndex(state.wallet.assets.length - 1);
      } else {
        setFocusedIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  useEffect(() => {
    if (focusedIndex !== null && selectRef.current) {
      selectRef.current.childNodes[focusedIndex].focus();
    }
  }, [focusedIndex]);

  function openHandler() {
    setIsOpen(!isOpen);
  }

  function setValueHandler(asset) {
    setValue(asset);
    setIsOpen(false);
  }

  const getAssetImage = (name) => {
    switch (name) {
      case "Zano":
        return zanoIcon;
      case "Wrapped Bitcoin":
        return bitcoinIcon;
      case "Wrapped Ethereum":
        return ethIcon;
      default:
        return customTokenIcon;
    }
  };

  return (
    <div onClick={() => setIsOpen(false)} onKeyDown={handleKeyDown}>
      <div className={mainStyles.label}>Asset:</div>
      <div onClick={(e) => e.stopPropagation()} className={s.select}>
        <button
          onClick={openHandler}
          className={isOpen ? s.selectValue + " " + s.active : s.selectValue}
        >
          <span>
            <img src={getAssetImage(value.name)} alt={value.name + " icon"} />
            {value.name}
          </span>
          <span className={s.valueArrow}>
            <img src={arrowIcon} alt="arrow" />
          </span>
        </button>

        <div
          className={classNames(s.options, { [s.active]: isOpen })}
          ref={selectRef}
        >
          {state.wallet.assets.map((asset) => (
            <button
              data-active={asset.name === value.name}
              className={s.option}
              key={asset.name}
              onClick={() => setValueHandler(asset)}
            >
              <img src={getAssetImage(asset.name)} alt={value.name + " icon"} />
              {asset.name}
              <span className={s.selectPoint} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetsSelect;
