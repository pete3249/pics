import React from 'react';

class SearchBar extends React.Component {
    state = { search: null}

    onInputChange = event => {
        this.setState({ search: event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={e => this.setState({search: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;