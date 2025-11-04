'use strict';

const ZHS = ['你好，', '世界', '！', '这是', '一个', '连接的', '字符串。'];

function concat(stringArray) {
  let curString = '';
  for (let i = 0; i < stringArray.length; i++) {
    curString += stringArray[i];
  }
  return curString;
}

const resultString = concat(ZHS);
document.querySelector('#output').innerText = resultString;