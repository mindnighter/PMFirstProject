const showRequest = () => {
    console.log('CURRENCY', CURRENCY);
    console.log('BASKET', BASKET);
    console.log('TOP_MENU', TOP_MENU);
    console.log('MENU', MENU);
    console.log('NEWS', NEWS);
    console.log('BANNER', BANNER);
    console.log('PROMOTIONS', PROMOTIONS);
    console.log('BUYING_RIGHT_NOW', BUYING_RIGHT_NOW);
}

//showRequest();

const displayCatalog = (event) => {
    const catalogLists = document.querySelectorAll('.catalog-list');
    for (let catalogList of catalogLists) {
        if (catalogList.style.display == "block" && catalogList.previousElementSibling != event.target) {
            catalogList.style.display = "none"
        }
        if (catalogList.previousElementSibling == event.target) {
            if (catalogList.style.display == "block") {
                catalogList.style.display = "none"
            } else {
                catalogList.style.display = "block"
            }
        }
    }
}

const firstBlock = () => {
    const items = TOP_MENU;
    const menu = document.querySelector('.menu-list');
    const header = document.querySelector('.header');
    let limiter = 0;
    for (let item in items) {
        if(limiter < 9){
            limiter++;
            item = items[item];
            if(item.submenu){
                const li = document.createElement('li');
                li.setAttribute('class','menu-list__item menu-list__catalog');
                const a =  document.createElement('a');
                a.setAttribute('class','menu-list__link');
                a.setAttribute('href','#');
                a.innerText = item.title;
                const ul = document.createElement('ul');
                for(j = 0; j<item.submenu.length; j++){
                    ul.setAttribute('class','catalog-list');
                    const liIN = document.createElement('li');
                    liIN.setAttribute('class','catalog-list__item');
                    const aIN = document.createElement('a');
                    aIN.setAttribute('class','catalog-list__link');
                    aIN.setAttribute('href',item.submenu[j].url);
                    aIN.innerText = item.submenu[j].title;
                    liIN.append(aIN);
                    ul.append(liIN);
                }
                li.append(a);
                li.append(ul);
                menu.append(li);
            } else {
                const li = document.createElement('li');
                li.setAttribute('class','menu-list__item');
                const a =  document.createElement('a');
                a.setAttribute('class','menu-list__link');
                a.setAttribute('href',item.url);
                a.innerText = item.title;
                li.append(a);
                menu.append(li);
            }      
        }
    }
    const catalogs = document.querySelectorAll('.menu-list__catalog');
    for (let catalog of catalogs) {
        catalog.addEventListener('click', displayCatalog);
    }
    const menu__burgger = document.querySelector('.menu__burgger');
    const close = document.querySelector('.menu__close-btn');
    menu__burgger.addEventListener('click',()=>{
        menu__burgger.style.display = "none";
        header.setAttribute('class','header actv');
        menu.style.display = "inline";
        close.style.display = "inline";
        close.addEventListener('click', ()=>{
            header.setAttribute('class','header');
            menu__burgger.style.display = "inline";
            menu.style.display = "none";
            close.style.display = "none";
        });
    });
}

firstBlock();

const sortByOrder = (arr) =>{
    return arr.sort((a, b) => a.order - b.order);
}

const sliderBlock3 = () => {
    const requestElements = sortByOrder(MENU);
    const ul = document.querySelector('.extra-list__menu');
    let elemsPerPage = requestElements.length;
    if(elemsPerPage>10){elemsPerPage=10}
    for (i = 0; i < requestElements.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'extra-list__item splide__slide');
        const a = document.createElement('a');
        a.setAttribute('class', 'extra-list__link');
        a.setAttribute('href', requestElements[i].url);
        a.innerText = requestElements[i].title;
        li.append(a);
        ul.append(li);
    }
    new Splide( '.splide3',{
        perPage: elemsPerPage,
        pagination:false,
        perMove:1,
    } ).mount();
    
    const arrowPrev = document.querySelector('.extra-list__prev');
    const arrowNext = document.querySelector('.extra-list__next');
    const libArrowP = document.querySelectorAll('.splide__arrow--prev')[0];
    const libArrowN = document.querySelectorAll('.splide__arrow--next')[0];
    libArrowP.style.display = "none";
    libArrowN.style.display = "none";
    if(libArrowN.hasAttribute('disabled')){
        arrowNext.style.display = "none";
    } else {
        arrowNext.style.display = "inline";
    }
    if(libArrowP.hasAttribute('disabled')){
        arrowPrev.style.display = "none";
    } else {
        arrowPrev.style.display = "inline";
    }
    arrowNext.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowN.dispatchEvent(event);
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
    })
    arrowPrev.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowP.dispatchEvent(event);
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
    })  
}

sliderBlock3();


const News = ()=>{
    let newsElements=[];
    const months = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
    for ( i = 0 ; (i < 3) && (i < NEWS.length) ; i++) {
        let r = Math.floor(Math.random() * (NEWS.length - i)) + i;
        newsElements[i]  = NEWS[r];
        NEWS[r] = NEWS[i];
        NEWS[i] = newsElements[i];
      }
    const ul = document.querySelector('.news__list');
    for(i = 0; i < newsElements.length; i++){
        const date = newsElements[i].date.split('/');
        const li = document.createElement('li');
        li.setAttribute('class', 'news__list-item');
            const divLeft = document.createElement('div');
            divLeft.setAttribute('class', 'news__list-left');
                const img = document.createElement('img');
                img.setAttribute('class', 'news__list-img');
                img.setAttribute('src', newsElements[i].img);
                img.setAttribute('alt', 'news-img');
                img.style.width = "60px";
                img.style.height = "60px";
            divLeft.append(img);
                const divL = document.createElement('div');
                divL.setAttribute('class', 'news__list-date');
                    const spanL = document.createElement('span');
                    spanL.innerText = date[2];
                divL.append(spanL);
                    const P = document.createElement('p');
                    P.innerText = months[--date[1]];
                divL.append(P);
            divLeft.append(divL);
        li.append(divLeft);
            const divRight = document.createElement('div');
            divRight.setAttribute('class', 'news__list-right');
                const a = document.createElement('a');
                a.setAttribute('class', 'news__list-link');
                a.setAttribute('href', newsElements[i].url);
                a.innerText = newsElements[i].title;
            divRight.append(a);
                const p = document.createElement('p');
                p.setAttribute('class', 'news__list-text');
                p.innerText = newsElements[i].description;
            divRight.append(p);
        li.append(divRight);
        ul.append(li);
    }
}
News();

const sliderBlock6 = () =>{
    const requestElements = sortByOrder(BANNER);
    const ul = document.querySelector('.right__slider');
    for (i = 0; i < requestElements.length; i++) {
        const li = document.createElement('li');
            li.setAttribute('class', 'right__slider-item splide__slide');
                const img = document.createElement('img');
                const span = document.createElement('span');
                span.setAttribute('class','rel');
                    img.setAttribute('src',requestElements[i].img);
                span.append(img);
                    const a = document.createElement('a');
                    a.setAttribute('href', requestElements[i].url);
                        const button = document.createElement('button');
                        button.setAttribute('class', 'right__slider-more');
                        button.innerText = "Подробрее";
                    a.append(button);
                span.append(a);
        li.append(span);
        ul.append(li);
    }
    const controll = document.querySelector('.right-bottom');
    let aPlay = true;
    const splide = new Splide( '.splide6',{
        type: "loop",
        autoplay: aPlay,
        interval: 3000,
    }).mount();
    controll.addEventListener('click',()=>{
        aPlay = false;
    });
    const libArrowP = document.querySelectorAll('.splide__arrow--prev')[1];
    const libArrowN = document.querySelectorAll('.splide__arrow--next')[1];
    libArrowP.style.width = "30px";
    libArrowP.style.height = "50px";
    libArrowN.style.width = "30px";
    libArrowN.style.height = "50px";
    libArrowP.style.opacity = "0";
    libArrowN.style.opacity = "0";
    const sliderDots = document.querySelectorAll('.splide__pagination')[0];
    for(i = 0; i < sliderDots.children.length; i++){
        sliderDots.children[i].setAttribute('class', 'right__slider-dot');
    }
}
sliderBlock6();

const getItems = (type,obj) =>{
    let arr = [];
    for(i = 0; i < obj.length; i++){
        if(type == obj[i].type){
            arr.push(obj[i]);
        }
    }
    return arr;
}

const create = (items,order,type)=>{
    let src;
    if(type == 'new'){
        src = "./images/new-icon.png";
    }
    if(type == 'recommended'){
        src = "./images/like-icon.png";
    }
    if(type == 'sale'){
        src = "./images/percent-icon.png";
    }
    const ul = document.querySelectorAll('.slider')[order];
    for(i = 0; i < items.length; i++){
        const li = document.createElement('li');
        li.setAttribute('class','splide__slide slider__item');
            const div1 = document.createElement('div');
            div1.setAttribute('class','slider__img-block');
                const img1 = document.createElement('img');
                img1.setAttribute('class','slider__item-icon icon-new');
                img1.setAttribute('src',src);
            div1.append(img1);
        li.append(div1);
            const div2 = document.createElement('div');
            div2.setAttribute('class','slider__item-img');
                const img2 = document.createElement('img');
                img2.setAttribute('src', items[i].img);
            div2.append(img2);
        li.append(div2);
            const a = document.createElement('a');
            a.setAttribute('class','slider__item-link');
            a.setAttribute('href',items[i].url);
            a.innerText = items[i].description
        li.append(a);
            const div3 = document.createElement('div');
            div3.setAttribute('class','slider__item-price');
                const price = document.createElement('span');
                price.innerText = "Цена:";
            div3.append(price);
                const newPrice = document.createElement('span');
                newPrice.setAttribute('class','new-price');
                newPrice.innerText = `${items[i].price} UAH`;
            div3.append(newPrice);
                const oldPrice = document.createElement('s');
                oldPrice.setAttribute('class','old-price');
                oldPrice.innerText = `${items[i].oldPrice} UAH`;
            div3.append(oldPrice);
        li.append(div3);
            const button = document.createElement('button');
            button.setAttribute('class','slider__item-buy');
            button.price = items[i].price;
           /// button.currency = items[i].currency;
            button.innerText = "Купить";
        li.append(button);
            const A = document.createElement('a');
            A.setAttribute('class','slider__item-more');
            A.setAttribute('href',items[i].url);
            A.innerText = "Подробнее";
        li.append(A);
        ul.append(li);
    }
}

const makeRightPrice = (arr) =>{
    for(i = 0; i < arr.length; i++){
        if(arr[i].currency == "RUB"){
            arr[i].oldPrice *= CURRENCY_EXCHANGE.RUB
            arr[i].price *= CURRENCY_EXCHANGE.RUB
        }
        if(arr[i].currency == "USD"){
            arr[i].oldPrice *= CURRENCY_EXCHANGE.USD
            arr[i].price *= CURRENCY_EXCHANGE.USD
        }
    }
    
    return arr;
}

const sortByDate = (arr) =>{
    return arr.sort((a, b) => {
        const ad = a.date.split('/');
        const bd = b.date.split('/');
        if( ad[0] - bd[0] == 0){
            if(ad[1] - bd[1] == 0){
                return bd[2] - ad[2]
            } else{
                return bd[1] - ad[1]
            }
        } else {
            return  bd[0] - ad[0]
        }
    });
    
}

const sliderBlock7 = () =>{
    let items = getItems('new',ITEMS);
    items = makeRightPrice(items);
    items = sortByDate(items);
    create(items,0,'new');
    let gap = "35px";
    let elemsPerPage = items.length;
    const screenWidth = window.screen.width

    if(elemsPerPage < 2){
        elemsPerPage = 2;
        document.querySelector('.splide7').style.marginLeft = "35%";
    }
    if(screenWidth <= 980){
        if(elemsPerPage < 3){

        } else{
            elemsPerPage = 3;
        }
        
        gap = "20px";
    }
    if(screenWidth < 750){
        elemsPerPage = 1;
        gap = `${screenWidth/2 - 150}px`;
        if(screenWidth < 300) {gap = "1px"}
        document.querySelector('.splide7').style.marginLeft = gap;
        document.querySelector('.splide7').style.marginRight = gap;
    }
    if(elemsPerPage > 4){
        elemsPerPage = 4;
    }
    
    new Splide( '.splide7',{
        perPage:  elemsPerPage,
        pagination:false,
        perMove:1,
        gap: gap,
        autoHeight: true,
       
    }).mount();
    const arrowPrev = document.querySelectorAll('.arrow-prev')[0];
    const arrowNext = document.querySelectorAll('.arrow-next')[0];
    const libArrowP = document.querySelectorAll('.splide__arrow--prev')[2];
    const libArrowN = document.querySelectorAll('.splide__arrow--next')[2];
    libArrowP.style.display = "none";
    libArrowN.style.display = "none";
    if(libArrowN.hasAttribute('disabled')){
        arrowNext.style.display = "none";
    } else {
        arrowNext.style.display = "inline";
    }
    if(libArrowP.hasAttribute('disabled')){
        arrowPrev.style.display = "none";
    } else {
        arrowPrev.style.display = "inline";
    }
    arrowNext.style.zIndex = 10;
    arrowNext.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowN.dispatchEvent(event);
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
    })
    arrowPrev.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowP.dispatchEvent(event);
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
    })  
}

sliderBlock7();

const sortByPrice = (arr) =>{
    return arr.sort((a, b) => a.price - b.price);
}

const sliderBlock8 = () =>{
    let items = getItems('recommended',ITEMS);
    items = makeRightPrice(items);
    items = sortByPrice(items);
    create(items,1,'recommended');
    let gap = "35px";
    let elemsPerPage = items.length;
    const screenWidth = window.screen.width

    if(elemsPerPage < 2){
        elemsPerPage = 2;
    }
    if(screenWidth <= 980){
        if(elemsPerPage < 3){

        } else{
            elemsPerPage = 3;
        }
        
        gap = "20px";
    }
    if(screenWidth < 750){
        elemsPerPage = 1;
        gap = `${screenWidth/2 - 150}px`;
        if(screenWidth < 300) {gap = "1px"}
        document.querySelector('.splide8').style.marginLeft = gap;
        document.querySelector('.splide8').style.marginRight = gap;
    }
    if(elemsPerPage > 4){
        elemsPerPage = 4;
    }
    
    new Splide( '.splide8',{
        perPage:  elemsPerPage,
        pagination:false,
        perMove:1,
        gap: gap,
        autoHeight: true,
       
    }).mount();
    const arrowPrev = document.querySelectorAll('.arrow-prev')[1];
    const arrowNext = document.querySelectorAll('.arrow-next')[1];
    const libArrowP = document.querySelectorAll('.splide__arrow--prev')[3];
    const libArrowN = document.querySelectorAll('.splide__arrow--next')[3];
    libArrowP.style.display = "none";
    libArrowN.style.display = "none";
    arrowNext.style.zIndex = 10;
    if(libArrowN.hasAttribute('disabled')){
        arrowNext.style.display = "none";
    } else {
        arrowNext.style.display = "inline";
    }
    if(libArrowP.hasAttribute('disabled')){
        arrowPrev.style.display = "none";
    } else {
        arrowPrev.style.display = "inline";
    }
    arrowNext.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowN.dispatchEvent(event);
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
    })
    arrowPrev.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowP.dispatchEvent(event);
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
    })  
}

sliderBlock8();

const sortByOldPrice = (arr) =>{
    return arr.sort((a, b) =>{
        const ap = a.oldPrice-a.price;
        const bp = b.oldPrice-b.price;
        return bp - ap;
    });
}


const sliderBlock9 = () =>{
    let items = getItems('sale',ITEMS);
    items = makeRightPrice(items);
    items = sortByOldPrice(items);
    create(items,2,'sale');
    let gap = "45px";
    let elemsPerPage = items.length;
    const screenWidth = window.screen.width
    if(elemsPerPage < 2){
        elemsPerPage = 2;
    }
    if(screenWidth <= 980){
        if(elemsPerPage < 3){

        } else{
            elemsPerPage = 3;
        }
        
        gap = "20px";
    }
    if(screenWidth < 750){
        elemsPerPage = 1;
        gap = `${screenWidth/2 - 150}px`;
        if(screenWidth < 300) {gap = "1px"}
        document.querySelector('.splide9').style.marginLeft = gap;
        document.querySelector('.splide9').style.marginRight = gap;
    }
    if(elemsPerPage > 4){
        elemsPerPage = 4;
    }
    
    new Splide( '.splide9',{
        perPage:  elemsPerPage,
        pagination:false,
        perMove:1,
        gap: gap,
        autoHeight: true,
       
    }).mount();
    const arrowPrev = document.querySelectorAll('.arrow-prev')[2];
    const arrowNext = document.querySelectorAll('.arrow-next')[2];
    const libArrowP = document.querySelectorAll('.splide__arrow--prev')[4];
    const libArrowN = document.querySelectorAll('.splide__arrow--next')[4];
    libArrowP.style.display = "none";
    libArrowN.style.display = "none";
    arrowNext.style.zIndex = 10;
    if(libArrowN.hasAttribute('disabled')){
        arrowNext.style.display = "none";
    } else {
        arrowNext.style.display = "inline";
    }
    if(libArrowP.hasAttribute('disabled')){
        arrowPrev.style.display = "none";
    } else {
        arrowPrev.style.display = "inline";
    }
    arrowNext.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowN.dispatchEvent(event);
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
    })
    arrowPrev.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowP.dispatchEvent(event);
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
    })  
}

sliderBlock9();

const createProm = (items,order) =>{
   
    const ul = document.querySelectorAll('.slider')[order];
    for(i = 0; i < items.length; i++){
        const li = document.createElement('li');
        li.setAttribute('class','splide__slide slider__item  action-item');
            const a = document.createElement('a');
            a.setAttribute('class','slider__item-link');
            a.setAttribute('href',items[i].url);
            a.innerText = items[i].title;
        li.append(a);
            const div1 = document.createElement('div');
            div1.setAttribute('class','slider__item-img');
                const img1 = document.createElement('img');
                img1.setAttribute('src',items[i].img);
            div1.append(img1);
        li.append(div1);
            const div2 = document.createElement('div');
            div2.setAttribute('class','slider__item-text');
            div2.innerText = items[i].description;
        li.append(div2);
           
            const div3 = document.createElement('div');
            div3.setAttribute('class','slider__item-timer');
                const term = document.createElement('div');
                term.setAttribute('class','timer-term');
                term.innerText = "Срок действия:";
            div3.append(term);
                const timer = document.createElement('div');
                if(items[i].time_action){
                    timer.setAttribute('class','timer-block');
                    const time = items[i].time_action.split(' ');
                        const timerNum = document.createElement('div');
                        timerNum.setAttribute('class','timer-block__numbers');
                            const days = time[0].split('');
                            if(days.length < 3){days.unshift('0');}
                            const span1 = document.createElement('span');
                            span1.setAttribute('class','days');
                            span1.innerText = days[0];
                            const span2 = document.createElement('span');
                            span2.setAttribute('class','days');
                            span2.innerText = days[1];
                            const p1 = document.createElement('bdo');
                            p1.innerText = ":";
                        timerNum.append(span1);
                        timerNum.append(span2);
                        timerNum.append(p1);
                            const hours = time[1].split('');
                            if( hours.length < 3){ hours.unshift('0');}
                            const span3 = document.createElement('span');
                            span3.setAttribute('class','hours');
                            span3.innerText = hours[0];
                            const span4 = document.createElement('span');
                            span4.setAttribute('class','hours');
                            span4.innerText = hours[1];
                            const p2 = document.createElement('bdo');
                            p2.innerText = ":";
                        timerNum.append(span3);
                        timerNum.append(span4);
                        timerNum.append(p2);
                            const minutes = time[2].split('');
                            if( minutes.length < 3){ minutes.unshift('0');}
                            const span5 = document.createElement('span');
                            span5.setAttribute('class','minutes');
                            span5.innerText = minutes[0];
                            const span6 = document.createElement('span');
                            span6.setAttribute('class','minutes');
                            span6.innerText = minutes[1];
                        timerNum.append(span5);
                        timerNum.append(span6);
                    timer.append(timerNum);
                        const timerName = document.createElement('div');
                        timerName.setAttribute('class','timer-block__names');
                            const spand = document.createElement('span');
                            spand.innerText = "дней";
                            const spanh = document.createElement('span');
                            spanh.innerText = "часов";
                            const spanm = document.createElement('span');
                            spanm.innerText = "минут";
                        timerName.append(spand);
                        timerName.append(spanh);
                        timerName.append(spanm);
                    timer.append(timerName);
                } else{
                    timer.setAttribute('class','timer-noterm');
                    timer.innerText = "бессрочно";
                }
            div3.append(timer);

        li.append(div3);
            const button = document.createElement('button');
            button.setAttribute('class','slider__item-buy');
            button.innerText = "Купить";
        li.append(button);

            const A = document.createElement('a');
            A.setAttribute('class','slider__item-more');
            A.setAttribute('href',items[i].url);
            A.innerText = "Подробнее";
        li.append(A);
        ul.append(li);
    }
}

const sliderBlock10 = () =>{
    let items = PROMOTIONS;
    createProm(items,3);
    let gap = "45px";
    let elemsPerPage = items.length;
    const screenWidth = window.screen.width

    if(elemsPerPage < 2){
        elemsPerPage = 2;
    }
    if(screenWidth <= 980){
        if(elemsPerPage < 3){

        } else{
            elemsPerPage = 3;
        }
        
        gap = "20px";
    }
    if(screenWidth < 750){
        elemsPerPage = 1;
        gap = `${screenWidth/2 - 150}px`;
        if(screenWidth < 300) {gap = "1px"}
        document.querySelector('.splide10').style.marginLeft = gap;
        document.querySelector('.splide10').style.marginRight = gap;
    }
    if(elemsPerPage > 4){
        elemsPerPage = 4;
    }
    
    new Splide( '.splide10',{
        perPage:  elemsPerPage,
        pagination:false,
        perMove:1,
        gap: gap,
        autoHeight: true,
       
    }).mount();
    const arrowPrev = document.querySelectorAll('.arrow-prev')[3];
    const arrowNext = document.querySelectorAll('.arrow-next')[3];
    const libArrowP = document.querySelectorAll('.splide__arrow--prev')[5];
    const libArrowN = document.querySelectorAll('.splide__arrow--next')[5];
    libArrowP.style.display = "none";
    libArrowN.style.display = "none";
    arrowNext.style.zIndex = 10;
    if(libArrowN.hasAttribute('disabled')){
        arrowNext.style.display = "none";
    } else {
        arrowNext.style.display = "inline";
    }
    if(libArrowP.hasAttribute('disabled')){
        arrowPrev.style.display = "none";
    } else {
        arrowPrev.style.display = "inline";
    }
    arrowNext.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowN.dispatchEvent(event);
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
    })
    arrowPrev.addEventListener('click',()=>{
        let event = new Event('click');
        libArrowP.dispatchEvent(event);
        if(libArrowP.hasAttribute('disabled')){
            arrowPrev.style.display = "none";
        } else {
            arrowPrev.style.display = "inline";
        }
        if(libArrowN.hasAttribute('disabled')){
            arrowNext.style.display = "none";
        } else {
            arrowNext.style.display = "inline";
        }
    })  
}

sliderBlock10();

const byRightNow = () =>{
    const elements = BUYING_RIGHT_NOW;
    const main = document.querySelector('.blocks');
    for(i = 0; i < elements.length && i < 4; i++){
        const div = document.createElement('div');
        div.setAttribute('class','block');
        const a = document.createElement('a');
        a.setAttribute('class','block-link');
        a.setAttribute('href',elements[i].url);
        const img = document.createElement('img');
        img.setAttribute('src',elements[i].img);
        img.setAttribute('alt','image');
        a.append(img);
        const p =  document.createElement('p');
        const b =  document.createElement('b');
        const A = document.createElement('a');
        A.setAttribute('href',elements[i].url);
        A.innerText = elements[i].title;
        b.append(A);
        p.append(b);
        a.append(p);
        div.append(a);
        main.append(div);
    }
    main.lastChild.setAttribute('class','block hidden') 
}

byRightNow();

const Basket = (elements,price,currency) =>{
    const mobBasket = document.querySelector('.top__right-basket--num');
    mobBasket.innerText = elements;
    const basket = document.querySelector('.top__right-name');
    basket.innerHTML = "";
    const span = document.createElement('span');
    span.innerText = "Корзина";
    basket.append(span);
    const br = document.createElement('br');
    basket.append(br);
    const a = document.createElement('a');
    a.setAttribute('href','#');
    a.innerText = elements;
    basket.append(a);
    const p = document.createElement('bdo');
    p.innerText = ` / ${price} ${currency}`;
    basket.append(p);
}

Basket(BASKET.elements,BASKET.price,CURRENCY);

const buying = (e) =>{
    if(e.target.price){
        BASKET.elements++;
        BASKET.price += parseInt(e.target.price);
        Basket(BASKET.elements,BASKET.price,CURRENCY);
    } 
}

const Buy = () =>{
    const buy = document.querySelectorAll('.slider__item-buy');
    for (let buyButton of buy) {
        buyButton.addEventListener('click', buying);
      }
   
}

Buy();