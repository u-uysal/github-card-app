import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData], // adding new user to bottom line
    }));
  };
  render() {
    return (
      <div className="App">
        <h1>The Github Cards App</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
