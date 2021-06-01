import React from "react";
import styled, { keyframes } from "styled-components";

interface IModal {
  show: boolean;
  toggleModal: (show: boolean) => void;
  children?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  position?: "center" | "flex-start" | "flex-end";
}
const Blur = keyframes`
  from {
    backdrop-filter: blur(1px);
  }
  to {
    backdrop-filter: blur(4.5px);
  }
`;

const Background = styled.div<{ show: boolean; position: string }>`
  animation: ${Blur} 0.05s ease-out;
  // backdrop-filter: blur(5px);
  position: fixed;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: ${({ position }) => (position ? position : "flex-end")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`;
const Frame = styled.div`
  position: relative;
  height: fit-content;
  background: ${({ theme }) => theme.colors.white};
  border: 3px solid #16192c;
  border-radius: 1rem;
  margin-top: 7rem;
  margin-right: 3.5rem;
  width: 53vw;
  max-width: 30rem;
  min-width: 30rem;
  z-index: 6;
`;

const Modal = ({
  show,
  toggleModal,
  children,
  position = "center",
}: IModal) => {
  return (
    <Background
      show={show}
      // onClick={() => toggleModal(false)}
      position={position}
    >
      <Frame>{children}</Frame>
    </Background>
  );
};

export default Modal;
