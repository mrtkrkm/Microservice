import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const SearchModal = ({
  showModal,
  setShowModal,
  children,
  justifyContent,
  alignItem,
}) => {
  const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    //background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;

    @media only screen and (max-width: 600px) {
      display: flex;
    }

    //justify-content: center;
    //align-items: center;
  `;

  const ModalWrapper = styled.div`
    /* width: 800px; */
    width: 100%;
    //height: 500px;
    //box-shadow: 0 5px 16px rgba(250, 250, 250, 0.2);
    //background: #fff;
    //color: #000;

    position: relative;
    margin-top: 130px;
    margin-left: 25%;
    z-index: 10;
    border-radius: 10px;
    display: flex;
    @media only screen and (max-width: 800px) {
      margin-top: 0;
      margin-left: 0;
    }
    //flex-direction: column;
    //justify-content: center;
  `;

  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
      margin-bottom: 1rem;
    }
  `;

  const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: relative;
    top: 3%;
    right: 5%;
    width: 32px;
    height: 25px;
    padding: 0;
    z-index: 10;

    @media only screen and (max-width: 800px) {
      right: 10%;
      top: 5px;
      height: 30px;
    }
  `;
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <Background
          onClick={closeModal}
          ref={modalRef}
          style={{
            justifyContent: `${justifyContent}`,
            alignItems: `${alignItem}`,
          }}
        >
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {children}
              {/* <ModalContent>{children}</ModalContent> */}

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default SearchModal;
