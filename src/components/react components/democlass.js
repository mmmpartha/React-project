import React from "react"

export default class Democlass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: true
        }
        this.viewdetails = this.viewdetails.bind(this)
    }

    viewdetails = () => {
        this.setState({view:!this.state.view})

    }
    render() {
        return (
            <>
                <h1>Class Component</h1>
                {
                    (this.state.view) ?
                        <button onClick={this.viewdetails}>View Details</button> : <>
                            <h1>Name:{this.props.name}</h1>
                            <h1>Age:{this.props.age}</h1>
                            <h1>Place:{this.props.place}</h1>
                            <button onClick={this.viewdetails}>Hide Details</button>
                        </>
                }

            </>
        )
    }
} 