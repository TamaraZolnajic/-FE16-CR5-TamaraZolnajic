class Animal {
    name: string;
    age: number;
    gender: string;
    size: string;
    vaccine: boolean;
    image: string;
    constructor(name:string, age: number, gender: string, size: string, vaccine: boolean, image: string){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.size=size;
    this.vaccine=vaccine;
    this.image=image
    array.push(this);
    }
    displayInfo () {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decor" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:22rem; object-fit:cover">
                <div class="text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                  <p class="card-text">Gender: ${this.gender}</p>
                  <p class="card-text">Age: ${this.age}</p>
                  <p class="card-text">Size: ${this.size}</p> 
                  <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine?"success":"danger"}">Vaccine: ${this.vaccine}</h1>
                </div>
              </div>
        </div>`;
    }
}

class cat extends Animal {
    breed: string;
    furColor: string;
    URLbreed: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean,  image: string, breed: string, furcolor:string, URLbreed: string) {
    super(name, age, gender, size, vaccine, image);
    this.breed = breed;
    this.furColor = furcolor;
    this.URLbreed = URLbreed;
    }
    
    displayInfo () {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decor" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:22rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text">Gender: ${this.gender}</p>
                    <p class="card-text">Age: ${this.age}</p>
                    <p class="card-text">Size: ${this.size}</p>
                    <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine?"success":"danger"}">Vaccine: ${this.vaccine}</h1>
                    <p class="card-text">Breed: ${this.breed}</p>
                    <p class="card-text">Fur color: ${this.furColor}</p>
                    <p class="card-text text-center">Breed info: 
                    <a href="">${this.URLbreed}</a>
                </div>  
            </div>
        </div>`
    }
}

class dog extends Animal {
    breed: string;
    trainingSkills: string;
    URLbreed: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean,  image: string, breed: string, trainingSkills: string, URLbreed: string) {
    super(name, age, gender, size, vaccine, image);
    this.breed = breed;
    this.trainingSkills=trainingSkills
    this.URLbreed = URLbreed;
    }
    
    displayInfo () {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decor" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:22rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text">Gender: ${this.gender}</p>
                    <p class="card-text">Age: ${this.age}</p>
                    <p class="card-text">Size: ${this.size}</p>
                    <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine?"success":"danger"}">Vaccine: ${this.vaccine}</h1>
                    <p class="card-text">Breed: ${this.breed}</p>
                    <p class="card-text">Training Skills: ${this.trainingSkills}</p>
                    <p class="card-text text-center">Breed info: 
                    <a href="">${this.URLbreed}</a>
                </div>  
            </div>
        </div>`
    }
}

let array: Array<Animal> = [];

new cat("Athos", 5, "male", "small",true, "../img/athos.jpg", "Brittish Shorthair", "Cream", "https://www.dailypaws.com/cats-kittens/cat-breeds/british-shorthair");
new cat("Blacky", 2, "male", "medium",true, "../img/blacky.jpg", "Maine Coon", "White", "https://www.dailypaws.com/cats-kittens/cat-breeds/maine-coon");
new cat("Chip", 4, "female", "small",false, "../img/chip.jpg", "European Shorthair", "Orange Tabby", "https://www.dailypaws.com/cats-kittens/cat-breeds/european-shorthair");
new dog("Pablo", 6, "male", "medium",true, "../img/pablo.jpg", "French Bulldog", "yes", "https://www.dailypaws.com/dogs-puppies/dog-breeds/french-bulldog");
new dog("Dingo", 3, "male", "large",false, "../img/dingo.jpg", "Standard Schnautzer", "yes", "https://www.dailypaws.com/dogs-puppies/dog-breeds/standard-schnauzer");
new dog("Lucky", 2, "female", "small",true, "../img/lucky.jpg", "Pembroke Welsh Corgi", "no", "https://www.dailypaws.com/dogs-puppies/dog-breeds/pembroke-welsh-corgi");
new Animal("Grape", 4, "female", "small",false, "../img/grape.jpg");
new Animal("Snowball", 1, "female", "small",false, "../img/snowball.jpg");


(document.querySelector(".sorting") as HTMLElement).addEventListener("click", agesort);
function agesort () {
    
    array.sort(function(min, max) {
        return min.age - max.age});
    (document.querySelector(".result") as HTMLElement).innerHTML ="";
    cards();
};
function cards() {
    
    array.forEach((val) => {
        (document.querySelector(".result") as HTMLElement).innerHTML += val.displayInfo();
    });
}
cards();