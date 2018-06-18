import React from 'react'
import './style.css'

export default class SearchBar extends React.Component {

    state = {
        text: ''
    }
    changeHandler = (event) => {
        let value = event.target.value;
        this.setState({ text: value });
    }

    render() {
        let searchingString = this.props.searchingString;
        return (
            <div>
                <div className="search">
                    <input className="search__input" onChange={this.changeHandler} placeholder="Search" />
                    <button className="fa fa-search search__button" onClick={() => searchingString(this.state.text)}></button>
                </div>
            </div>
        )
    }
}