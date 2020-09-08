import React from "react";
import Auth from "../Auth/Auth";

export const AppLayout = props => {
  // console.log("App Layout", Auth.isAuthenticated());
  return (
    <div>
      <h1>App Layout</h1>
      <button
        onClick={() => {
          Auth.login(() => {
            props.history.push("/about");
          });
        }}
      >
        About
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
};
