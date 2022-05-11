# README

個人的な勉強用。  
Rails + React + TypeScriptで掲示板を作成。  
react-rails gemを採用しておりRailsのViewからReactコンポーネントを呼び出す作りとなっている。  

# 機能
- 投稿表示
[![Image from Gyazo](https://i.gyazo.com/5c723dcda9d6892f0c20701a89a32f07.png)](https://gyazo.com/5c723dcda9d6892f0c20701a89a32f07)
- 新規投稿
[![Image from Gyazo](https://i.gyazo.com/bc7e16724fcd69703cca89fcd46f9a27.gif)](https://gyazo.com/bc7e16724fcd69703cca89fcd46f9a27)
- 投稿削除
[![Image from Gyazo](https://i.gyazo.com/966a5d38be244bf47c99b0278b860a46.gif)](https://gyazo.com/966a5d38be244bf47c99b0278b860a46)

# 使い方
bundleのインストール  
```bundle install``` 

DB構築  
```rails db:create```  
```rails db:migrate```  

webpackerの利用  
```rails webpacker:install```  
```rails webpacker:install:react```  
```rails generate react:install```  
```rails webpacker:install:typescript```  
```rails webpacker:compile```  

サーバー起動  
```docker-compose up```  

ブラウザで動作確認  
サーバー起動後、[http://localhost:3000/comments](http://localhost:3000/comments)にアクセス！