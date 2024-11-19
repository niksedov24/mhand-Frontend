export function utils() {
    let burger = document.querySelector('.header-section__info-block__item__burger-logo__burger');
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let insert = document.createElement('div');
    insert.className = "insert";
    body.prepend(insert)
    burger.addEventListener('click', function(event){
        body.classList.toggle('open-menu')
        insert.classList.toggle('active');
        // if (body.className == 'open-menu') {
        //     body.style.paddingTop = header.offsetHeight + "px";
        // } else{
        //     body.style.paddingTop = 0;
        // }
    })
    insert.addEventListener('click', function(event){
        body.classList.remove('open-menu');
        event.target.classList.remove('active');
        
    })
}
