
CREATE TABLE Client(
ID INT PRIMARY KEY NOT NULL,
Nom VARCHAR(50) NOT NULL,
Prenom VARCHAR(50) NOT NULL,
Addresse_rue VARCHAR(50) NOT NULL,
Addresse_ville VARCHAR(50) NOT NULL,
Addresse_numero INT NOT NULL,
Addresse_codePostal INT NOT NULL,
Mail VARCHAR(50) NOT NULL,
Telephone INT NOT NULL,
Fidelite BOOLEAN  NULL,
N_Reference_Client BIGINT NOT NULL UNIQUE
);

CREATE TABLE Commande(
ID INT PRIMARY KEY NOT NULL,
montant DECIMAL(3,2) NOT NULL,
Date_commande DATE NOT NULL,
Quantite INT,
N_Commande BIGINT UNIQUE NOT NULL,
FOREIGN KEY(N_Commande) REFERENCES Client(N_Reference_Client)
);

CREATE TABLE Produit(
ID INT PRIMARY KEY NOT NULL,
Nom VARCHAR(50) NOT NULL,
Prix_de_vente INT NOT NULL,
Stock INT UNIQUE,
FOREIGN KEY(Stock) REFERENCES Client(ID)
);

CREATE TABLE Societe(
ID INT PRIMARY KEY NOT NULL,
Nom VARCHAR(50),
Addresse_ville VARCHAR(50) NOT NULL,
Addresse_rue VARCHAR(50) NOT NULL,
Addresse_numero INT NOT NULL,
Addresse_codePostal INT NOT NULL,
N_TVA BIGINT NOT NULL UNIQUE
);

CREATE TABLE Fournisseur(
ID INT PRIMARY KEY NOT NULL,
Nom VARCHAR(50) NOT NULL,
Prenom VARCHAR(50) NOT NULL,
Addresse_ville VARCHAR(50) NOT NULL,
Adresse_rue VARCHAR(50) NOT NULL,
Addresse_numero INT NOT NULL,
Addresse_codePostal INT NOT NULL,
Nom_contact VARCHAR(50) NOT NULL,
N_TVA BIGINT NOT NULL UNIQUE,
FOREIGN KEY (N_TVA) REFERENCES Societe (N_TVA)
);

CREATE TABLE Mobilier_jardin(
ID INT PRIMARY KEY NOT NULL,
Nom VARCHAR(50) NOT NULL,
Prix_de_vente INT NOT NULL,
Quantite INT UNIQUE,
FOREIGN KEY(Quantite) REFERENCES Client(ID)
);

CREATE TABLE Outillage_jardin(
ID INT PRIMARY KEY NOT NULL,
Nom VARCHAR(50) NOT NULL,
Prix_de_vente INT NOT NULL,
Quantite INT UNIQUE,
FOREIGN KEY(Quantite) REFERENCES Client(ID)
);

CREATE TABLE Accessoires_jardin(
ID INT PRIMARY KEY NOT NULL,
Description VARCHAR(50) NOT NULL,
Prix_de_vente INT NOT NULL,
Quantite INT UNIQUE,
FOREIGN KEY(Quantite) REFERENCES Client(ID)
);

CREATE TABLE Plantes_jardin(
ID INT PRIMARY KEY NOT NULL,
Description VARCHAR(50) NOT NULL,
Prix_de_vente INT NOT NULL,
Quantite INT UNIQUE,
FOREIGN KEY(Quantite) REFERENCES Client(ID)
);