import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { placeSchema } from "../../schemas/placeSchema";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { TFormState } from "./MapForm";
import { INewPlace } from "../../models/places";

interface IPlaceForm {
  store: TFormState;
  prefill?: INewPlace;
  onSubmit: SubmitHandler<{
    place: INewPlace;
  }>;
  next: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
`;

const PlaceForm = ({ onSubmit, store, prefill, next }: IPlaceForm) => {
  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isValid },
    setValue,
  } = useForm({
    defaultValues: { place: store.place },
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: yupResolver(placeSchema),
  });
  useEffect(() => {
    prefill &&
      setValue(
        "place",
        { ...prefill, photo: null },
        { shouldValidate: true, shouldDirty: true }
      );
  }, [prefill, setValue]);
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        // background: "blue",
        color: "white",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Input
        placeholder="Place Name"
        width={"80%"}
        margin={".25rem"}
        marginTop={"1rem"}
        error={errors.place?.name}
        dirty={dirtyFields.place?.name}
        {...register("place.name")}
      ></Input>
      <Input
        placeholder="Short Description"
        width={"80%"}
        margin={".25rem"}
        error={errors.place?.shortDesc}
        dirty={dirtyFields.place?.shortDesc}
        {...register("place.shortDesc")}
      ></Input>
      <Input
        placeholder="Long Description"
        width={"80%"}
        margin={".25rem"}
        error={errors.place?.longDesc}
        dirty={dirtyFields.place?.longDesc}
        {...register("place.longDesc")}
      ></Input>
      <input
        placeholder="Photo"
        width={"80%"}
        type="file"
        // margin={".25rem"}
        // error={errors.place?.photo}
        // dirty={dirtyFields.place?.photo}
        {...register("place.photo")}
      ></input>
      <Button
        type={"submit"}
        title={"Save"}
        onClick={() => {
          console.log("its valid", isValid);
          isValid && next();
        }}
      />
    </Form>
  );
};

export default PlaceForm;
