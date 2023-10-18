// import {api} from "./constants";

import {api} from "./constants";
function createItem(data, key) {
    if (!data) {
        return false;
    }
    let item = `<a href="second-page.html?id=${data[key]?.id}" target="_blank" class="item_image">
            <div class="item_icon  ${data[key].like}?'active':' '">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_2_45)">
                        <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#959595"/>
                    </g>
                </svg>
            </div>
            <div class = "item_img">
                <img src = "${api + data[key]?.picture?.path}" alt = "${data[key]?.picture?.alt}">
            </div>
            <div class="item_desc">
                <div class="item_name">${data[key]?.name}</div>
                <div class="item_price">${data[key]?.price.value + ' ' + data[key]?.price.currency}</div>
            </div>
        </a>`;

    return item;
}

export function fillItems(data) {
    if (!data) {
        return false;
    }
    let wrapper = document.querySelector('.wrapper');
    let output = ' ';
    for (let key in data) {
        output = output + createItem(data, key);
    }
    wrapper.innerHTML = output;
}

export function detailCard(data) {
    if (!data) {
        return false;
    }
    let firstDesc = document.querySelector('.first_desc');
    let secondDesc = document.querySelector('.second_desc');
    let price = document.querySelector('.price');
    let productImage = document.querySelector('.product_image > div');

    firstDesc.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.info}</p>`;
    secondDesc.innerHTML = `
                <h3>${data.description}</h3>
                <p>${data.details}</p>`;

    productImage.innerHTML = `
                <img src="${api + data?.picture?.path}" alt = "${data?.picture?.alt}">`;

    price.innerHTML = `
                ${data.price.value + ' ' + data.price.currency}`;

        // <div class="fav ${data.like}?'active': ">
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        //         <g clip-path="url(#clip0_3_675)">
        //             <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#959595"/>
        //         </g>
        //     </svg>
        // </div>
   //  </div>
   // </div>`;
}
