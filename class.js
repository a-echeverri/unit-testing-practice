class Word {
  constructor(word) {
    this.word = word;
  }

  removeVowels() {
    let vowels = "aeiouAEIOU";
    let newWord = "";
    for (let i = 0; i < this.word.length; i++) {
      let char = this.word[i];
      if (!vowels.includes(char)) {
        newWord += char;
      }
    }
    return newWord;
  }

  removeConsonants() {
    let vowels = "aeiouAEIOU";
    let newWord = "";
    for (let i = 0; i < this.word.length; i++) {
      let char = this.word[i];
      if (!vowels.includes(char)) {
        newWord += char;
      }
    }
    return newWord;
  }
  pigLatin() {
    let vowels = "aeiouAEIOU";

    if (vowels.includes(this.word[0])) {
      return this.word + "yay";
    }
    let firstLetter = this.word[0];
    this.word.split('').splice(0, 1).join('') + firstLetter + 'ay';

  }
}

module.exports = { Word };
