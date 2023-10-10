export const param= 'NOT_REQUIRED';

const api = 'http://localhost:3006';

let currentUrl = location.pathname.split('/').pop();
console.log(currentUrl);

async function getData(){
    const data=await fetch( api + '/item')
        .then(function(response){
            if(!response.ok){
                throw new Error('network error')
            }else{
                return response.json();
            }
        })
        .catch(function(err){
            console.log('error');
        })
    return data.content;
}
console.log(getData());

function createItem(data,key){
    if(!data){
        return false;
    }
    let item=` <a href="second-page.html" target="_blank" class="item_image">
            <div class="item_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_2_45)">
                        <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#959595"/>
                    </g>
                </svg>
            </div>

            <div class="item_img">
                <img src="../img/googlehome.png">
            </div>
            <div class="item_desc">
                <div class="item_name">${data[key].name}</div>
                <div class="item_price">${data[key].price.value + ' ' + data[key].price.currency}</div>
            </div>
        </a>`;
    return item;
}
function fillItems(data){
    if(!data){
        return false;
    }
    let wrapper = document.querySelector('.wrapper');
    let output = ' ';
    for(let key in data){
        output=output+createItem(data,key);
    }
        wrapper.innerHTML=output;
}

async function getItemInfo(){
    const itemId=await fetch( api + '/item/:itemId')
        .then(function(response){
            if(!response.ok){
                throw new Error('network error')
            }else{
                return response.json();
            }
        })
        .catch(function(err){
            console.log('error');
        })
    return itemId.content;
}
console.log(getData());

function Item(data){
    if(!data){
        return false;
    }
    let product = `
    <div class="product_image">
        <div>
            <img src="../img/google-home-voice-command-device-amazon-echo-google-assistant-voice-command-device-d33abfc7403668afbd14357605a38f6c%201%20.png">
        </div>
    </div>
    <div class="product_content">
        <div class="product_desc">
             <div class="first_desc">
                <h2>${data.name}</h2>
                <p>${data.info}</p>
        </div>
              <div class="second_desc">
                <h3>${data.description}</h3>
                <p>${data.details}</p>
              </div>
        </div>
<div class="add_item">
        <div class="price">
           ${data.price.value + ' ' + data.price.currency}
        </div>
        <!--Счетчик -->
        <div class="item_counter">
            <div class="counter_btn">
            <button class="minus">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_1294_145)">
                    <path d="M19 13H5V11H19V13Z" fill="#E97F03"/>
                </g>
            </svg>
            </button>
            </div>
            <div class="counter"><p>1</p></div>
            <div class="counter_btn">
            <button class="plus">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1294_142)">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03"/>
                    </g>
                </svg>
            </button>
            </div>
        </div>
        <!--//Счетчик -->
            <button class="add_to_cart">
                Add to cart
            </button>
        <div class="fav">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_3_675)">
                    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#959595"/>
                </g>
            </svg>
        </div>
    </div>
   </div>`;
    return product;
}
function appendItem(data){
    if(!data){
        return false;
    }
    let res = ' ';
    let product_wrapper =document.querySelector('.product_wrapper');
    res =res+Item(data);
    product_wrapper.innerHTML=res;
}
async function initialize(){
    switch(currentUrl){
        case 'index.html':
            fillItems(await getData());
        case 'second-page.html':
            appendItem(await getItemInfo()) ;
    }
}
initialize();