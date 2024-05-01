# Lugha
Translate words by matching them to your translation json file.

## Installation
```bash
npm i lugha
```

## Usage
Simple just call the Lugha class
```bash
const Lugha = require('lugha');
let config = {
    "lang_code":"sw"
    };
let lugha = new Lugha(config)

lugha.translate('hello');
// returns 'Mambo'

lugha.translate('goodbye');
// returns 'kwaheri'
```

## Conclusion
This is a very simple package that can be used to translate words in your application.

## License