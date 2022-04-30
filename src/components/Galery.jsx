import React from 'react'
import GaleryItem from '../components/GaleryItem'
import GaleryItemShow from './GaleryItemShow'

// Styles
import "../assets/css/galery.css"

// Galery
import Gallery1 from '../assets/gallery/gallery1.jpg'
import Gallery2 from '../assets/gallery/gallery2.jpg' 
import Gallery3 from '../assets/gallery/gallery3.jpg' 
import Gallery4 from '../assets/gallery/gallery4.jpg' 
import Gallery5 from '../assets/gallery/gallery5.jpg' 
import Gallery6 from '../assets/gallery/gallery6.jpg' 
import Gallery7 from '../assets/gallery/gallery7.jpg' 
import Gallery8 from '../assets/gallery/gallery8.jpg' 

// Data
const data = [{
	id: 1,
	image: Gallery1
}, {
	id: 2,
	image: Gallery2
}, {
	id: 3,
	image: Gallery3
}, {
	id: 4,
	image: Gallery4
}, {
	id: 5,
	image: Gallery5
}, {
	id: 6,
	image: Gallery6
}, {
	id: 7,
	image: Gallery7
}, {
	id: 8,
	image: Gallery8
}]

class Galery extends React.Component {
    constructor(props) {
        super(props)  
        
        this.state = { 
            open : false, 
            image_url : ''
        }

        this._showMenu = this._showMenu.bind(this)
    }

    _showMenu(url_image) {
        if(!this.state.open) {
            this.setState({
                open: true,
                image_url: url_image
            })
        }else{
            this.setState({
                open: false,
                image_url: ''
            })
        }
    }


    render() {
        const dataItems = this.props.dataItems ? this.props.dataItems : data.length

        return(
            <section className="section__galery">
                <div className="container">
                    <h3 className="title">Galeria</h3>

                    <div className="section__galery_container">
                        {data.slice(0, dataItems).map((data) => {
                            return <GaleryItem data={data} key={data.id} showMenu={this._showMenu}/>
                        })}
                    </div>
                </div>

                {this.state.open && (
                    <GaleryItemShow image_url={this.state.image_url} showMenu={this._showMenu}/>
                )}
            </section>
        )
    }
}

export default Galery