import * as yup from "yup";

const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#\$%\^&\*\.\-_])(?=.{8,})/;

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
export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Խնդրում ենք նշել Ձեր անունը"),
  lastName: yup.string().required("Խնդրում ենք նշել Ձեր ազգանունը"),
  userType: yup.string().required("Խնդրում ենք նշել Ձեր գործունեության տեսակը"),
  companyName: yup
    .string()
    .required("Խնդրում ենք նշել Ձեր ընկերության անվանումը"),
  email: yup
    .string()
    .email("Խնդրում ենք նշել ճիշտ էլ. հասցե")
    .required("Խնդրում ենք նշել էլ. հասցեն"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Գաղնտաբառը պետք է պարունակի մինիմում 8 տառ,առնվազն 1 ,թվեր և առնվազն մեկ նշան(!@#$%^&*.)"
    )
    .min(8, "Գաղնտաբառը պետք է պարունակի մինիմում 8 տառ")
    .required("Խնդրում ենք նշել Ձեր գաղնտաբառը"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Խնդրում ենք նշել ճիշտ էլ. հասցե")
    .matches(/[@.]/, "Գաղտնաբառը պարտադիր է")
    .required("Էլ-հասցեն պարտադիր է"),

  password: yup.string().required("Գաղտնաբառը պարտադիր է"),
});
