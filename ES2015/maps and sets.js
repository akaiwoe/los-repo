const hasDuplicates = arr => new Set(arr).size !== arr.length;

function isVowel(char){
    return "aeiou".includes(char);
};

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase();
        if(isVowel(lowerCaseChar)){
            vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
        return vowelMap;
}

