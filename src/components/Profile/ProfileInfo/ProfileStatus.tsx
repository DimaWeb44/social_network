import React, {ChangeEvent, useCallback, useState} from "react";


type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string)=> void
}

export const ProfileStatus = React.memo((props: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')

    const onChangTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    let activateEditMode = () => {
        setEditMode(true)
        setTitle(props.status)
    }

    let activateViewMode = () => {
        setEditMode(false)
        props.updateUserStatus(title.trim())
    }

    return editMode ?
        <input  value={title} onBlur={activateViewMode} autoFocus onChange={onChangTitleHandler}/>
       : <span onDoubleClick={activateEditMode}>Status:{props.status}</span>
})