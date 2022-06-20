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

//従来の関数の書き方2通り
function func1(value)
{
    return value;
}
console.log(func1("hello"));

const func2 = function(value)
{
    return value;
}
console.log(func2("hello"));

//アロー関数
const func3 = (value) =>
{
    return value;
}
console.log(func3("アロー関数"));

//処理を単一行で返す場合はreturnと波かっこ不要

const func4 = (val1,val2) => val1 + val2;
console.log(func4(2, 3));

const func5= (val1, val2) =>(
    {
        name:val1,
        age:val2,
    }
) 
console.log(func5(steve, 52));

//分割代入
const my_profile = 
{
    name:佐藤,
    age:13,
}
// 存在するプロパティ名なら順番は関係ない
const { age, name} = my_profile;

// 変数の名前を変えることができる
const { age: user_age, name: user_name} = my_profile;

