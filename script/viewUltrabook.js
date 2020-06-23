function ViewUltrabook() {}

// отображение информации добавленного ультрабука
ViewUltrabook.prototype.addUltrabook = function (arrDevice) {
    let block = document.querySelector(".head_title");
    let ulList = document.createElement("ul");

    for(let i = 0; i < arrDevice.length; i++){
        ulList.innerHTML = "<li>" + arrDevice[i].title + "</li>" +
        "<li>" + arrDevice[i].cpu + "</li>" +
        "<li>" + arrDevice[i].ram + "</li>" +
        "<li>" + arrDevice[i].cores + "</li>" +
        `<li class="delete" id="remove${i}"><button>Удалить</button></li>
        <li class="info" id="info${i}"><button>Доп. информация</button></li>`;
    }

    block.after(ulList);

    let removeUltra;
    let infoUltra;
    let xUltra;

    for(let i = 0; i < arrDevice.length; i++){
        removeUltra = `remove${i}`;
        infoUltra = `info${i}`;
        xUltra = i;
    }
    
    // вешаю обработчики на кнопки удалить/общая информация
    document.getElementById(removeUltra).addEventListener('click', function(){
        viewUltrabook.deleteUltrabook(xUltra, arrDevice);
    });

    document.getElementById(infoUltra).addEventListener('click', function(){
        viewUltrabook.info(xUltra);
    });
};

/* удалить ультрабук из списка */
ViewUltrabook.prototype.deleteUltrabook = function (i, arrDevice){
    let del = document.getElementById(`remove${i}`);
    del.parentElement.remove();

    arrDevice.splice(i, 1);
    localStorage.setItem('saveArrDevice', JSON.stringify(arrDevice)); // сохроняю изменения массива в localStorage
};

/* Общая информация о ультрабуке */
ViewUltrabook.prototype.info = function(i){
    let modal = document.querySelector('#myModal');
    let span = document.getElementsByClassName('close')[0];
    let modalContent = document.querySelector(".modal_content");
    let divInfo = document.createElement("div");

    modal.style.display = 'block';

    divInfo.innerHTML = 
    '<p>Год выпуска: ' + arrDevice[i].year + '</p>' + '\n' +
    '<p>Вес ультрабука: ' + arrDevice[i].weight + '</p>' + '\n' +
    '<p>Цвет корпуса: ' + arrDevice[i].bodyColor + '</p>' + '\n';
            
    modalContent.appendChild(divInfo);

    // удалить модальное окно при нажатии на крестик
    span.addEventListener('click', function(){
        modal.style.display = 'none';
        divInfo.remove();
    });

    // удалить модальное окно при нажатии вне модального окна
    window.addEventListener('click', function(event){
        if (event.target == modal){
            modal.style.display = 'none';
            divInfo.remove();
        }
    });
};

// успех добавления или нет
ViewUltrabook.prototype.getMessage = function (message, nameCl) {
    let wrap = document.querySelector(".wrapper");
    let form = document.querySelector(".forms");

    let infoBlok = document.createElement("div");
    infoBlok.className = nameCl;
    infoBlok.innerText = message;

    wrap.insertBefore(infoBlok, form);
};

// очистка input
ViewUltrabook.prototype.clearInput = function () {
    document.querySelector("#title_u").value = "";
    document.querySelector("#year_u").value = "";
    document.querySelector("#cpu_u").value = "";
    document.querySelector("#ram_u").value = "";
    document.querySelector("#core_u").value = "";
    document.querySelector("#bodyColor_u").value = "";
    document.querySelector("#weight_u").value = "";
};
