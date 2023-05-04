import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let smallCase = word.toLowerCase();
        return smallCase.charAt(0).toUpperCase() + smallCase.slice(1);
    }
    const removeAlert = () => {
        props.setAlert(null)
    }
    return (
        <div style={{height: '3rem'}}>
            
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
                <button onClick={removeAlert} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}
