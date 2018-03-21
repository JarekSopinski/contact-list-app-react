const handleCategoriesNames = string => {
    const words = string.replace(/,/g,"").trim().split(" ");
    let wordsInBrackets = [];

    words.forEach(word => {
        let wordInBrackets = '[' + word + ']';
        wordsInBrackets = wordsInBrackets.concat(wordInBrackets)
    });

    return wordsInBrackets.join(' ')
}; // modifies strings form 'category' input (removes commas, adds brackets)
// used as a callback inside addContact and updateContact

export { handleCategoriesNames }