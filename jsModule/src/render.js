import {api} from "./constants.js";
import {getData} from "./api";
import axios from "axios";

function createItem(data, key) {
    if (!data) {
        return false;
    }
    // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    //                      <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#959595"/>
    //                 </svg>
    let item = `<a href="second-page.html?id=${data[key]?.id}" target="_blank" class="item_image">
            <div class="item_icon  ${data[key].like ? 'active' : ''}">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#E97F03"/>
        </svg>
            </div>
            <div class = "item_img">
                <img src = "${api + data[key]?.picture?.path}" alt = "${data[key]?.picture?.alt}">
            </div>
            <div class = "item_desc">
                <div class = "item_name">${data[key]?.name}</div>
                <div class = "item_price">${data[key]?.price.value + ' ' + data[key]?.price.currency}</div>
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
    let inp = document.querySelector('.header_search_input > input');

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

}

// export function getNames(data) {
//     let inp = document.querySelector('.header_search_input > input');
//     let list = document.querySelectorAll('.item_image');
//     let output = '';
//     inp.oninput = function () {
//         let value = this.value.trim();
//         let regex = new RegExp(value, 'i');
//         console.log('>>>val', value);
//         if (value !== '') {
//             for (let key in data) {
//                 if (data[key].name.search(regex) !== -1) {
//                     output += fillItems(data[key]);
//                     console.log('>>>out', output);
//                 }
//             }
//         }
//         list.innerHTML = output;
//         console.log(list.innerHTML);
//     }
// }

export function getNames(data) {
    let inp = document.querySelector('.header_search_input > input');
    let output = '';
    let list = document.querySelectorAll('.item_image');

    inp.oninput = function () {
        let value = this.value.trim();
        let filtered_list = [];
        let arr = [];
        console.log('>>>val', value);
        if (value !== '') {
            for (let key in data) {
                let regex = new RegExp(value, 'i');
                if (data[key].name.search(regex) !== -1) {
                    filtered_list.push(data[key]);
                }
            }
        } else {
            filtered_list = data;
        }
        setTimeout(() => {
            fillItems(filtered_list);
        }, 3000);

    }
};



// export function getNames(data) {
//     let inp = document.querySelector('.header_search_input > input');
//     let list = document.querySelector('.item_image');
// //    let zool = document.querySelector('.wrapper');
//     let output = '';
//     let key = '';
//
//
//
//     inp.oninput = function () {
//         let value = this.value.trim();
//         let regex = new RegExp(value, 'i');
//         console.log('val',value);
//
//         let filtered_list = [];
//
// //        zool.innerHTML = '';
//
//         if (value !== '') {
//             for (key in data) {
//                 console.log('ffffff',data[key].name.search(regex));
//                 if (data[key].name.search(regex) !== -1) {
//                     // output = output + createItem(data, key);
//                     filtered_list.push(data[key]);
//                 }
//
// //                zool.innerHTML = zool.innerHTML + output;
//                 // list.innerHTML = output;
//                 console.log(list.innerHTML);
//             }
//         }
//
//         console.log('1',filtered_list);
//         fillItems(filtered_list);
//     }
// };
// fillItems(getNames());


// let inp = document.querySelector('.header_search_input > input');
//
//
//
// export function getNames(data) {
//     inp.oninput = function () {
//
//         clearList(elems);
//
//         let value = this.value.trim();
//         console.log(value);
//
//         if (value !== '') {
//             for (let key in data) {
//                 const regex = new RegExp(value, 'gi');
//                 let result = data[key].name.search(regex);
//                 if (result !== -1) {
//                     elems(data[key].name.slice(0,result) + '<b>' + value + '</b>' + data[key].name.slice(result+value.length,data[key].name.length));
//                 }
//             }
//         }
//
//     }
// };
//
// let elems = function appendList(output){
//     let parent = document.querySelector('.options');
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     a.innerHTML = output;
//     a.href = "#";
//     li.appendChild(a);
//     parent.appendChild(li);
//     a.addEventListener('click', function(){
//         inp.value = this.textContent;
//         parent.classList.add('hide');
//
//     });
//
// }
// function clearList(argument){
//     let list = document.querySelectorAll('.options >li');
//     for(let elem of list){
//         elem.remove();
//     }
// }
