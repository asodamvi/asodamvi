import React from 'react'
import GaleryItem from '../components/GaleryItem'
import GaleryItemShow from './GaleryItemShow'

// Styles
import "../assets/css/galery.css"

// Data
const data = [{
	id: 1,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i9c09d7c49fa86825/version/1447768667/image.jpg"
}, {
	id: 2,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/id071b876dffc1606/version/1447768667/image.jpg"
}, {
	id: 3,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i4670aa5b2e840dfe/version/1447768667/image.jpg"
}, {
	id: 4,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i3baa5313cc738509/version/1447768667/image.jpg"
}, {
	id: 5,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i7d3c0bc7586b9964/version/1447768667/image.jpg"
}, {
	id: 6,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i4ce4cb8b02eadea9/version/1447768667/image.jpg"
}, {
	id: 7,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/ia8fd4e3e9823c288/version/1447768667/image.jpg"
}, {
	id: 8,
	image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i24f20ad55ab920b8/version/1447768667/image.jpg"
}, {
    id: 9,
    image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i88eb5fc4fa37ef88/version/1447768667/image.jpg"
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