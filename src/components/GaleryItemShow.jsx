import React from 'react'

const GaleryItemShow = (props) => (
    <div className="galery__item_show" onClick={props.showMenu}>
        <img
            src={props.image_url}
            alt="Asodamvi Popayán Fotos"
        />
    </div>
)

export default GaleryItemShow;