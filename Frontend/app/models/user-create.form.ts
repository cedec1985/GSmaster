export interface RegisterForm {
    // Partie administrative
    email: string;
    password: string;
    confirmPassword: string;
    nom: string;
    prenom: string;
    ville: string;
    rue:string;
    codePostal: number;
    telephone: string;
    numero: number;
}

export interface RegisterAPIForm {
  nom: string;
  password: string;
  prenom: string;
  mail: string;
  telephone: string;
  addresse: Addresse;
}

export interface LoginForm{
 email: string;
 password: string;
 role: string;
}

export interface LoginAPIForm {
  email: string;
  password: string;
}

export interface UserInfo {
  email: string;
  nom: string;
  prenom: string;
  ville: string;
  rue:string;
  codePostal: number;
  telephone: string;
  numero: number;
}
export interface Addresse {
  addresseRue: string;
  addresseVille: string;
  addresseNumero: number;
  addresseCodepostal: number;
}
