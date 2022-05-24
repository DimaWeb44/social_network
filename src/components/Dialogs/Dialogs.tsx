import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsConainer";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";


function Dialogs(props: DialogsPropsType) {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m: MessagesType) => <Message key={m.id} message={m.message} id={m.id}/>)

    const onSendMessageClik = (value: string) => {
        props.sendMessage(value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <div>{messagesElements}</div>
                    <AddMessageForm sendMessage={onSendMessageClik}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

const AddMessageForm = (props: any) => {

    let addNewMessage = (values: string) => {
        props.sendMessage(values);
    }
    return (
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            onSubmit={(values, {resetForm}) => {
                addNewMessage(values.newMessageBody)
                resetForm()
            }
            }
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newMessageBody'}
                            as={'textarea'}
                            placeholder={'enter text'}
                        />
                    </div>
                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    )
}





