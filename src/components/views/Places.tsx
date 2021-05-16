import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placesSelector } from "../../reducers/rootReducer";
import styled from "styled-components";
import PlacesList from "../organisms/PlacesList";
import { getPlaces } from "../../actions/placeActions";

interface IPlacesView {}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2%;
  box-sizing: border-box;
`;

const PlacesView = ({}: IPlacesView) => {
  const dispatch = useDispatch();
  const places = useSelector(placesSelector);
  useEffect(() => {
    places.list.length === 0 &&
      dispatch({ type: "SET_PLACES_LOADING", payload: true });
    getPlaces().then((v) => {
      dispatch({ type: "SET_PLACES_LIST", payload: v.concat(v, v, v, v) });
      dispatch({ type: "SET_PLACES_LOADING", payload: false });
    });
  }, []);
  return (
    <Wrapper>
      <PlacesList places={places.list} />
    </Wrapper>
  );
};

export default PlacesView;
