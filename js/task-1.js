const itemRefs = document.querySelector('.item');
const btnRef = document.querySelector('.btn');
const listRef = document.querySelector('.list');

listRef.addEventListener('click', addText);



btnRef.addEventListener('click', function (e) {
    const item = ' <li class="item"></li>' ;

    listRef.insertAdjacentHTML('beforeend', item);
});

function addText(event){

    if(event.target !== event.currentTarget){
        event.target.innerHTML = event.target.innerHTML + '!';
    }
    

}