import request from "request";
import fs from "fs";

function writeFile(output: string, buf: any) {
  return new Promise((resolve, reject) => {
    fs.writeFile(output, buf, error => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
}

function getImageBuf(imageUrl: string) {
  const options = {
    url: imageUrl,
    method: "get",
    encoding: null
  };
  return new Promise((resolve, reject) => {
    request(options, (error, res) => {
      if (error != null) {
        reject(error);
      }
      resolve(res.body);
    });
  });
}

export default async function daolnwod(url: string, output: string) {
  if (typeof url !== "string") {
    throw new Error("url is must be string");
  }

  if (typeof output !== "string") {
    throw new Error("output is must be string");
  }

  try {
    const buf = await getImageBuf(url);
    await writeFile(output, buf);
  } catch (error) {
    throw error;
  }
}
