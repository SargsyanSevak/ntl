import * as yup from "yup";
export const schema = yup.object().shape({
    name: yup.string().required("Խնդրում ենք նշել Ձեր անունը"),
   
    email: yup
      .string()
      .email("Խնդրում ենք նշել ճիշտ էլ. հասցե")
      .required("Խնդրում ենք նշել էլ. հասցեն"),
    message: yup
      .string()
      .min(5, "Հաղորդագրությունը պետք է պարունակի մինիմում 5 տառ")
      .max(3000, "Հաղորդագրությունը պետք է պարունակի մաքսմիում 3000 տառ")
      .required("Խնդրում ենք նշել Ձեր հաղորդագրությունը"),
  });