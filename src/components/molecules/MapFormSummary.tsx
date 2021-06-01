import React from "react";
import styled from "styled-components";
import { TFormState } from "./MapForm";
import Button from "../atoms/Button";

interface IMapFormSummary {
  form: TFormState;
  closeModal: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Summary = styled.div`
  width: 90%;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 1rem;
  border: 1px solid;
  border-top: 0px solid;
`;

const Section = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Header = styled.span`
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

const Row = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 2rem;
  padding: 0 0.25rem 0 0.25rem;
`;
const Label = styled.span`
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1em;
  width: 30%;
`;
const Value = styled.span`
  font-size: 0.9em;
  line-height: 1em;
  width: 70%;
  text-align: start;
  flex: 1;
`;

const MapFormSummary = ({ form, closeModal }: IMapFormSummary) => {
  return (
    <Wrapper>
      <Summary>
        <Section>
          <Header>Address</Header>
          <Row>
            <Label>{"Street Number"}</Label>
            <Value>{form.address.st_num}</Value>
          </Row>
          <Row>
            <Label>{"Street Name"}</Label>
            <Value>{form.address.st_name}</Value>
          </Row>
          <Row>
            <Label>{"Zip"}</Label>
            <Value>{form.address.zip}</Value>
          </Row>
        </Section>
        <Section>
          <Header>Place</Header>
          <Row>
            <Label>{"Name"}</Label>
            <Value>{form.place.name}</Value>
          </Row>
          <Row>
            <Label>{"Short Description"}</Label>
            <Value>{form.place.shortDesc}</Value>
          </Row>
          <Row>
            <Label>{"Long Description"}</Label>
            <Value>{form.place.longDesc}</Value>
          </Row>
        </Section>
        <Section>
          <Header>Memory</Header>
          <Row>
            <Label>{"Title"}</Label>
            <Value>{form.memory.title}</Value>
          </Row>
          <Row>
            <Label>{"Body"}</Label>
            <Value>{form.memory.body}</Value>
          </Row>
        </Section>
      </Summary>
      <Button onClick={() => console.log("SUBMIT")} title="Submit"></Button>
    </Wrapper>
  );
};

export default MapFormSummary;
