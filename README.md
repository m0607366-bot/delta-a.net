# デルタ・エー・ネット（delta-a.net）

WordPress（Luxeritas テーマ）の表示を、見た目ごとそのまま静的ファイルにしたサイト。Cloudflare Workers の静的アセットで公開。

- `npm run fetch` … WordPress からページ・CSS・JS・画像を `site/` に写す（再実行で続きから。`node scripts/mirror.mjs --fresh` でHTMLを取り直し）
- `npm run deploy` … 公開
- `npm run deploy:www` … www.delta-a.net → delta-a.net の転送（`www/`）を公開

検索は Google のサイト内検索へ。
ドメインを切り替えた後は `npm run fetch` は使えない（WordPress に届かないため止まる。取り直すときは hosts で古いサーバーに向ける）。

メール（@delta-a.net の MX・SPF）は Cloudflare DNS のレコードのまま。このサイトの切り替えでは触らない。
