import React from "react";
import styled from "styled-components";

const FormTab = styled.div<{ active?: boolean }>`
  padding: 0.5rem;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: ${({ active }) => (active ? "2" : "1")}px solid
    ${({ active }) => (active ? "black" : "grey")};
  border-bottom: 0px;
  align-self: flex-end;
`;

const Tabs = ({
  active,
  toggleActive,
}: {
  active: number;
  toggleActive: (i: number) => void;
}) => {
  return (
    <div
      style={{
        width: "80%",
        height: "fit-content",
        alignSelf: "flex-end",
        display: "flex",
      }}
    >
      <FormTab active={active === 0} onClick={() => toggleActive(0)}>
        Address
      </FormTab>
      <FormTab active={active === 1} onClick={() => toggleActive(1)}>
        Place
      </FormTab>
      <FormTab active={active === 2} onClick={() => toggleActive(2)}>
        Memories
      </FormTab>
      <FormTab active={active === 3} onClick={() => toggleActive(3)}>
        Summary
      </FormTab>
    </div>
  );
};

export default Tabs;
