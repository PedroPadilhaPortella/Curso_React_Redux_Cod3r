export default class Cliente {
  private _id: string;
  private _nome: string;
  private _idade: number;

  constructor(nome: string, idade: number, id = null) {
    this._nome = nome;
    this._idade = idade;
    this._id = id
  }
  

  get id() {
    return this._id;
  }

  get nome() {
    return this._nome;
  }
  
  get idade() {
    return this._idade;
  }

  set id(id) {
    this._id = id;
  }
  
  static generateEmptyClient() {
    return new Cliente('', 0);
  }

  static generateIdForClient(nome: string, idade: number) {
    return new Cliente(nome, idade, new Date().getTime().toString());
  }
}