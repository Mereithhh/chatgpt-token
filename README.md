# chatgpt-token
A npm package to get chatgpt token by your username and password.

## Unavaliable Now
[https://github.com/transitive-bullshit/chatgpt-api#update-december-11-2022](https://github.com/transitive-bullshit/chatgpt-api#update-december-11-2022)

## Requirement

This package use playright to  simulate login behavior, and use chromium hardless mode.

so you need to install chromium first.

```bash
npx playwright install chromium
```

## Uages
```bash
npm install chatgpt-token
```

```js
// cjs
const {chatgptToken} = require("chatgpt-token")
// mjs
import {chatgptToken} from "chatgpt-token/module"

(async function(){
  const token = await chatgptToken('username','password')
  if (!token) {
    console.log("error")
  } else {
    console.log(token)
  }
})()

```

## HTTP API Server
I also write a http server to do this thing, and it has a docker image to easily deploy. Here is:

- [chatgpt-session-server](https://github.com/Mereithhh/chatgpt-session-server)