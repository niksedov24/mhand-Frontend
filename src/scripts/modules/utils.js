export function utils() {
    let burger = document.querySelector('.header-section__info-block__item__burger-logo__burger');
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let insert = document.createElement('div');
    const footerContainers = document.querySelectorAll('.footer-section__info-block__menu__item');
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
    footerContainers.forEach(container => {
        const button = container.querySelector('.footer-section__info-block__menu__item__title');
        const list = container.querySelector('.footer__ul');
     
        button.addEventListener('click', function() {
            list.classList.toggle('open');
            button.classList.toggle('active');
        });
     });
   
}
