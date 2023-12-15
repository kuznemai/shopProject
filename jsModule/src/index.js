import {getData, getItemInfo, id} from "./api.js";
import {detailCard, fillItems, getNames} from "./render.js";

let currentUrl = location.pathname.split('/').pop();

async function initialize() {
    let data;
    switch (currentUrl) {
        case 'index.html':
            data = await getData();
            fillItems(data);
            getNames(data);
            break;
        case 'second-page.html':
            data = await getItemInfo(id);
            detailCard(data);
            break;
    }
}

initialize();


