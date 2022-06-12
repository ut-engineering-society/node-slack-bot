const { App } = require('@slack/bolt');

// ボットトークンと Signing Secret を使ってアプリを初期化します
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
  // アプリを起動します
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();