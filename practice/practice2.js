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

