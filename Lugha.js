const fs = require("fs");
class Lugha {
  constructor(lang_code='en', dirPath) {
    this.code = lang_code;
    this.language = "";
    this.dirPath = dirPath||"./locale/";
    this.langPath = this.dirPath + this.code + ".json";
    if (!fs.existsSync(this.dirPath)) {
      fs.mkdirSync(this.dirPath);
      console.log("Directory created successfully.");
    } else {
      console.log("Directory already exists.");
    }

    // Create default file
    const fileContent =JSON.stringify({
        language: "Swahili",
        welcome: "Welcome",
        goodby:"kwaheri"
    });
    fs.writeFileSync(this.langPath, fileContent);
  }
  translate(phrase) {
    let lang = JSON.parse(JSON.stringify(fs.readFileSync(this.langPath, "ascii")));
    if (phrase == undefined) {
      return phrase;
    }
    let transation = lang[phrase];
    return transation;
  }
}
module.exports = Lugha;
