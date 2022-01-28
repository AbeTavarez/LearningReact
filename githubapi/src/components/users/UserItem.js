import React from "react";
import PropTypes from 'prop-types';

const Useritem = (props) => {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        style={{ width: "60px" }}
        className="round-img"
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          more
        </a>
      </div>
    </div>
  );
};

Useritem.propTypes = {
    user: PropTypes.object.isRequired,
    
}

export default Useritem;
