document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.key('saveArrDevice') === 'saveArrDevice'){
        let x = JSON.parse(localStorage.getItem('saveArrDevice'));
        for(let i = 0; i < x.length; i++){
            if (x[i].bodyColor === undefined){
                allDevice = new Laptop(x[i].title, x[i].year, x[i].cpu, x[i].ram, x[i].cores,
                    x[i].caseMaterial, x[i].weight);
                arrDevice.push(allDevice); // добавил в массив
                viewLaptop.addLaptop(arrDevice); // отображаю добавленную информацию
            }
            else {
                allDevice = new Ultrabook(x[i].title, x[i].year, x[i].cpu, x[i].ram, x[i].cores,
                    x[i].bodyColor, x[i].weight);
                arrDevice.push(allDevice); // добавил в массив
                viewUltrabook.addUltrabook(arrDevice); // отображаю добавленную информацию
            }
        };
    };
});

let viewLaptop = new ViewLaptop();
let viewUltrabook = new ViewUltrabook();

document.querySelector('#laptop').addEventListener('submit', function(event){
    let title = document.querySelector('#title_l').value;
    let year = document.querySelector('#year_l').value;
    let cpu = document.querySelector('#cpu_l').value;
    let ram = document.querySelector('#ram_l').value;
    let core = document.querySelector('#core_l').value;
    let caseMaterial = document.querySelector('#caseMaterial_l').value;
    let weight = document.querySelector('#weight_l').value;
    
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
            allDevice = new Laptop(title, year, cpu, ram, core, caseMaterial, weight);
            arrDevice.push(allDevice); // добавил в массив
            viewLaptop.addLaptop(arrDevice); // отображаю добавленную информацию
            viewLaptop.getMessage('Ура! Добавили новый ноут!', 'success');
            setTimeout(() => document.querySelector(".success").remove(), 2000);
            viewLaptop.clearInput();
            
            localStorage.setItem('saveArrDevice', JSON.stringify(arrDevice)); // сохроняю массив в localStorage

            /* console.log(typeof(arrDevice[0].bodyColor)); */
        }
    };
    event.preventDefault();
});

document.querySelector('#ultrabook').addEventListener('submit', function(event){
    let title = document.querySelector('#title_u').value;
    let year = document.querySelector('#year_u').value;
    let cpu = document.querySelector('#cpu_u').value;
    let ram = document.querySelector('#ram_u').value;
    let core = document.querySelector('#core_u').value;
    let bodyColor = document.querySelector('#bodyColor_u').value;
    let weight = document.querySelector('#weight_u').value;

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
            allDevice = new Ultrabook(title, year, cpu, ram, core, bodyColor, weight);
            arrDevice.push(allDevice); // добавил в массив
            viewUltrabook.addUltrabook(arrDevice); // отображаю добавленную информацию
            viewUltrabook.getMessage('Ура! Добавили новый ультрабук!', 'success');
            setTimeout(() => document.querySelector(".success").remove(), 2000);
            viewUltrabook.clearInput();

            localStorage.setItem('saveArrDevice', JSON.stringify(arrDevice)); // сохроняю массив в localStorage
        }
    };
    event.preventDefault();
});
