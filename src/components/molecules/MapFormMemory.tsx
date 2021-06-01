import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { memorySchema } from "../../schemas/placeSchema";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { TFormState } from "./MapForm";

interface IMemoryForm {
  store: TFormState;
  onSubmit: SubmitHandler<{
    memory: { title: string; body: string; photo: any };
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

const MemoryForm = ({ onSubmit, store, next }: IMemoryForm) => {
  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    defaultValues: { memory: store.memory },
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: yupResolver(memorySchema),
  });
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        // background: "red",
        color: "white",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Input
        placeholder="Title"
        width={"80%"}
        margin={".25rem"}
        marginTop={"1rem"}
        error={errors.memory?.title}
        dirty={dirtyFields.memory?.title}
        {...register("memory.title")}
      ></Input>
      <Input
        placeholder="Body"
        width={"80%"}
        margin={".25rem"}
        error={errors.memory?.body}
        dirty={dirtyFields.memory?.body}
        {...register("memory.body")}
      ></Input>
      <input
        placeholder="Photo"
        width={"80%"}
        type="file"
        // margin={".25rem"}
        // error={errors.memory?.photo}
        // dirty={dirtyFields.memory?.photo}
        {...register("memory.photo")}
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

export default MemoryForm;
