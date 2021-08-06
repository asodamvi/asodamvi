import React from "react";
class GaleryItem extends React.Component {
    constructor(props) {
        super(props);

        this.showMenu = this.showMenu.bind(this)
    }

    showMenu(e) {
        e.preventDefault()
        this.props.showMenu(this.props.data.image);
    }

    render() {
        return (
            <div className="galery__item" onClick={this.showMenu}>
                <img src={this.props.data.image} alt="Asodamvi popayán fotos"/>
            </div>
        )
    }
}

export default GaleryItem;
