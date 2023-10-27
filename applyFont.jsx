/**
 * @fileoverview A script to apply font family and style.
 * @version v1.0.0
 * @author Yusuke SAEGUSA
 * @description Use with another script that extracts font family and style.
 */

//@targetengine "getFontInfo"

var myFont = myFont || null;

(function (){
    if (!myFont) {
        alert("フォント情報が記憶されていません。テキストを選択してから extractFontInfo.jsx を実行して、フォント情報を抽出してください。");
    }
    var doc = app.activeDocument;
    var sel = doc.selection;
    if (sel.hasOwnProperty("textFont")) {
        sel.textFont = myFont;
    } else {
        for (var i = 0; i < sel.length; i++) {
            if (sel[i].hasOwnProperty("textRange")) {
                sel[i].textRange.textFont = myFont;
            } else {
                continue;
            }
        }
    }
})();