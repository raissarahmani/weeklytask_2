import { handleFetchData, fetchDataAsync } from "./minitask/no1.js";
import { getDataFromServer, processData } from "./minitask/no2.js";
import arrNameDom from "./minitask/no3.js";
import { palindrome, kalimat } from "./minitask/no4.js";
import divideSort from "./minitask/no5.js";

console.log(handleFetchData(true))
console.log(fetchDataAsync(false))

getDataFromServer(true,processData)

arrNameDom()

palindrome("malam")
palindrome("siang")
kalimat("Saya Belajar Javascript dan HTML")

divideSort(3643407766072394)