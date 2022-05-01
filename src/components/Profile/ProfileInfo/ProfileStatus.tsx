import React, {ChangeEvent, useCallback, useState} from "react";


type ProfileStatusPropsType = {
    title: string
}

export const ProfileStatus = React.memo((props: ProfileStatusPropsType) => {
    console.log('EditableSpan')
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')
    const onChangTitleCHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    let activateEditMode = useCallback(() => {
        setEditMode(true)
        setTitle(props.title)
    },[props.title])

    let activateViewMode = useCallback(() => {
        setEditMode(false)
        setTitle(title.trim())
    },[props.title])

    return editMode ?
        <input  value={title} onBlur={activateViewMode} autoFocus onChange={onChangTitleCHandler}/> :
        <span onDoubleClick={activateEditMode}>{props.title}</span>
})