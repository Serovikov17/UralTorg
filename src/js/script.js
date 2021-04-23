document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelector('.categories__items'),
          passenger = document.querySelector('#passenger'),
          choice = document.querySelector('.categories__items-choice'),
          divider = document.querySelectorAll('.divider');
     
    passenger.addEventListener('click', () => {
        items.classList.remove('active');
        choice.classList.add('active');
        divider[0].classList.add('divider_choice');
        divider[1].classList.add('divider_choice');
    });

        

    
});
