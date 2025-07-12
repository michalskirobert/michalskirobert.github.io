import * as yup from "yup";

const REQUIRED_MSG = "Required";

export const validationSchema = yup.object({
  name: yup.string().required(REQUIRED_MSG).label("Name"),
  email: yup
    .string()
    .email("Invalid e-mail!")
    .required(REQUIRED_MSG)
    .label("Email"),
  subject: yup
    .string()
    .required(REQUIRED_MSG)
    .min(5, "Subject cannot be shorter than 5 characters!")
    .label("Subject"),
  message: yup
    .string()
    .required(REQUIRED_MSG)
    .min(50, "Content cannot be shorter than 50 characters!")
    .max(500, "Content cannot be longer than 500 characters!")
    .label("Content"),
});
