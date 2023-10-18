const btn = document.querySelector('.js-test-btn');


const windowHeight = document.documentElement.clientHeight; 
const windowWidth = document.documentElement.clientWidth;

let scrollHeight = Math.max(

    document.body.scrollHeight, document.documentElement.scrollHeight,
    
    document.body.offsetHeight, document.documentElement.offsetHeight,
    
    document.body.clientHeight, document.documentElement.clientHeight);

let scrollWidth = Math.max(

    document.body.scrollWidth, document.documentElement.scrollWidth,
        
    document.body.offsetWidth, document.documentElement.offsetWidth,
        
    document.body.clientWidth, document.documentElement.clientWidth);

btn.addEventListener('click', () => {
    alert(`Размер окна ${windowHeight}px X ${windowWidth}px.
Размер документа ${scrollHeight}px X ${scrollWidth}px.`
    )
})