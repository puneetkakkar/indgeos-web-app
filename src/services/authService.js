import axios from "axios";
import { BASE_URL, GET_USER_DETAILS, LOGIN } from "../constants/apiConstants";

export const loginUser = async (email, password) => {
  const url = `${BASE_URL}${LOGIN}`;

  return await axios.post(
    url,
    {},
    {
      auth: { username: email, password },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getUserDetails = async (tokenType, token) => {
  const url = `${BASE_URL}${GET_USER_DETAILS}`;

  return await axios.get(url, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });
};
