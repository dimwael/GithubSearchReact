import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'danger');
        }
        else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }
    clearUsers = (e) => {
        console.log('clear **************************');
        //this.setState({ text: '' });
        this.props.ClearUsers = true;
    }

    render() {

        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {this.props.showClear && (
                    <button type="button" className="btn btn-light btn-block" color="danger" onClick={this.props.clearUsers}>Clear</button>)}
            </div>
        )
    }
}

export default Search