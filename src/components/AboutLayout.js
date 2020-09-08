import React from "react";
import Auth from "../Auth/Auth";

function AboutLayout(props) {
  return (
    <div>
      <h1>About Layout</h1>
      <button
        onClick={() => {
          Auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        App
      </button>
      <hr />
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AboutLayout;
