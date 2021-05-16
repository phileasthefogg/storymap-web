import React from "react";
import styled from "styled-components";
import { IPlace } from "../../models/places";

interface IPlacesCard {
  place: IPlace;
}

const Wrapper = styled.div`
  width: 45vw;
  min-height: 30vh;
  border: 1px solid grey;
  margin-top: 1rem;
`;

const PlacesCard = ({ place }: IPlacesCard) => {
  return <Wrapper>{place.name}</Wrapper>;
};

export default PlacesCard;
