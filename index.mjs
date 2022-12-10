import { chromium } from "@playwright/test";

const headers = {
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
};

const chatgptToken = async (username, password) => {

  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.setExtraHTTPHeaders(headers)

  await page.goto("https://chat.openai.com/auth/login")

  await page.waitForSelector('button:nth-child(1)')

  await page.click('button:nth-child(1)')

  await page.waitForSelector('h1')

  await page.fill('#username', username);
  await page.click('button[type="submit"]')

  await page.waitForSelector('#password')
  await page.waitForSelector('button[type="submit"]')
  await page.waitForSelector('h1')

  await page.fill('#password', password);

  await page.click('button[type="submit"]')

  let ok = true;

  try {
    await page.waitForURL("https://chat.openai.com/chat", { timeout: 10000 })
  } catch (err) {
    ok = false;
  }
  if (ok) {

    const cookies = (await context.storageState()).cookies

    const sessionTokenItem = cookies.find(item => item.name == "__Secure-next-auth.session-token")

    const token = sessionTokenItem.value;
    await browser.close();
    return token;

  } else {
    await browser.close();
    return false;
  }

}


export {
  chatgptToken
}

