import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required")
});
export default loginFormSchema;