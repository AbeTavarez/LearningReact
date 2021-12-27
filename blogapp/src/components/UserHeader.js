import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, user}) => {
  useEffect(() => {
    fetchUser(userId); // calling the action
  }, []);
  
  if (!user) {
      return <h3>User not found</h3>;
  }
  return <div className="header">{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
