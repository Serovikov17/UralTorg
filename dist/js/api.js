function init() {
  $.post(
    "api/request_activation.php",
    {
      "action" : "init"
    },
    showGoods
  );
}

function upload() {
  $.post(
    "api/request_activation.php",
    {
      "discharge" : "upload"
    },
    discharge
  );
}

let arrTire = '';
function showGoods(data) {
  arrTire = JSON.parse(data);
  arrTire = Object.values(arrTire);
  
  selectACategoryTire(arrTire);  
}

let uploadTire = '';
function discharge(data) {
  uploadTire = JSON.parse(data);
  uploadTire = Object.values(uploadTire);
  uploadTire = [].concat(...uploadTire);
  
  selectionTireWarehouse(uploadTire);
}

let typeTire = '';
let cattire = '';
function selectACategoryTire(data) {
  let arrTire0 = data;
  $('#cattirepas').on('click', () => {
    arrTire = arrTire0;
    typeTire = 'Легковая';
    arrTire = arrTire.filter(t => t.tiretype == typeTire);
    cattire = 'passenger';
    createACatalog(arrTire, cattire); 
  });
  
  $('#cattirecargo').on('click', () => {
    arrTire = arrTire0;
    typeTire = 'Грузовая';
    arrTire = arrTire.filter(t => t.tiretype == typeTire);
    cattire = 'cargo';
    filterTire(arrTire, cattire);
  });

  $('#cattirespec').on('click', () => {
    arrTire = arrTire0;
    typeTire = 'Спецшина';
    arrTire = arrTire.filter(t => t.tiretype == typeTire);
    cattire = 'special';
    filterTire(arrTire, cattire);
  });

  $('#cattireagri').on('click', () => {
    arrTire = arrTire0;
    typeTire = 'Сельхозшина';
    arrTire = arrTire.filter(t => t.tiretype == typeTire);
    cattire = 'agricultural';
    filterTire(arrTire, cattire);
  });

  $('#forestTire').on('click', () => {
    arrTire = arrTire0;
    typeTire = 'Леснаяшина';
    arrTire = arrTire.filter(t => t.tiretype == typeTire);
    cattire = 'forest';
    filterTire(arrTire, cattire);
  });
  
  $('#cattiremoto').on('click', () => { 
    arrTire = arrTire0;  
    typeTire = 'Мотошина';
    arrTire = arrTire.filter(t => t.tiretype == typeTire);
    cattire = 'moto';
    filterTire(arrTire, cattire); 
  });
}

let scr = '';
let end = 52;

function createACatalog(data, nameCat) {
  arrTire = data;
  
  filterTire(arrTire, nameCat);
  let arrTire1 = arrTire;  
  
  scr = document.documentElement.scrollTop = 0;
  createAСard(arrTire, end);
  
  window.onscroll = function() {
    if  ($(window).scrollTop() >= $('.catalog__items').height() - $(window).height())  
     {
      arrTire = arrTire1;
      end = end + 52;
      createAСard(arrTire, end);
      $('.catalog__items-product').on('click', function(event){
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        let prodId = this.id; 
        createAСardTire (data, nameCat, prodId);        
      });
     }
  }; 
  
  $('.catalog__parameters-selection').on('click', () => {
    createACatalog(data, nameCat);  
  });
  
  $('.catalog__items-product').on('click', function(event){
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    let prodId = this.id; 
    createAСardTire (data, nameCat, prodId);        
  });
   
}
   
let widthTire = '',
    heightTire = 'Все',
    diameterTire = 'Все',
    seasonTire = '',
    is_studdedTire = '',
    brandTire = 'Все';
  
function filterTire(data, nameCat) {
  arrTire = data;
  
  widthTire = $(`.${nameCat}TireWidth`).val();
  heightTire = $(`.${nameCat}TireHeight`).val();
  diameterTire = $(`.${nameCat}TireDiameter`).val();
  seasonTire = $(`.${nameCat}TireSeason`).val();
  is_studdedTire = $(`.${nameCat}TireIs_studded`).val();
  brandTire = $(`.${nameCat}TireBrand`).val();

  if (widthTire == 'Все' || widthTire == '') {
    arrTire;
  } else {
    arrTire = arrTire.filter(w => w.width == `${widthTire}${'.00'}`);
  }
        
  if (heightTire == 'Все' || heightTire == '') {
    arrTire;
  } else {
    arrTire = arrTire.filter(h => h.height == `${heightTire}${'.00'}`);
  }
        
  if (diameterTire == 'Все' || diameterTire == '') {
    arrTire;
  } else {
    arrTire = arrTire.filter(d => d.diameter == `${diameterTire}${'.00'}`);
  }
          
  if (seasonTire == '' || seasonTire == 'Все') {
    arrTire;
  } else {
    arrTire = arrTire.filter(s => s.season == seasonTire);
  }
          
  if (is_studdedTire == '' || is_studdedTire == 'Все') {
    arrTire;
  } else {
    arrTire = arrTire.filter(is => is.is_studded == is_studdedTire);
  }
        
  if (brandTire == 'Все' || brandTire == '') {
    arrTire;    
  } else {    
    arrTire = arrTire.filter(is => is.brand == brandTire);
  }
}  

function createAСard (data, end) {
  arrTire = data;
  arrTire = arrTire.slice(0 , end);
  $('.catalog__items').html(arrTire.map(key => 
    `<a class="catalog__items-product" id=${key.id}>
      <img src="img/tire/passenger/Aqua_Race_Plus.jpg" alt="" class="catalog__items-product-img">
      <span class="catalog__items-product-model">${key.brand} ${key.model} ${key.width.replace(/[,.]?0+$/, '')}/${key.height.replace(/[,.]?0+$/, '')} ${key.diameter.replace(/[,.]?0+$/, '')} ${key.load_index}${key.speed_index} </span>
      <div class="catalog__items-product-price">
        от 
        <span>${key.price}</span>
      </div>
    </a>`
  ));   
}

// Подгрузка склады
function selectionTireWarehouse(uploadTire) {
  return uploadTire;
}


function createAСardTire (data, nameCat, prodId) {
  arrTire = data;

  // Вывод катеригерии на руском 
  let arrCatTire = [{type:'passenger', name: 'Легковая'},
                {type:'cargo', name: 'Грузовая'},
                {type:'special', name: 'Спец'},
                {type:'agricultural', name: 'Сельхоз'},
                {type:'forest', name: 'Лесная'},
                {type:'moto', name: 'Мото'}];
  
  let catTire = arrCatTire.find(item => item.type == nameCat);
  catTire = catTire.name;

  //Выбор резины из массива 
  let objTire = arrTire.find(item => item.id == prodId);
    
  // Вывод окна overlay
  $('.overlay').removeClass('notActive');
  $('.overlay__tire').removeClass('overNotActive');  
  
  // Вставка параметров резины в окно overlay
  $('.overlay__tire-specifications').html( 
    `<img src="img/tire/passenger/Aqua_Race_Plus.jpg" alt="" class="overlay__tire-specifications-img">
    <h2 class="overlay__tire-specifications-title">${catTire} шина <span>${objTire.brand} ${objTire.name}</span></h2> 
    <ul class="overlay__tire-specifications-parameters">
      <li class="">Наименование: <span>${objTire.brand} ${objTire.model}</span></li>
      <li class="">Посадочный диаметр: <span>${objTire.diameter.replace(/[,.]?0+$/, '')}</span></li>
      <li class="">Ширина профиля: <span>${objTire.width.replace(/[,.]?0+$/, '')}</span></li>
      <li class="">Высота профиля: <span>${objTire.height.replace(/[,.]?0+$/, '')}</span></li>
      <li class="">Индекс нагрузки: <span>${objTire.load_index}</span></li>
      <li class="">Сезон: <span>${objTire.season}</span></li>
      <li class="">Наличие шипов: <span>${objTire.is_studded}</span></li>
      <li class="">Индекс скорости: <span>${objTire.speed_index}</span></li>
    </ul>`
  );
  
  // Очистка списка "склад"
  $('.overlay__tire-acquisition-background').remove();

  //Проверка резины по файлу остатков
  let upTire = selectionTireWarehouse(uploadTire);
  let warehouses = upTire.find(item => item.cae == objTire.cae);
  


  //Проверка наличия на складах
  if (warehouses != undefined) {
    /* $('.overlay__tire-acquisition-title').css({display: 'none'}); */
    $('.overlay__tire-acquisition-title').hide();
  } else {
    $('.overlay__tire-acquisition-title').show();
  }

  for (let key in warehouses) {
    if (warehouses[key] == 0) {
      delete warehouses[key]; 
    }
  }
  
  
  //Вывод имени склада и передача в тег "overlay__tire-acquisition"
  let warehousesName = {
    rest_SKLAD12: "Склад 12",
    rest_chelyab: "Склад Челябинск",
    rest_ekb2: "Склад Екатеринбур",
    rest_mkrs: "Склад Москва",
    rest_novosib2: "Склад Новосибирск",
    rest_sk2: "Склад 2",
    rest_sk3: "Склад 3",
    rest_sk4: "Склад 4",
    rest_sk10: "Склад 10",
    rest_tyumen: "Склад Тюмень",
    rest_yamka: "Склад Ямка"
  }
  
  
  // Вставка параметров склада в окно overlay
  for (let key in warehouses) {
    for (let keyName in warehousesName) {
      if (key == keyName) {
        $('.overlay__tire-acquisition').append( 
          `<div  class="overlay__tire-acquisition-background">
            <div class="overlay__tire-acquisition-img">
              <img src="icons/categories/tires.svg" alt="">
            </div>
            <div class="overlay__tire-acquisition-warehouse">
              <h3 class="">Склад</h3>
              <span  class="overlay__tire-acquisition-warehouse-name">${warehousesName[keyName]}</span>
            </div>
            <div class="overlay__tire-acquisition-availability">
              <h3>В наличии (шт)</h3>
              <span class="overlay__tire-acquisition-availability-digit">${warehouses[key]}</span>
            </div>
            <div class="overlay__tire-acquisition-price">
              <h3>Цена руб/шт</h3>
              <span class="verlay__tire-acquisition-price-digit">3800</span>
            </div>
            <div name=${key} class="overlay__tire-acquisition-quantity">
              <h3>Количество</h3>
              <input type="number" value="1" min="1">
            </div>
            <div name=${key} class="overlay__tire-acquisition-basket">
              <button class="btn">Добавить в корзину</button>
            </div>
          </div>`
        );
      }  
    } 
  }

  

  
  
  //Передача данных в корзину
  $('.overlay__tire-acquisition-basket').on('click', function(event) {
    let btnNameWarehouses = $(this).attr('name'),
        quantityTire = $(`.overlay__tire-acquisition-quantity[name=${btnNameWarehouses}] input`).val();

    basket(objTire.brand, objTire.name, quantityTire, btnNameWarehouses);
  });

}

// Корзина
function basket(brand, name, quantity, nameWarehouses) {
  console.log(brand);
  console.log(name);
  console.log(quantity);
  console.log(nameWarehouses);
}

//
function delACard() {
  $('.catalog__items-item-product').remove();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  upload();
});
