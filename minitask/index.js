import { handleFetchData, fetchDataAsync } from "./no1.js";
import { getDataFromServer, processData } from "./no2.js";
import arrNameDom from "./no3.js";
import { palindrome, kalimat } from "./no4.js";
import divideSort from "./no5.js";
import optionToDo from "./no6.js";

function compileWeeklyTask () {
    handleFetchData(true)
    fetchDataAsync(false)
    getDataFromServer(true,processData)
    arrNameDom()
    palindrome("malam")
    kalimat("Saya Suka Membaca")
    divideSort(343074872012384078743)
    optionToDo()
}

compileWeeklyTask()