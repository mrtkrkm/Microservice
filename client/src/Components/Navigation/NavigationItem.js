import React, { useState } from "react";
import Modal from "./Modal";

const NavigationItem = ({ className, name, children }) => {
  const [clicked, setClicked] = useState(false);

  const ClickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <div className={className}>
      <p onClick={ClickHandler}>{name}</p>
      <Modal
        showModal={clicked}
        setShowModal={setClicked}
        justifyContent="center"
        alignItem="center"
      >
        {children}
      </Modal>
    </div>
  );
};

export default NavigationItem;
