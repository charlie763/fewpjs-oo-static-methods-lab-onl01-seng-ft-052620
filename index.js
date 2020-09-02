class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(str){
    const badWords = ["the", 'a', "an", "but", "of", "and", "for", "at", "by", "from"];
    return str.split(" ").map(function(word, i){
      if (badWords.includes(word) && i !== 0){
        return word;
      } else {
        return this.capitalize(word);
      }
    }.bind(this)).join(" ")
  }
}