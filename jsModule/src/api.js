import {api} from "./constants.js";
import axios from 'axios';

async function getData() {
    const data = await axios.get(api + '/item')
        .then( (response) => {
            if (response.status !== 200) {
                throw new Error('network error')
            } else {
                return response.data;
            }
        })
        .catch(function (err) {
            console.log('error');
        })
    return data.content;
}
async function getItemInfo(id) {
    const itemId = await axios.get(api + '/item/:' + id)
        .then( (response) => {
            if (response.status !== 200 ) {
                throw new Error( 'error')
            } else {
                return response.data;
            }
        })
        .catch(function (err) {
            console.log('network error');
        })
    return itemId.content;
}

export const id = window.location.search.replace( '?', '');

export {getData, getItemInfo}