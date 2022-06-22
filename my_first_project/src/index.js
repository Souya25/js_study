console.log("test");

const title1 = document.getElementById("title");
console.log(title1);

const title2 = document.querySelector("#title");
console.log(title2);

//DOMの追加
//タグの生成
const divEl =document.createElement("div");
const pEl = document.createElement("p");
//divタグは以下にpタグを追加
divEl.appendChild(pEl)
console.log(divEl);