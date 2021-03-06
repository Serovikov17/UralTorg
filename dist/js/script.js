/* const { name } = require("browser-sync"); */

document.addEventListener("DOMContentLoaded", () => {
    
    // Click on the menu and footer links
    const menuLink = document.querySelectorAll('.menu__link'),
          footRefLink = document.querySelectorAll('.footer__references-link'),
          over = document.querySelector('.overlay'), 
          overInfoCont = document.querySelector('.overlay__infoCont'),
          overBasket = document.querySelector('.overlay__basket');
    // Main menu
    menuLink[0].addEventListener('click', () => {
        /* location.reload(); */
        categoriesItems.classList.add('active');
        categoriesChoice.classList.remove('active');

        divider[0].classList.remove('divider_choice');
        divider[1].classList.remove('divider_choice');
        itemPassenger.classList.remove('active');
        itemCargo.classList.remove('active');
        itemSpecial.classList.remove('active');
        itemAgricultural.classList.remove('active');
        itemMoto.classList.remove('active');
        
        promo.classList.remove('notActive');
        categories.classList.remove('notActive');
        catalog.classList.add('notActive');
        
        catalogTab[0].classList.remove('catalog__tab_active');
        catalogTab[0].classList.add('notActive');
        catalogTab[1].classList.remove('catalog__tab_active');
        catalogTab[1].classList.add('notActive');
        catalogTab[2].classList.remove('catalog__tab_active');
        

        catParPassenger.classList.add('notActive');
        tirePassenger.classList.add('catalog__parameters-tire_passenger-notActive');
        diskPassenger.classList.add('catalog__parameters-disk_passenger-notActive');
        carsPassenger.classList.add('catalog__parameters-cars_passenger-notActive');

        catParCargo.classList.add('notActive');
        tireCargo.classList.add('catalog__parameters-tire_cargo-notActive');
        diskCargo.classList.add('catalog__parameters-disk_cargo-notActive');
        carsCargo.classList.add('catalog__parameters-cars_cargo-notActive');

        catParSpecial.classList.add('notActive');
        tireSpecial.classList.add('catalog__parameters-tire_special-notActive');
        diskSpecial.classList.add('catalog__parameters-disk_special-notActive');
        carsSpecial.classList.add('catalog__parameters-cars_special-notActive');

        catParAgricultural.classList.add('notActive');
        tireAgricultural.classList.add('catalog__parameters-tire_agricultural-notActive');
        diskAgricultural.classList.add('catalog__parameters-disk_agricultural-notActive');
        carsAgricultural.classList.add('catalog__parameters-cars_agricultural-notActive');
        
        catParForest.classList.add('notActive');
        catalogTab[0].classList.remove('tireDisk__forestTire');
        catalogTab[2].classList.remove('notActive');
        tireForest.classList.add('catalog__parameters-tire_forestTire-notActive');
        
        catParMoto.classList.add('notActive');
        tireMoto.classList.add('catalog__parameters-tire_moto-notActive');
        diskMoto.classList.add('catalog__parameters-disk_moto-notActive');
        carsMoto.classList.add('catalog__parameters-cars_moto-notActive');
        
    });
        //menu -> categories
    menuLink[1].addEventListener('click', () => {
        menuLink[0].dispatchEvent(new Event('click'));
    });
        //menu -> information/contacts
    menuLink[2].addEventListener('click', () => {
        over.classList.remove('notActive');
        overInfoCont.classList.remove('overNotActive');
    });
        //menu -> basket
    menuLink[3].addEventListener('click', () => {
        over.classList.remove('notActive');
        overBasket.classList.remove('overNotActive');
    });
    // Main footer
    footRefLink[0].addEventListener('click', () => {
        /* location.reload(); */
        menuLink[0].dispatchEvent(new Event('click'));
    });
         //footer -> categories
    footRefLink[1].addEventListener('click', () => {
        
        menuLink[0].dispatchEvent(new Event('click'));
    });
        //footer -> information/contacts
    footRefLink[2].addEventListener('click', () => {
        over.classList.remove('notActive');
        overInfoCont.classList.remove('overNotActive');
    });
    

    // Working with categories, choosing tires or wheels
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
        // api.js -> typeTire
        window.tireType = '????????????????';
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

    // Go to the filter and the tire / disk catalog
    const promo = document.querySelector('.promo'),
          categories = document.querySelector('.categories'),
          catalog = document.querySelector('.catalog'),

          catItemPas = document.querySelectorAll('.categories__item_passenger'),
          catItemCargo = document.querySelectorAll('.categories__item_cargo'),
          catItemSpecial = document.querySelectorAll('.categories__item_special'),  
          catItemAgricultural = document.querySelectorAll('.categories__item_agricultural'),
          catItemMoto = document.querySelectorAll('.categories__item_moto'),
          catalogTab = document.querySelectorAll('.catalog__tab'),
          catParPassenger = document.querySelector('.catalog__parameters-passenger'),
          catParCargo = document.querySelector('.catalog__parameters-cargo'),
          catParSpecial = document.querySelector('.catalog__parameters-special'),
          catParAgricultural = document.querySelector('.catalog__parameters-agricultural'),
          catParForest= document.querySelector('.catalog__parameters-forestTire'),
          catParMoto = document.querySelector('.catalog__parameters-moto'),

          tirePassenger = document.querySelector('.tirePassenger'),
          diskPassenger = document.querySelector('.diskPassenger'),
          carsPassenger = document.querySelector('.carsPassenger'),
          tireCargo = document.querySelector('.tireCargo'),
          diskCargo = document.querySelector('.diskCargo'),
          carsCargo = document.querySelector('.carsCargo'),
          tireSpecial = document.querySelector('.tireSpecial'),
          diskSpecial = document.querySelector('.diskSpecial'),
          carsSpecial = document.querySelector('.carsSpecial'),
          tireAgricultural = document.querySelector('.tireAgricultural'),
          diskAgricultural = document.querySelector('.diskAgricultural'),
          carsAgricultural = document.querySelector('.carsAgricultural'),
          tireForest = document.querySelector('.tireForest'),
          tireMoto = document.querySelector('.tireMoto'),
          diskMoto = document.querySelector('.diskMoto'),
          carsMoto = document.querySelector('.carsMoto');
    
    // Selection of tires / wheels
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
        catalogTab[1].classList.add('catalog__tab_active');
        catalogTab[1].classList.remove('notActive');
    }

    function closeTireDiskCars () {
        catalogTab[0].classList.remove('catalog__tab_active');
        catalogTab[1].classList.remove('catalog__tab_active');
        catalogTab[2].classList.remove('catalog__tab_active');   
    }

    function openTireCatalog(catPar, product, classProduct) {
        closeMainClickTire();
        catPar.classList.remove('notActive');
        product.classList.remove(classProduct);
    }

    function openDiskCatalog(catPar, product, classProduct) {
        closeMainClickDisk();
        catPar.classList.remove('notActive');
        product.classList.remove(classProduct);
    }

    catItemPas[0].addEventListener('click', () => {
        openTireCatalog(catParPassenger, tirePassenger, 'catalog__parameters-tire_passenger-notActive');
    })
    catItemPas[1].addEventListener('click', () => {
        openDiskCatalog(catParPassenger, diskPassenger, 'catalog__parameters-disk_passenger-notActive');
    })

    catItemCargo[0].addEventListener('click', () => {
        openTireCatalog(catParCargo, tireCargo, 'catalog__parameters-tire_cargo-notActive');
    })
    catItemCargo[1].addEventListener('click', () => {
        openDiskCatalog(catParCargo, diskCargo, 'catalog__parameters-disk_cargo-notActive');
    })
    
    catItemSpecial[0].addEventListener('click', () => {
        openTireCatalog(catParSpecial, tireSpecial, 'catalog__parameters-tire_special-notActive');
    })
    catItemSpecial[1].addEventListener('click', () => {
        openDiskCatalog(catParSpecial, diskSpecial, 'catalog__parameters-disk_special-notActive');
    })

    catItemAgricultural[0].addEventListener('click', () => {
        openTireCatalog(catParAgricultural, tireAgricultural, 'catalog__parameters-tire_agricultural-notActive');
    })
    catItemAgricultural[1].addEventListener('click', () => {
        openDiskCatalog(catParAgricultural, diskAgricultural, 'catalog__parameters-disk_agricultural-notActive');
    })
    
    forestTire.addEventListener('click', () => {
            closeMainClickTire();
            catalogTab[0].classList.add('tireDisk__forestTire');
            catalogTab[2].classList.add('notActive');
            catParForest.classList.remove('notActive');
            tireForest.classList.remove('catalog__parameters-tire_forestTire-notActive');
        })

    catItemMoto[0].addEventListener('click', () => {
        openTireCatalog(catParMoto, tireMoto, 'catalog__parameters-tire_moto-notActive');
    })
    catItemMoto[1].addEventListener('click', () => {
        openDiskCatalog(catParMoto, diskMoto, 'catalog__parameters-disk_moto-notActive');
    })

    // Selection by Tire/Disk/Car
    catalogTab[0].addEventListener('click', () => {
        closeTireDiskCars ();
        catalogTab[0].classList.add('catalog__tab_active');
        if (!(catParPassenger.classList.contains('notActive'))) {
            tirePassenger.classList.remove('catalog__parameters-tire_passenger-notActive');
            diskPassenger.classList.add('catalog__parameters-disk_passenger-notActive');
            carsPassenger.classList.add('catalog__parameters-cars_passenger-notActive');
        } else if (!(catParCargo.classList.contains('notActive'))) {
            tireCargo.classList.remove('catalog__parameters-tire_cargo-notActive');
            diskCargo.classList.add('catalog__parameters-disk_cargo-notActive');
            carsCargo.classList.add('catalog__parameters-cars_cargo-notActive');
        }
        else if (!(catParSpecial.classList.contains('notActive'))) {
            tireSpecial.classList.remove('catalog__parameters-tire_special-notActive');
            diskSpecial.classList.add('catalog__parameters-disk_special-notActive');
            carsSpecial.classList.add('catalog__parameters-cars_special-notActive');
        }
        else if (!(catParAgricultural.classList.contains('notActive'))) {
            tireAgricultural.classList.remove('catalog__parameters-tire_agricultural-notActive');
            diskAgricultural.classList.add('catalog__parameters-disk_agricultural-notActive');
            carsAgricultural.classList.add('catalog__parameters-cars_agricultural-notActive');
        }
        else if (!(catParMoto.classList.contains('notActive'))) {
            tireMoto.classList.remove('catalog__parameters-tire_moto-notActive');
            diskMoto.classList.add('catalog__parameters-disk_moto-notActive');
            carsMoto.classList.add('catalog__parameters-cars_moto-notActive');
        }
    })

    catalogTab[1].addEventListener('click', () => {
        closeTireDiskCars ();
        catalogTab[1].classList.add('catalog__tab_active');
        if (!(catParPassenger.classList.contains('notActive'))) {
            tirePassenger.classList.add('catalog__parameters-tire_passenger-notActive');
            diskPassenger.classList.remove('catalog__parameters-disk_passenger-notActive');
            carsPassenger.classList.add('catalog__parameters-cars_passenger-notActive');
        } else if (!(catParCargo.classList.contains('notActive'))) {
            tireCargo.classList.add('catalog__parameters-tire_cargo-notActive');
            diskCargo.classList.remove('catalog__parameters-disk_cargo-notActive');
            carsCargo.classList.add('catalog__parameters-cars_cargo-notActive');
        }
        else if (!(catParSpecial.classList.contains('notActive'))) {
            tireSpecial.classList.add('catalog__parameters-tire_special-notActive');
            diskSpecial.classList.remove('catalog__parameters-disk_special-notActive');
            carsSpecial.classList.add('catalog__parameters-cars_special-notActive');
        }
        else if (!(catParAgricultural.classList.contains('notActive'))) {
            tireAgricultural.classList.add('catalog__parameters-tire_agricultural-notActive');
            diskAgricultural.classList.remove('catalog__parameters-disk_agricultural-notActive');
            carsAgricultural.classList.add('catalog__parameters-cars_agricultural-notActive');
        }
        else if (!(catParMoto.classList.contains('notActive'))) {
            tireMoto.classList.add('catalog__parameters-tire_moto-notActive');
            diskMoto.classList.remove('catalog__parameters-disk_moto-notActive');
            carsMoto.classList.add('catalog__parameters-cars_moto-notActive');
        }
    })


    catalogTab[2].addEventListener('click', () => {
        closeTireDiskCars ();
        catalogTab[2].classList.add('catalog__tab_active');
        if (!(catParPassenger.classList.contains('notActive'))) {
            tirePassenger.classList.add('catalog__parameters-tire_passenger-notActive');
            diskPassenger.classList.add('catalog__parameters-disk_passenger-notActive');
            carsPassenger.classList.remove('catalog__parameters-cars_passenger-notActive');
        } else if (!(catParCargo.classList.contains('notActive'))) {
            tireCargo.classList.add('catalog__parameters-tire_cargo-notActive');
            diskCargo.classList.add('catalog__parameters-disk_cargo-notActive');
            carsCargo.classList.remove('catalog__parameters-cars_cargo-notActive');
        }
        else if (!(catParSpecial.classList.contains('notActive'))) {
            tireSpecial.classList.add('catalog__parameters-tire_special-notActive');
            diskSpecial.classList.add('catalog__parameters-disk_special-notActive');
            carsSpecial.classList.remove('catalog__parameters-cars_special-notActive');
        }
        else if (!(catParAgricultural.classList.contains('notActive'))) {
            tireAgricultural.classList.add('catalog__parameters-tire_agricultural-notActive');
            diskAgricultural.classList.add('catalog__parameters-disk_agricultural-notActive');
            carsAgricultural.classList.remove('catalog__parameters-cars_agricultural-notActive');
        }
        else if (!(catParMoto.classList.contains('notActive'))) {
            tireMoto.classList.add('catalog__parameters-tire_moto-notActive');
            diskMoto.classList.add('catalog__parameters-disk_moto-notActive');
            carsMoto.classList.remove('catalog__parameters-cars_moto-notActive');
        }
    })

    

    // Window overlay
    const overlay = document.querySelector('.overlay'),
          overlayClose = document.querySelector('.overlay__close'),
          overlayTire = document.querySelector('.overlay__tire'),
          overlayInfoCont = document.querySelector('.overlay__infoCont'),
          overlayBasket = document.querySelector('.overlay__basket');
          

    overlayClose.addEventListener('click', () => {
        overlay.classList.add('notActive');
        overlayTire.classList.add('overNotActive');
        overlayInfoCont.classList.add('overNotActive');
        overlayBasket.classList.add('overNotActive');
    })

});
