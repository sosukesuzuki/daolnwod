# daolnwod

[![npm version](https://badge.fury.io/js/daolnwod.svg)](https://badge.fury.io/js/daolnwod)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Download images from url.

## Installation

```sh
$ npm install --save daolnwod
```

## Usage

If you want to download my icon image( https://avatars0.githubusercontent.com/u/14838850?s=460&v=4 ), you can write like below:

```js
const daolnwod = reuqire("daolnwod");

daolnwod(
  "https://avatars0.githubusercontent.com/u/14838850?s=460&v=4",
  "./sosukesuzuki.jpg"
);
```

First argument is the image url you want to get. Second argument is the path you want to download the image to.

Also, daolnwod returns `Promise<void>`. So, you can write like below:

```js
const daolnwod = reuqire("daolnwod");

daolnwod("https://avatars0.githubusercontent.com/u/14838850?s=460&v=4", "./sosukesuzuki.jpg")
  .then(() => {
    console.log("Successed");
  });
  .catch(error => {
    console.error("Failed");
  })
```

## LICENSE

MIT
