const { App } = require("@slack/bolt");
const store = require("./store");
const translate = require("translation-google");

const translationchannel = "G011BAMNXHU";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.event("message", async ({ event, context }) => {
  translate(event.text, { to: "en" }).then(res => {
    //console.log(res.text);
    console.log(event);

    const result = app.client.chat.postMessage({
      token: context.botToken,
      channel: translationchannel,
      text: `<@${event.user}> said: ${res.text}`
    });
    //console.log(result);
  });
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
