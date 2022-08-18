//Add 4 to unicode characters

let cryptPhrase="I love cryptography!"

let splitStr = cryptPhrase.split('');
console.log(splitStr);
let str1=[];

for(let i=0; i<splitStr.length; i++){
    let num = cryptPhrase.charCodeAt(i);
    str1[i] = String.fromCharCode(num+4);

}
let cipher=str1.join('');
console.log(cipher)