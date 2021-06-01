import React, { useReducer, useMemo, useCallback } from "react";
import styled from "styled-components";
import H3 from "../atoms/H3";
import Carousel from "../atoms/Carousel";

import { IAddress } from "../../models/locations";
import { INewPlace } from "../../models/places";
import { INewMemory } from "../../models/memories";

import FormTabs from "./MapFormTabs";
import AddressForm from "./MapFormAddress";
import PlaceForm from "./MapFormPlace";
import MemoryForm from "./MapFormMemory";
import FormSummary from "./MapFormSummary";

interface IMapForm {
  location?: any;
  closeModal: () => void;
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  padding-top: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 20px;
  width: 20px;
`;
const Header = styled.header`
  padding: 1rem;
  border-bottom: 1px solid;
`;
const Subtitle = styled.span`
  font-size: 0.8rem;
  width: 100%;
`;

export type TFormState = {
  address: IAddress;
  place: INewPlace;
  memory: INewMemory;
};

type TFormActions =
  | { type: "SET_ADDRESS"; payload: IAddress }
  | { type: "SET_PLACE"; payload: INewPlace }
  | { type: "SET_MEMORY"; payload: INewMemory };

const initFormState = {
  address: { st_num: "", st_name: "", zip: "" } as IAddress,
  place: {
    name: "",
    shortDesc: "",
    longDesc: "",
    photo: null,
  } as INewPlace,
  memory: { title: "", body: "", photo: null } as INewMemory,
};

const formReducer = (state = initFormState, action: TFormActions) => {
  console.log(action);
  switch (action.type) {
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_PLACE":
      return { ...state, place: action.payload };
    case "SET_MEMORY":
      return { ...state, memory: action.payload };
    default:
      return state;
  }
};

const MapForm = ({ closeModal, location }: IMapForm) => {
  const [store, dispatch] = useReducer(formReducer, {
    ...initFormState,
  });
  const onSubmit = useCallback(
    (
      data: Partial<{
        address: IAddress;
        place: INewPlace;
        memory: INewMemory;
      }>,
      ...rest: any
    ) => {
      data.address && dispatch({ type: "SET_ADDRESS", payload: data.address });
      data.place && dispatch({ type: "SET_PLACE", payload: data.place });
      data.memory && dispatch({ type: "SET_MEMORY", payload: data.memory });
    },
    []
  );
  const FormPages = useMemo(
    () => [
      (next: () => void, key: string) => (
        <AddressForm
          next={next}
          onSubmit={onSubmit}
          prefill={location.address}
          store={store}
          key={key}
        />
      ),
      (next: () => void, key: string) => (
        <PlaceForm
          next={next}
          onSubmit={onSubmit}
          prefill={location.place}
          store={store}
          key={key}
        />
      ),
      (next: () => void, key: string) => (
        <MemoryForm next={next} onSubmit={onSubmit} store={store} key={key} />
      ),
      (_: () => void, key: string) => (
        <FormSummary closeModal={closeModal} form={store} key={key} />
      ),
    ],
    [store, closeModal, onSubmit, location.address, location.place]
  );

  return (
    <Wrapper>
      <CloseButton
        onClick={() => {
          closeModal();
        }}
      >
        [X]
      </CloseButton>
      <Header>
        <H3>Add a New Place</H3>
        <Subtitle>{`latlng: ${location.latitude.toFixed(
          8
        )}, ${location.longitude.toFixed(8)}`}</Subtitle>
      </Header>
      <Carousel
        pages={FormPages}
        headers={(active, toggleActive) => (
          <FormTabs active={active} toggleActive={toggleActive} />
        )}
        withDots={false}
      />
    </Wrapper>
  );
};

export default MapForm;
