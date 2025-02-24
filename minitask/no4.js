export function palindrome (word) {
    setTimeout (function () {
        const splitChara = word.split("")
        const reverseChara = splitChara.reverse().join("")
        
        if (word === reverseChara) {
            console.log(`${word} adalah palindrom`);
        } else {
            console.log(`${word} bukan palindrom`);
        }
    }, 3500)

}

export function kalimat (sentence) {
    setTimeout (function () {
        const reverseSentence = sentence.split(" ").reverse().join(" ")
        console.log(reverseSentence);
    }, 3500)
}
