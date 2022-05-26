import * as Yup from "yup";

const PostFormSchema = Yup.object().shape({
    newPostBody: Yup.string()
        .max(30, "Max length 30 characters")
        .required("Required")
});
export default PostFormSchema;