const { chatgptToken } = require("chatgpt-token");

(async function () {
  const token = await chatgptToken('username', 'password')
  if (!token) {
    console.log("error")
  } else {
    console.log(token)
  }
})()