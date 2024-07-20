import React from "react";

class UserAbout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Name",
        location: "Location",
        avatar_url: "url",
      },
    };
  }

  async componentDidMount() {
    const fetchedData = await fetch(
      "https://api.github.com/users/shushant-priyadarshi"
    );
    const user = await fetchedData.json();
    this.setState({
      userInfo: user,
    });
  }

  render() {
   
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-about">
        <img src={avatar_url} alt="profile" style={{ width: "100px" }}></img>
        <h2>Name: {name}</h2>
        <h2>Address: {location}</h2>
      </div>
    );
  }
}

export default UserAbout;
