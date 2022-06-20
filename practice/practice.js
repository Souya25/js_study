var vali = "var 変数";
console.log(vali);

vali = "varを上書き";
console.log(vali);

var vali = "var再宣言"
console.log(vali);

let vali2 = "letは再宣言不可";
console.log(vali2);

vali2 = "letは上書き可能";
console.log(vali2);

const vali3 = "constは再宣言も上書きも不可";
console.log(vali3);

console.log("シングルクウォートを使うとできるテンプレート文字列が書ける");
const name = "佐藤";
const age = "22";
const message = `私の名前は${name}、${age}歳です。`;
console.log(message);

//アロー関数




