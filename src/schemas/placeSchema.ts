import {
  object,
  string,
  // array,
  mixed,
} from "yup";

export const addressSchema = object().shape({
  address: object().shape({
    st_num: string(),
    st_name: string().required("You must include a street name"),
    zip: string(),
  }),
});
export const placeSchema = object().shape({
  place: object().shape({
    name: string().required("You must add a name for this Place"),
    shortDesc: string(),
    longDesc: string(),
    photo: mixed()
      .nullable(true)
      .test("fileSize", "The file is too large", (value) => {
        if (!value) return true; // attachment is optional
        for (let i = 0; i <= value.length - 1; i++) {
          if (value[i].size > 2000000 || !value[i].type.startsWith("image")) {
            return false;
          }
        }
        return true;
      }),
  }),
});
export const memorySchema = object().shape({
  memory: object().shape({
    title: string().required("You must include a title for this Memory"),
    body: string().required(
      "You must include a some text for the body of this Memory"
    ),
    photo: mixed()
      .nullable(true)
      .test("fileSize", "The file is too large", (value) => {
        if (!value) return true; // attachment is optional
        for (let i = 0; i <= value.length - 1; i++) {
          if (value[i].size > 2000000 || !value[i].type.startsWith("image")) {
            return false;
          }
        }
        return true;
      }),
  }),
});
export const createPlaceSchema = object().shape({
  address: addressSchema,
  place: placeSchema,
  memory: memorySchema,
});
