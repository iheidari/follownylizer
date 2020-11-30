import { Redirect, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import axios from "axios";
import { client_id, redirect_uri, client_secret } from "../config";
import { useCookies } from "react-cookie";

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["auth-code"]);
  console.log(cookies);
  const [accessToken, setAccessToken] = useState();
  const [userId, setUserId] = useState();
  const [error, setError] = useState();

  const location = useLocation();
  const qa = queryString.parse(location.search);

  useEffect(() => {
    const bodyFormData = new FormData();
    bodyFormData.append("client_id", client_id);
    bodyFormData.append("client_secret", client_secret);
    bodyFormData.append("code", qa.code);
    bodyFormData.append("grant_type", "authorization_code");
    bodyFormData.append("redirect_uri", redirect_uri);

    axios({
      method: "post",
      url: "https://api.instagram.com/oauth/access_token",
      data: bodyFormData,
      headers: {
        "content-type": `multipart/form-data`,
      },
    })
      .then((result) => {
        setAccessToken(result.data.access_token);
        setUserId(result.data.user_id);
        setCookie("auth-code", qa.code);
      })
      .catch((error) => {
        setError("Authentication Failed");
      });
  }, [qa.code]);

  //   if (qa.code) {
  //     return <Redirect to="/" />;
  //   }

  //   return <Redirect to="/login" />;
  console.log(accessToken);
  if (accessToken) {
    return <Redirect to="/" />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return <div>Loading...</div>;
};

export default Auth;
