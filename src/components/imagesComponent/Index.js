import React, { Component } from 'react';


export class Index extends Component {

   constructor(props) {
        super(props);
        this.state = {
        	activeButton: null
        };
    }


    handleClick(index) {
        this.setState({
            activeButton: index
        })
    }
    render() {

        var active= this.state.activeButton
   		
		return (
			<div className="social-container">
				{
	                this.props.data.map((b, index) => {
	                    var className = this.state.activeButton === index ? 'button active' : 'button';
	                    return (
	                        <div className={className} key={index} onClick={ () => this.handleClick(index)}>
	                            <img src={b.src} />
	                        </div>
	                    )
	                })
                }
			</div>
        )
    }
}
