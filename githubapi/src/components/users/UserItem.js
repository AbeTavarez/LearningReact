import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

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
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          more
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
    user: PropTypes.object.isRequired,

}

export default Useritem;
