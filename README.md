# getAndApplyFontFam

## Demo
![](src/ai-font.gif)

## Features
You can extract font family and style and apply it to other texts (works only in Illustrator).  
フォントファミリーとウェイトを抽出し、別のテキストへ適用するIllustrator用スクリプトです。

## Installation
Download the script and save it to any location.  
It is convenient to register it in a shortcut and use it. If you are a Mac user, I recommend using a launcher application such as SPAi or a tool such as Keyboard Maestro.  
スクリプトをダウンロードし、任意の場所に保存してください。  
ショートカットに登録すると便利なので、MacユーザーであればSPAiなどのランチャーアプリや、Keyboard Maestroなどのツールの利用をおすすめします。

## Usage
1. Select the text from which you want to extract font information and execute `extractFont.jsx`.  
フォント情報を抽出したいテキストを選択して`extractFont.jsx`を実行します
2. Select the text that you want to change fonts and execute `applyFont.jsx`.  
フォントを変更したいテキストを選択して`applyFont.jsx`を実行します

## Note
Once extracted, font information is retained until you exit Illustrator.  
一度抽出したフォント情報はIllustratorを終了するまで保持されます。

## Licence
[MIT License](LICENSE)

## Author
Uske_S (Yusuke S.)

- [X（Twitter）](https://twitter.com/Uske_S)
- [DTPab（Blog）](https://uske-s.hatenablog.com/)