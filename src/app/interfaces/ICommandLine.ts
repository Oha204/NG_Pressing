import { IArticle } from "./IArticle";
import { IMaterial } from "./IMaterial";
import { IOrder } from "./IOrder";
import { IPrestation } from "./IPrestation";

export interface ICommandLine{
    id: number,
    service_id: IPrestation,
    article_id: IArticle;
    material_id: IMaterial;
    state_id: number;
    orderlinecommand_id: IOrder,
    price_ht: number,
    quantity: number,
}