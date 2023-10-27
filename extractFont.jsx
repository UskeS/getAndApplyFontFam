/**
 * @fileoverview A script to extract font family and style.
 * @version v1.0.0
 * @author Yusuke SAEGUSA
 * @description Use with another script that applies font family and style.
 */

//@targetengine "getFontInfo"

var myFont = myFont || null;

(function (){
    var doc = app.activeDocument;
    var sel = doc.selection;
    var fnt;
    if (sel.hasOwnProperty("textFont")) {
        myFont = app.textFonts.getByName(sel.textFont.name);
        fnt = sel.textFont;
    } else if (sel[0].hasOwnProperty("textRange")) {
        myFont = app.textFonts.getByName(sel[0].textRange.textFont.name);
        fnt = sel[0].textRange.textFont;
    } else {
        alert("テキストを選択してください");
        return;
    }
    var displayText = "下記のフォントを抽出しました\r" + fnt.family + " - " + fnt.style;
    alert(displayText);
})();
