import React, {Component} from "react";
import MapView from "./body-content-2";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    }
  }

  changeInput(event) {
    this.setState({location: event.target.value});
  }

  render() {
    return (
      <div>
        <input onChange={this.changeInput.bind(this)} className="searchBar" type="text" autoComplete="off"></input>
        <MapView location={this.state.location}/>
      </div>
    )
  }
};

export default SearchBar;
