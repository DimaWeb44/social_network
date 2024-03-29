import {ErrorMessage, Field, Form, Formik } from 'formik';
import React, {ChangeEvent} from 'react';
import {PostType} from '../../../redux/profile-reducer';
import PostFormSchema from '../../FormValidation/PostFormSchema';
import s from './MyPosts.module.css'
import {MyPostsPropsType} from './MyPostsContainer';
import Post from "./Post/Post";


const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((p: PostType) => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                              id={p.id}/>)

    const onAddPost = (text:string) => {
        props.addPost(text)
    }

    return <div className={s.postsBloc}>
        <h3>My post</h3>
        <div>
            <AddPostForm addPost={onAddPost}/>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>


}
export default MyPosts;

const AddPostForm = (props: any) => {

    let addNewPost = (values: string) => {
        props.addPost(values);
    }
    return (
        <Formik
            initialValues={{
                newPostBody: ""
            }}
            validate={values => {
                const errors = {};
                if (!values.newPostBody) {
                    // @ts-ignore
                    errors.newPostBody = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {resetForm}) => {
                addNewPost(values.newPostBody)
                resetForm()
            }
            }
            validationSchema={PostFormSchema}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newPostBody'}
                            as={'textarea'}
                            placeholder={'enter text'}
                        />
                        <ErrorMessage name="newPostBody" component="div"/>
                    </div>
                    <button type={'submit'}>Add post</button>
                </Form>
            )}
        </Formik>
    )
}
