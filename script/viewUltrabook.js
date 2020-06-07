function ViewUltrabook() {}

ViewUltrabook.prototype.addUltrabook = function (obj) {
    var block = document.querySelector("#list-laptops");
    var ulList = document.createElement("ul");

    ulList.innerHTML = "<li>" + obj.title + "</li>" +
    "<li>" +obj.cpu + "</li>" +
    "<li>" + obj.ram + "</li>" +
    "<li>" + obj.cores + "</li>" +
    '<li class="delete"><button>Удалить</button></li>' +
    '<li class="info"><button>Общая информация</button></li>';

    block.appendChild(ulList);
};

ViewUltrabook.prototype.deleteUltrabook = function (){
    var del = document.getElementsByClassName("delete");
    for (let d of del) {
        d.addEventListener("click", function (){
            d.parentElement.remove();
            event.preventDefault();
        });
    }
};

ViewUltrabook.prototype.info = function(obj){
    var modal = document.querySelector('#myModal');
    var btnInfo = document.getElementsByClassName('info');
    var span = document.getElementsByClassName('close')[0];
    var modalContent = document.querySelector(".modal_content");
    var divInfo = document.createElement("div");

    for (let info of btnInfo) {
        info.addEventListener('click', function(){
            modal.style.display = 'block';
    
            divInfo.innerHTML = '<p>Год выпуска: ' + obj.year + '</p>' + '\n' +
            '<p>Вес ультрабука: ' + obj.weight + '</p>' + '\n' +
            '<p>Цвет корпуса: ' + obj.bodyColor + '</p>' + '\n';
            
            
            modalContent.appendChild(divInfo);
        });
    
        span.addEventListener('click', function(){
            modal.style.display = 'none';
            divInfo.remove();
        });
    
        window.addEventListener('click', function(event){
            if (event.target == modal){
                modal.style.display = 'none';
                divInfo.remove();
            }
        });
    }
};

ViewUltrabook.prototype.getMessage = function (message, nameCl) {
    var wrap = document.querySelector(".wrapper");
    var form = document.querySelector(".forms");

    var infoBlok = document.createElement("div");
    infoBlok.className = nameCl;
    infoBlok.innerText = message;

    wrap.insertBefore(infoBlok, form);
};

/* 
ViewUltrabook.prototype.massCheck = function(obj){
    var viewUltrabook = new ViewUltrabook();
    if (obj.weight >= 1.5){
        viewUltrabook.getMessage('Вес ультрабука не должен превышать 1.5 кг', 'no_success');
        setTimeout(() => document.querySelector(".no_success").remove(), 5000);
    }
} */

ViewUltrabook.prototype.clearInput = function () {
    document.querySelector("#title_u").value = "";
    document.querySelector("#year_u").value = "";
    document.querySelector("#cpu_u").value = "";
    document.querySelector("#ram_u").value = "";
    document.querySelector("#core_u").value = "";
    document.querySelector("#bodyColor_u").value = "";
    document.querySelector("#weight_u").value = "";
};
