const nameArr = ["主田", "咲丘", "後藤"];
//従来の出力するためのfor文
for (let index = 0; index < nameArr.length; index++){  
    console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2)

//1行で書ける！
nameArr.map((name) => console.log(name));

//filterは「配列の中から特定の条件に合うものだけを取り出したいとき」に便利！！
const numArr1 = [1, 2, 3, 4, 5];
const numArr2 = numArr1.filter((num) => {
  return num%2 === 1;
});

console.log(numArr2);


// mapとfilterは第2引数でindex情報を取得することができる
nameArr.map((name, index) => console.log(`${name}は${index + 1}番目`));

sanNameArr = nameArr.map((name) => {
    if (name === "主田"){
      return name;
    }else{
      return `${name}さん`;
    }
  });
  console.log(sanNameArr);


const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2)

//1行で書ける！
nameArr.map((name) => console.log(name));

//filterは「配列の中から特定の条件に合うものだけを取り出したいとき」に便利！！
const numArr1 = [1, 2, 3, 4, 5];
const numArr2 = numArr1.filter((num) => {
  return num%2 === 1;
});

console.log(numArr2);


// mapとfilterは第2引数でindex情報を取得することができる
nameArr.map((name, index) => console.log(`${name}は${index + 1}番目`));

sanNameArr = nameArr.map((name) => {
    if (name === "主田"){
      return name;
    }else{
      return `${name}さん`;
    }
  });
  console.log(sanNameArr);

//三項演算子
// ある条件　? 条件がTrueの時の処理 : じょうけんが　Falseの時の処理
const val1 = 1 < 0 ? "Trueです" : "Falseです";
console.log(val1)

//ついでに型をみる方法
console.log(typeof val1)

const null_num = null;
const res =  null_num || "こんにちは"
console.log(res)
// 実は||は左側がfalseなら右を返す意味だった
// 実は&&は左側がtrueなら右を返す意味だった