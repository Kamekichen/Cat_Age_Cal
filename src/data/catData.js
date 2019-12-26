import Cat from "../class/cat";
import readlineSync from "readline-sync"

const name = readlineSync.question("名前を入力してください:");
const age = readlineSync.question("ねこの年齢を入力してください:");

// 名前と年齢の入力部分
const cat = new Cat (name, age);

export default cat
