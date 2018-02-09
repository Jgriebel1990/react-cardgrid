import React, { Component } from 'react';

class Card extends Component {
    render(){
        let style;
        if (this.props.isLiked){
            style = { color: "chartreuse"}
        }
        else {
            style = { color: "tomato"}
        }
        return(
            <div className='col-md-3'>
                <img src={this.props.src} alt={this.props.caption} />
                <p>{this.props.caption}</p>
                <i className="fa fa-heart" style={style} aria-hidden='true'></i>
            </div>
        );
    }
}

export default Card;