import React, { useState } from "react";
import styled from "styled-components";
import MapCard from "../molecules/MapCard";

interface IMapCardList {
  markers: any[];
  show: boolean;
  setDisplay: (s: boolean) => void;
}

const Wrapper = styled.div<{ show: boolean }>`
  max-width: 96%;
  width: ${({ show }) => (show ? 96 : 5)}%;
  height: ${({ show }) => (show ? 25 : 2)}%;
  position: absolute;
  border: 3px solid grey;
  bottom: 0;
  left: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: no-wrap;
  overflow: hidden;
  margin-bottom: 2rem;
`;
const Slider = styled.div<{ page: number }>`
  // transform: translateX(-${({ page }) => page * 80}vw);
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  overflow: scroll;
  height: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  background: darkgrey;
  height: 40%;
  width: 25px;
  z-index: 5;
  opacity: 0.25;

  &:hover {
    opacity: 1;
  }
`;

const MapCardList = ({ markers, show, setDisplay }: IMapCardList) => {
  const [page, setPage] = useState(0);
  return (
    <Wrapper show={show}>
      {show ? (
        <>
          <Button onClick={() => setPage((p) => (p > 0 ? --p : p))}>
            {"<"}
          </Button>
          <Slider page={page}>
            {markers.map((place, i) => (
              <MapCard place={place} ind={i} key={`place-${i}`} />
            ))}
          </Slider>
          <Button
            onClick={() => setPage((p) => (p < markers.length - 1 ? ++p : p))}
          >
            {page}
          </Button>
        </>
      ) : (
        <div
          style={{ background: "white" }}
          onClick={() => {
            setDisplay(true);
          }}
        >
          View List
        </div>
      )}
    </Wrapper>
  );
};

export default MapCardList;
