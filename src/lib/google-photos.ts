const axios = require("axios");

function getAllMedia(accessToken, pageToken, pageSize = 2){
    let finalSet = [];\
    return new Promise((resolve, reject) => {
        const params = {
            pageSize: pageSize,
            pageToken: pageToken,
        };
        const axiosConfig = {
            method: "get",
            url: "https://photoslibrary.googleapis.com/v1/mediaItems",
            headers: {
                authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
        },
        params: params,
    };
    axios(axiosConfig)
        .then((response) => {
            finalSet = finalSet.concat(response.data.mediaItems);
            if (response.data.nextPageToken) {
                getAllMedia(accessToken, response.data.nextPageToken, pageSize)
                    .then((data) => {
                        finalSet = finalSet.concat(data);
                        resolve(finalSet);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            } else {
                resolve(finalSet);
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = {
    getAllMedia,
};