import shiritori from "./shiritori.js";
class Game {
  constructor() {
    document.getElementById("shiritoru").addEventListener(
      "click",
      () => {
        this.checkShirotori();
      },
      false
    );
  }

  checkShirotori() {
    const inputWord = document.getElementById("input-word").value;
    const wordLen = document.getElementById("word-len").textContent;
    if(inputWord.length == 0 || !inputWord.match(/^[ぁ-んー]*$/)){
      document.getElementById("input-word").value = "";
      return;
    }
    const wordsParent = document.getElementById("words");
    const words = wordsParent.children;
    const lastWord = words[0].textContent;
    const lastChar = lastWord.slice(-1);
    const isOK = shiritori(inputWord, lastChar, wordLen);
    const word = document.createElement("li");
    word.classList.add("list-group-item");
    if (!isOK) {
      word.classList.add("list-group-item-danger");
    }
    word.textContent = inputWord;
    wordsParent.insertAdjacentElement('afterbegin', word)
    document.getElementById("input-word").value = "";
    document.getElementById("word-len").textContent = Math.floor(Math.random() * (5 - 1)) + 2;
  }
}
export default Game;
