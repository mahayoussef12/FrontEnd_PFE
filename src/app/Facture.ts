import {Client} from "./Client";
import {Entreprise} from "./Entreprise";

  export class Facture
{
  id_facture?: number;
  date_creation?:Date;
  date_validation?:Date;
  prix_unitaire_HT?:number;
  code? :string;
  num_facture?:number;
  quantite?:number;
  total_Ht?:number;
  tva?:number ;
  remise?:number;
  tolale_TTC?:number;
  description?:string;
  etat?:boolean;
  client?:Client;
  entreprise?:Entreprise;

}
