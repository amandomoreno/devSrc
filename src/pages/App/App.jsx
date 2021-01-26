import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import Chat from "../Chat/Chat";
import AddResource from "../AddResource/AddResource";
import * as resourceAPI from "../../services/resourceApi";
import ShowResource from "../ShowResource/ShowResource";
import FlashCardList from "../FlashCardList/FlashCardList";
import SearchResource from "../Search/Search";
import UserProfile from "../../pages/UserProfile/UserProfile";
import UpdateProfile from "../../pages/UpdateProfile/UpdateProfile";
import * as userAPI from "../../services/userService";

class App extends Component {
  state = {
    user: authService.getUser(),
    resources: [],
    savedItems: [],
    notes: [],
    searchResults: [],
  };

  async componentDidMount() {
    if (this.state.user) {
      const user = await resourceAPI.getMySavedItems(this.state.user);
      this.setState({ savedItems: user.savedItems });
    }
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddResource = async (newResourceData) => {
    const newResource = await resourceAPI.create(newResourceData);
    this.setState(
      (state) => ({
        savedItems: [...state.savedItems, newResource],
      }),
      () => this.props.history.push("/myNotebook")
    );
  };

  handleDeleteResource = async (id) => {
    await resourceAPI.deleteFromSaved(id);
    this.setState(
      (state) => ({
        savedItems: state.savedItems.filter((r) => r._id !== id),
      }),
      () => this.props.history.push("/myNotebook")
    );
  };

  handleSearch = async (searchData) => {
    const newSearch = await resourceAPI.search(searchData);
    this.setState((state) => ({
      searchResults: [...newSearch],
    }));
  };

  handleAddToSavedItems = async (resource) => {
    const user = await resourceAPI.addToSavedItems(resource);
    this.setState(
      (state) => ({
        savedItems: [...state.savedItems, resource],
      }),
      () => this.props.history.push("/myNotebook")
    );
  };

  handleUpdateUser = async (formData) => {
    const user = await userAPI.updateUser(formData);
    this.setState(
      (state) => ({
        user: user,
      }),
      () => this.props.history.push("/myProfile")
    );
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <div className="landing-container">
                <div id="intro">
                  <h2>Welcome to devSrc,</h2>
                  <h4>a resource sharing app for Software Engineers.</h4>
                </div>
              </div>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/chat"
          render={() =>
            authService.getUser() ? <Chat /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/myNotebook"
          render={({ history }) =>
            authService.getUser() ? (
              <AddResource
                history={history}
                handleAddResource={this.handleAddResource}
                handleDeleteResource={this.handleDeleteResource}
                savedItems={this.state.savedItems}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/details"
          render={({ location }) => (
            <ShowResource
              location={location}
              searchResults={this.state.searchResults}
              handleAddToSavedItems={this.handleAddToSavedItems}
              //handleAddNote={this.handleAddNote}
              user={this.state.user}
            />
          )}
        />
        <Route
          exact
          path="/studyBuddy"
          render={({ history }) =>
            authService.getUser() ? (
              <FlashCardList
                history={history}
                flashCards={this.state.flashCards}
                handleAddFlashCard={this.handleAddFlashCard}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchResource
              searchResults={this.state.searchResults}
              handleSearch={this.handleSearch}
              user={this.state.user}
            />
          )}
        />
        <Route
          exact
          path="/myProfile"
          render={() => <UserProfile user={this.state.user} />}
        />
        <Route
          exact
          path="/UpdateProfile"
          render={() => (
            <UpdateProfile
              user={this.state.user}
              handleUpdateUser={this.handleUpdateUser}
            />
          )}
        />
      </>
    );
  }
}

export default App;
