import React from 'react'
import cls from './FieldsCommon.module.css'
export const Input  = ({input, meta, ...props}) => {
    return(
        <>
            <div className={meta.submitFailed && meta.error ? cls.error : cls.noError}>{meta.error}</div>
            <input  {...input} {...props} />
        </>
    )
}