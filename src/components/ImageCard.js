// Purpose is to show one image by itself

import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {spans: 0}

        // have to make use of ref system if want to interact with DOM element
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)

        this.setState({spans: spans})
    }

    render() {
        const {description, urls} = this.props.image
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;