import axios from "axios";

import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";

export const login = (email, password) => async (dispatch) => {
  console.log("login");
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  //const body = JSON.stringify(bodyRaw);

  try {
    const bodyRaw = {
      query: `{
          mutation {
            AuthMutation {
              Login(email: ${email}, password: ${password}) {
                token
              }
            }
          }
        }`,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(bodyRaw),
    };

    const res = await (await fetch("/graphql", requestOptions)).json();
    // const res = await axios.post(
    //   `${process.env.REACT_APP_SERVER}/api/Auth/login`,
    //   body,
    //   config
    // );

    console.log(res);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.AuthMutation.Login.token,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const signup = (email, password, password1, userName) => async (
  dispatch
) => {
  console.log("signup");

  const bodyRaw = {
    query: `{
        mutation {
          AuthMutation {
            Register(RegisterInput:{Email: ${email}, Password: ${password}
            Password1:${password1} UserName:${userName}}) {
              token
            }
          }
        }
      }`,
  };

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(bodyRaw),
    };

    const res = await (await fetch("/graphql", requestOptions)).json();

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data.AuthMutation.Register.token,
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  //dispatch(setAlert('logout successful.', 'success'));
  dispatch({ type: LOGOUT });
};
