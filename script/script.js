document.querySelector('#laptop').addEventListener('submit', function(event){
    var title = document.querySelector('#title_l').value;
    var year = document.querySelector('#year_l').value;
    var cpu = document.querySelector('#cpu_l').value;
    var ram = document.querySelector('#ram_l').value;
    var core = document.querySelector('#core_l').value;
    var caseMaterial = document.querySelector('#caseMaterial_l').value;
    var weight = document.querySelector('#weight_l').value;

    var laptop = new Laptop(title, year, cpu, ram, core, caseMaterial, weight);
    var viewLaptop = new ViewLaptop();

    if(title === '' || year === '' || cpu === '' || ram === '' 
    || core === '' || caseMaterial === '' || weight === ''){
        viewLaptop.getMessage('Ошибка! Заполните все поля!', 'no_success');
        setTimeout(() => document.querySelector(".no_success").remove(), 2000);
    }
    else{
        if (weight > 3){
            viewLaptop.getMessage('Вес ноутбука не должен превышать 3 кг', 'no_success');
            setTimeout(() => document.querySelector(".no_success").remove(), 5000);
        }
        else {
            viewLaptop.addLaptop(laptop);
            viewLaptop.getMessage('Ура! Добавили новый ноут!', 'success');
            setTimeout(() => document.querySelector(".success").remove(), 2000);
            viewLaptop.clearInput();
            viewLaptop.info(laptop);
        }
    };

    viewLaptop.deleteLaptop();
    /* viewLaptop.info(laptop); */
    event.preventDefault();
});

document.querySelector('#ultrabook').addEventListener('submit', function(event){
    var title = document.querySelector('#title_u').value;
    var year = document.querySelector('#year_u').value;
    var cpu = document.querySelector('#cpu_u').value;
    var ram = document.querySelector('#ram_u').value;
    var core = document.querySelector('#core_u').value;
    var bodyColor = document.querySelector('#bodyColor_u').value;
    var weight = document.querySelector('#weight_u').value;

    var ultrabook = new Ultrabook(title, year, cpu, ram, core, bodyColor, weight);
    var viewUltrabook = new ViewUltrabook();

    if(title === '' || year === '' || cpu === '' || ram === '' 
    || core === '' || bodyColor === '' || weight === ''){
        viewUltrabook.getMessage('Ошибка! Заполните все поля!', 'no_success');
        setTimeout(() => document.querySelector(".no_success").remove(), 2000);
    }
    else{
        if (weight > 1.5){
            viewUltrabook.getMessage('Вес ультрабука не должен превышать 1,5 кг', 'no_success');
            setTimeout(() => document.querySelector(".no_success").remove(), 5000);
        }
        else {
            viewUltrabook.addUltrabook(ultrabook);
            viewUltrabook.getMessage('Ура! Добавили новый ультрабук!', 'success');
            setTimeout(() => document.querySelector(".success").remove(), 2000);
            viewUltrabook.clearInput();
            viewUltrabook.info(ultrabook);
        }
    };

    viewUltrabook.deleteUltrabook();
    /* viewLaptop.info(ultrabook); */
    event.preventDefault();
});
