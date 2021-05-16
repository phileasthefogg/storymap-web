import React from "react";
import styled from "styled-components";
import PlacesCard from "../molecules/PlacesCard";
import { IPlace } from "../../models/places";

interface IPlacesList {
  places: IPlace[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  max-height: 97.5%;
  background: white;
  overflow-y: scroll;
  padding-bottom: 1rem;
`;

const PlacesList = ({ places }: IPlacesList) => {
  return (
    <Wrapper>
      {places.map((p, i) => (
        <PlacesCard place={p} key={`place-card-${i}`} />
      ))}
    </Wrapper>
  );
};

export default PlacesList;
