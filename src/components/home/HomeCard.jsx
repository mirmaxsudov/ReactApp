import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default class HomeCard extends Component {
    render() {
        return (
            <div style={{ border: "1px solid black", padding: "40px", backgroundColor: "lightgray", borderRadius: "10px" }}>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <a href={this.props.link} className='btn btn-dark mt-4'>Link</a>
            </div>
        )
    }
}
