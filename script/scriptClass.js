function Laptop(title, year, cpu, ram, cores, caseMaterial, weight){
    this.title = title;
    this.year = year;
    this.cpu = cpu;
    this.ram = ram;
    this.cores = cores;
    this.caseMaterial = caseMaterial;
    this.weight = weight;
};

function Ultrabook(title, year, cpu, ram, cores, bodyColor, weight){
    Laptop.call(this, title, year, cpu, ram, cores, weight);
    this.bodyColor = bodyColor;
    this.weight = weight;
};

let arrDevice = []; // хранит все устройства
let allDevice; // переменная для создания объекта