const request = require("request");
const fs = require("fs");

function writeFile(output, buf) {
  return new Promise((resolve, reject) => {
    fs.writeFile(output, buf, error => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
}

function getImageBuf(imageUrl) {
  const options = {
    url: imageUrl,
    method: "get",
    encoding: null
  };
  return new Promise((resolve, reject) => {
    request(options, (error, res, body) => {
      if (error != null) {
        reject(error);
      }
      resolve(body);
    });
  });
}

function daolnwod(url, output) {
  if (typeof url !== "string") {
    throw new Error("url is must be string");
  }

  if (typeof output !== "string") {
    throw new Error("output is must be string");
  }

  return getImageBuf(url)
    .then(buf => {
      writeFile(output, buf);
    })
    .catch(error => {
      throw error;
    });
}

module.exports = daolnwod;
