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
        if (weight < 3){
            viewLaptop.addLaptop(laptop);
            viewLaptop.getMessage('Ура! Добавили новый ноут!', 'success');
            setTimeout(() => document.querySelector(".success").remove(), 2000);
            viewLaptop.clearInput();
            viewLaptop.info(laptop);
        }
        else {
            viewLaptop.massCheck(laptop);
        }
    };

    
    viewLaptop.deleteLaptop();
    /* viewLaptop.info(laptop); */
    event.preventDefault();
});

