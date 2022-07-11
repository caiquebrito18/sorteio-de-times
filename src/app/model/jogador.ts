export class Jogador{
    public id: number;
    public nome: string;
    public idade: string;
    public sexo: string;
    public perna: string;
  
    constructor(nome: string, idade: string, sexo: string, perna: string){
      this.id = Math.round(Math.random() * 1000);
      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo;
      this.perna = perna;
    }
}