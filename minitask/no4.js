function palindrome (word) {
    const splitChara = word.split("")
    const reverseChara = splitChara.reverse().join("")
        
    if (word === reverseChara) {
        console.log(`${word} adalah palindrom`);
    } else {
        console.log(`${word} bukan palindrom`);
    }
}
palindrome("malam")
palindrome("siang")

function kalimat (sentence) {
    const reverseSentence = sentence.split(" ").reverse().join(" ")
    console.log(reverseSentence);
}
kalimat("Saya Suka Membaca")
