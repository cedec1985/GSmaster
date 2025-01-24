import { Client } from "../client.model"
import { Livreur } from "../livreur"

export interface CommandeDTO {
   
    montant: number,
    quantite:number,
    dateCommande: Date,
    orderedBy : string,
    nCommande: number
}
export interface CommandeForm {

    id:number,
    montant: number,
    quantite:number,
    dateCommande: Date,
    nCommande: number,
    livreur: Livreur,
    client: Client
}

export interface CommandeAPIForm {

    id:number
    quantité:number,
    n_commande: number,
    date_commande: Date,
    montant: number,
    delivered_by_livreur_id:any,
    ordered_by_client_id:any
}