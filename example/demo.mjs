import { chatgptToken } from "chatgpt-token/module"

(async function () {
  const token = await chatgptToken('username', 'password')
  if (!token) {
    console.log("error")
  } else {
    console.log(token)
  }
})()