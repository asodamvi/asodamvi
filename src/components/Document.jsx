import React from 'react'

const Document = (props) => (
    <div className="documento__item">
        <div className="documento__item_img"></div>
        <div className="documento__item_name">
            <h5>{props.name}</h5>
        </div>
        <div className="documento__item_btn">
            <a href={props.documento_url} target="_blank" rel="noopener noreferrer"><i className="fas fa-cloud-download-alt"></i></a>
        </div>
    </div>
)

export default Document