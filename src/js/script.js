document.addEventListener("DOMContentLoaded", () => {

    const categoriesItems = document.querySelector('.categories__items'),

          passenger = document.querySelector('#passenger'),
          cargoTruck = document.querySelector('#cargoTruck'),
          specialEquipment = document.querySelector('#specialEquipment'),
          agriMachinery = document.querySelector('#agriculturalMachinery'),
          forestTire = document.querySelector('#forestTire'),
          moto = document.querySelector('#moto'),

          categoriesChoice = document.querySelector('.categories__items-choice'),
          itemPassenger = document.querySelector('.categories__item-passenger'),
          itemCargo = document.querySelector('.categories__item-cargo'),
          itemSpecial = document.querySelector('.categories__item-special'),
          itemAgricultural = document.querySelector('.categories__item-agricultural'),
          itemMoto = document.querySelector('.categories__item-moto'),

          divider = document.querySelectorAll('.divider');
          
    function closeCategories () {
        categoriesItems.classList.remove('active');
        categoriesChoice.classList.add('active');
        divider[0].classList.add('divider_choice');
        divider[1].classList.add('divider_choice');
    }

    passenger.addEventListener('click', () => {
        closeCategories();
        itemPassenger.classList.add('active');
    });

    cargoTruck.addEventListener('click', () => {
        closeCategories();
        itemCargo.classList.add('active');
    });

    specialEquipment.addEventListener('click', () => {
        closeCategories();
        itemSpecial.classList.add('active');
    })

    agriMachinery.addEventListener('click', () => {
        closeCategories();
        itemAgricultural.classList.add('active');
    })

    moto.addEventListener('click', () => {
        closeCategories();
        itemMoto.classList.add('active');
    })

    const promo = document.querySelector('.promo'),
          categories = document.querySelector('.categories'),
          catalog = document.querySelector('.catalog'),

          catItemPas = document.querySelectorAll('.categories__item_passenger'),
          catItemCargo = document.querySelectorAll('.categories__item_cargo'),
          catalogTab = document.querySelectorAll('.catalog__tab'),

          tirePassenger = document.querySelector('.catalog__parameters-tire_passenger-notActive'),
          diskPassenger = document.querySelector('.catalog__parameters-disk_passenger-notActive'),
          tireCargo = document.querySelector('.catalog__parameters-tire_cargo-notActive'),
          diskCargo = document.querySelector('.catalog__parameters-disk_cargo-notActive');
    
    function closeMainClickTire () {
        promo.classList.add('notActive');
        categories.classList.add('notActive');
        catalog.classList.remove('notActive');
        catalogTab[0].classList.add('catalog__tab_active');
        catalogTab[0].classList.remove('notActive');
    }

    function closeMainClickDisk () {
        promo.classList.add('notActive');
        categories.classList.add('notActive');
        catalog.classList.remove('notActive');
        catalogTab[0].classList.add('catalog__tab_active');
        catalogTab[0].classList.remove('notActive');
    }

    catItemPas[0].addEventListener('click', () => {
        closeMainClickTire();
        tirePassenger.classList.remove('catalog__parameters-tire_passenger-notActive');
    })

    catItemPas[1].addEventListener('click', () => {
        closeMainClickDisk();
        diskPassenger.classList.remove('catalog__parameters-disk_passenger-notActive');
    })

    catItemCargo[0].addEventListener('click', () => {
        closeMainClickTire();
        tireCargo.classList.remove('catalog__parameters-tire_cargo-notActive');
    })

    catItemCargo[1].addEventListener('click', () => {
        closeMainClickDisk();
        diskCargo.classList.remove('catalog__parameters-disk_cargo-notActive');
    })
});
