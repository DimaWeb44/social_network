import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";


const Login = (props: any) => {
        if (props.isAuth){
            return <Navigate to="/profile/"/>
        }
       else return <div>
    <h1>Login</h1>
    <Formik
        initialValues={{email: "", password: "", rememberMe: false}}
        validate={values => {
            const errors = {};
            if (!values.email) {
                // @ts-ignore
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                // @ts-ignore
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit={(values,{setSubmitting, setStatus}) => {
            props.login(values.email, values.password, values.rememberMe, setStatus)
            setSubmitting(false)
        }}
        validationSchema={loginFormSchema}>
        {({ errors, touched, isValid, dirty, status, isSubmitting}) => (
            <Form>
                <div>
                    <Field type={'text'} name={'email'} placeholder={'email'}/>
                </div>
                <ErrorMessage name="email" component="div"/>
                <div>
                    <Field type={'password'} name={'password'} placeholder={'password'}/>
                </div>
                <ErrorMessage name="password" component="div"/>
                {touched && status}
                <div>
                    <Field type={'checkbox'} name={'rememberMe'}/>
                    <label htmlFor={'rememberMe'}> remember me </label>
                </div>
                <button type={'submit'} disabled={isSubmitting}>Log in</button>
            </Form>
        )}
    </Formik>
        </div>
}
const mapStateToProps = (state: any) => {
  return {isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {login}) (Login);