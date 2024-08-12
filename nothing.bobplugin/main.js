// Supported languages
function supportLanguages() {
    return ["auto", "zh-Hans", "en", "it", "nl", "fr", "de", "es", "ja", "ko", "ru", "pt", "pl"];
}

// Translate function
function translate(query, completion) {
    completion({ result: { toParagraphs: [query.text], from: "en", to: "en" } });
}
