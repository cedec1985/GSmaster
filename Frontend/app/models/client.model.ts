export interface Client {
    id: number;
    nom : string;
    prenom : string;
    addresse: Addresse;
    mail : string;
    telephone : number;
}

export interface Addresse {
    addresseRue: string;
    addresseVille: string;
    addresseNumero: number;
    addresseCodepostal: number
}
export class Client{
    client: any;
        constructor(
   public id: number,
  public  nom : string,
   public prenom : string,
  public  addresse: Addresse,
  public  mail : string,
   public telephone : number
            ) { }
    }