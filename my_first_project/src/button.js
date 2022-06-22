//ボタンの追加
const buttonEl =document.createElement("button");
buttonEl.textContent("ボタン");

const divEl = document.querySelector(".container");
divEl.appendChild(buttonEl);

//DOMの削除
const h1El = document.getElementById("title");
const bodyEl = document.querySelector("body");
//指定したElementを削除
bodyEl.removeChild(h1El);
//子エレメントすべて削除
//bodyEl.textContent = null;