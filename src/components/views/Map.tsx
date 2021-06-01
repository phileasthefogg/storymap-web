// import React, { useState } from "react";
import styled from "styled-components";
// import MemoryMap from "../organisms/Map";
import Mapbox from "../organisms/Mapbox";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
`;

const MapView = () => {
  return (
    <Wrapper>
      <Mapbox />
      {/* <MemoryMap></MemoryMap> */}
    </Wrapper>
  );
};

export default MapView;
