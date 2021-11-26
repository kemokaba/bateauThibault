export class Produit {
    name: string;
    category: string;
    price: string;
    availability: boolean;
    sale: boolean;
    comments: string;
    imgURL: string;

    constructor(name: string){
        this.name = name;
    }
}