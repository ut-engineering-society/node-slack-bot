# Node.jsによるSlackBot開発


## 使用技術
* Node.js
* Bolt（[Bolt 入門ガイド](https://slack.dev/bolt-js/ja-jp/tutorial/getting-started)）
* [Heroku](https://heroku.com)


## 要件定義

### Slackのプロフィールをdiscordのroleのようにする
HOMEタブかメッセージ（BotとのDM？）からボタンをクリックするだけでSlackの「役職・担当」の部分にプロフィール情報を追加できる機能を作る
* Slack api の中のusersの中の[users.profile.set](https://api.slack.com/methods/users.profile.set)と[users.profile.get](https://api.slack.com/methods/users.profile.get)が使えそう
* ボタンクリック時に profile の中の title 属性をいじれば良さそう
