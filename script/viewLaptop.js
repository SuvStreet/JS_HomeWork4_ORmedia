function ViewLaptop() {}

// отображение информации добавленного ноутбука
ViewLaptop.prototype.addLaptop = function(arrDevice) {
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

    let removeLaptop;
    let infoLaptop;
    let xLaptop;

    for(let i = 0; i < arrDevice.length; i++){
        removeLaptop = `remove${i}`;
        infoLaptop = `info${i}`;
        xLaptop = i;
    }
    
    // вешаю обработчики на кнопки удалить/общая информация
    document.getElementById(removeLaptop).addEventListener('click', function(){
        viewLaptop.deleteLaptop(xLaptop, arrDevice);
    });

    document.getElementById(infoLaptop).addEventListener('click', function(){
        viewLaptop.info(xLaptop);
    });
};

/* удалить ноут из списка */
ViewLaptop.prototype.deleteLaptop = function (i, arrDevice){
    let del = document.getElementById(`remove${i}`);
    del.parentElement.remove();

    arrDevice.splice(i, 1);
    localStorage.setItem('saveArrDevice', JSON.stringify(arrDevice)); // сохроняю изменения массива в localStorage
};

/* Общая информация о ноуте */
ViewLaptop.prototype.info = function(i){
    let modal = document.querySelector('#myModal');
    let span = document.getElementsByClassName('close')[0];
    let modalContent = document.querySelector(".modal_content");
    let divInfo = document.createElement("div");

    modal.style.display = 'block';

    divInfo.innerHTML = 
    '<p>Год выпуска: ' + arrDevice[i].year + '</p>' + '\n' + 
    '<p>Вес ноутбука: ' + arrDevice[i].weight + '</p>' + '\n' +
    '<p>Материал корпуса: ' + arrDevice[i].caseMaterial + '</p>' + '\n';

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
ViewLaptop.prototype.getMessage = function (message, nameCl) {
    let wrap = document.querySelector(".wrapper");
    let form = document.querySelector(".forms");

    let infoBlok = document.createElement("div");
    infoBlok.className = nameCl;
    infoBlok.innerText = message;

    wrap.insertBefore(infoBlok, form);
};

// очистка input
ViewLaptop.prototype.clearInput = function () {
    document.querySelector("#title_l").value = "";
    document.querySelector("#year_l").value = "";
    document.querySelector("#cpu_l").value = "";
    document.querySelector("#ram_l").value = "";
    document.querySelector("#core_l").value = "";
    document.querySelector("#caseMaterial_l").value = "";
    document.querySelector("#weight_l").value = "";
};
