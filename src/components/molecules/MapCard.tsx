import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ exp: boolean }>`
  height: ${({ exp }) => (exp ? 80 : 60)}%;
  min-height: 30px;
  width: 200px;
  background: white;
  border: 1px solid;
  margin: 0 0.5rem 0 0.5rem;
`;

const Header = styled.header`
  // width: 100%;
  // height: 25%;
  flex: 1;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  overflow: hidden;
`;

const MapCard = ({ place, ind }: { place: any; ind: number }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Wrapper onClick={() => setExpand((s) => !s)} exp={expand}>
      <Header>{place.name}</Header>
    </Wrapper>
  );
};

export default MapCard;
