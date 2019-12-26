//Animalクラスをインポート
import Animal from "./animal";

import chalk from "chalk";

class Cat extends Animal{
//construcorをAnimalクラスのものに追加
  construcor(name, age, breed){
    super(name, age);
    this.breed = breed;
  }

  info(){
    this.greet();
    console.log(chalk.yellow("${this.name}ちゃんの年齢は${cat.age}です"));
    const humanAge = cat.getHumanAge();
    console.log(chalk.bgCyan("人間年齢で${humanAge}です"));
  }
  // 人間年齢の計算
  getHumanAge(){
    return 24 + (this.age - 2) * 4;
  }
}
//Catクラスをエクスポート
export default Cat;
