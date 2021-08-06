import React from 'react'

import "../assets/css/modal.css";

const Modal = (props) => {
    const handleShowModal = () => {
        props.showModal();
    }

    return(
        <div className="modal">
            <div className={!props.title ? "modal__image" : "modal__container"}>
                <button className="modal__close" onClick={handleShowModal}>X</button>
                {(props.title) && (
                    <h2 className="modal__title">{props.title}</h2>
                )}

                <div className="modal__body">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default Modal;