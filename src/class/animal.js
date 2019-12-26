class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log("こんにちは！${this.name}ちゃん！");
  }
  info(){
    this.greet();
    console.log("${this.name}ちゃんの年齢は${cat.age}です");
  }
}

//Animalクラスをcat.jsにエクスポート
export default Animal;
