//запрос к списку продуктов
import {api} from "./constants";

export async function getItems(){
    console.log(api + '/item');
const data = await fetch( api + '/item' )
}
