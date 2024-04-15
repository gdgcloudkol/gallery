const axios = require("axios");
const config = require("../config/config.json").web;

function getNewLoginUrl() {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.client_id}&redirect_uri=${config.redirect_uri[0]}&response_type=code&scope=${config.scope}`;
  return axios.get(url);
}

function getNewRefreshToken(code) {
  try {
    var data = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: code,
      grant_type: "authorization_code",
      redirect_uri: process.env.REDIRECT_URI,
    };
    const axiosConfig = {
      method: "post",
      url: "https://oauth2.googleapis.com/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: data,
    };
    return axios(axiosConfig);
  } catch (error) {
    console.log(error);
  }
}

function getAccessToken(refreshToken){
    const params = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
    };
    const apiConfig = {
        method: "post",
        url: "https://oauth2.googleapis.com/token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        params: params,
    };
    return axios(apiConfig);
}

module.exports = {
  getNewLoginUrl,
  getNewRefreshToken,
  getAccessToken,
};
