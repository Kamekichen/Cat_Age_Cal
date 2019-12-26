import chalk from "chalk";
//Animalクラスをインポート
import Animal from "./animal";

class Cat extends Animal{
//construcorをAnimalクラスのものに追加

  info(){
    this.greet();
    console.log(chalk.yellow(`${this.name}ちゃんの年齢は${this.age}才です`));
    console.log(chalk.bgCyan(`人間年齢で${humanAge}才です`));
    const humanAge = this.getHumanAge();
  }
  // 人間年齢の計算
  getHumanAge(){
    return 24 + (this.age - 2) * 4;
  }
}
//Catクラスをエクスポート
export default Cat;
