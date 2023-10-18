import {api} from "./constants.js";

async function getData() {
    const data = await fetch(api + '/item')
        .then( (response) => {
            if (!response.ok) {
                throw new Error('network error')
            } else {
                return response.json();
            }
        })
        .catch(function (err) {
            console.log('error');
        })
    return data.content;
}
async function getItemInfo(id) {
    const itemId = await fetch(api + '/item/:' + id)
        .then( (response) => {
            if (!response.ok) {
                throw new Error( 'error')
            } else {
                return response.json();
            }
        })
        .catch(function (err) {
            console.log('network error');
        })
    return itemId.content;
}

export const id = window.location.search.replace( '?', '');

export {getData, getItemInfo}