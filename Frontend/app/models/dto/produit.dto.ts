export interface ProduitDTO {
    id: number;
    nom: string;
    reference?: number;
    stock: number;
    prixDeVente: number;
    avis: string;
    categorie: ProduitCategorie;
}

export enum ProduitCategorie {
    OUTILLAGE = "OUTILLAGE",
    MOBILIER = "MOBILIER",
    PLANTES = "PLANTES",
    ACCESSOIRES = "ACCESSOIRES"
}