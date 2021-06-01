import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "../../schemas/placeSchema";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { TFormState } from "./MapForm";
import { IAddress } from "../../models/locations";

interface IAddressForm {
  store: TFormState;
  prefill?: IAddress;
  onSubmit: SubmitHandler<{
    address: IAddress;
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

const AddressForm = ({ onSubmit, store, prefill, next }: IAddressForm) => {
  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isValid },
    setValue,
  } = useForm({
    defaultValues: { address: store.address },
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: yupResolver(addressSchema),
  });
  useEffect(() => {
    prefill &&
      setValue("address", prefill, { shouldValidate: true, shouldDirty: true });
  }, [prefill, setValue]);
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        color: "white",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Input
        placeholder="Street Number"
        width={"80%"}
        margin={".25rem"}
        marginTop={"1rem"}
        error={errors.address?.st_num}
        dirty={dirtyFields.address?.st_num}
        {...register("address.st_num")}
      ></Input>
      <Input
        placeholder="Street Name"
        width={"80%"}
        margin={".25rem"}
        error={errors.address?.st_name}
        dirty={dirtyFields.address?.st_name}
        {...register("address.st_name")}
      ></Input>
      <Input
        placeholder="Zip Code"
        width={"80%"}
        margin={".25rem"}
        error={errors.address?.zip}
        dirty={dirtyFields.address?.zip}
        {...register("address.zip")}
      ></Input>
      <Button
        type={"submit"}
        title={"submit"}
        onClick={() => {
          console.log("its valid", isValid, errors);
          isValid && next();
        }}
      />
    </Form>
  );
};

export default AddressForm;
