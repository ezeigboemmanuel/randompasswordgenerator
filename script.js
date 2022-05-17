let possibleChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",'_', '#', '-', '0','1','2','3','4','5','6','7','8','9','@'];

let button = document.getElementById("button");
button.addEventListener("click", generate)
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");

function generate(){
    let password1 = [];
    let password2 = [];
    let password3 = [];
    let password4 = [];
    for(let i = 0; i < 10; i++){
        let randomIndex1 = Math.floor(Math.random() * possibleChars.length);
        let randomIndex2 = Math.floor(Math.random() * possibleChars.length);
        let randomIndex3 = Math.floor(Math.random() * possibleChars.length);
        let randomIndex4 = Math.floor(Math.random() * possibleChars.length);
        password1.push(possibleChars[randomIndex1]);
        password2.push(possibleChars[randomIndex2]);
        password3.push(possibleChars[randomIndex3]);
        password4.push(possibleChars[randomIndex4]);
    }
    let value1 =  password1.join("");
    div1.innerText = value1;
    let value2 =  password2.join("");
    div2.innerText = value2;
    let value3 =  password3.join("");
    div3.innerText = value3;
    let value4 =  password4.join("");
    div4.innerText = value4;
}