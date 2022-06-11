class Animal {
    name: string;
    age: number;
    gender: string;
    size: string;
    vaccine: boolean;
    image: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, image: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.image = image
        array.push(this);
    }
    displayInfo() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decor" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:25rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                  <p class="card-text"><strong>Gender:</strong> ${this.gender}</p>
                  <p class="card-text"><strong>Age:</strong> ${this.age}</p>
                  <p class="card-text"><strong>Size:</strong> ${this.size}</p> 
                  <div class="vaccine"><button type="" class=" btn-success w-100 rounded-pill vaccine-btn">${this.vaccine}</button></div>
                </div>
              </div>
        </div>`;
    }
}

class cat extends Animal {
    breed: string;
    furColor: string;
    URLbreed: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, image: string, breed: string, furColor: string, URLbreed: string) {
        super(name, age, gender, size, vaccine, image);
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
    }

    displayInfo() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decor" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:25rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text"><strong>Gender:</strong> ${this.gender}</p>
                    <p class="card-text"><strong>Age:</strong> ${this.age}</p>
                    <p class="card-text"><strong>Size:</strong> ${this.size}</p>
                    <div class="vaccine"><button type="" class=" btn-success w-100 rounded-pill vaccine-btn">${this.vaccine}</button></div>
                    <p class="card-text"><strong>Breed:</strong> ${this.breed}</p>
                    <p class="card-text"><strong>Fur color:</strong> ${this.furColor}</p>
                    <p class="card-text"><strong>Breed info: </strong>
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
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, image: string, breed: string, trainingSkills: string, URLbreed: string) {
        super(name, age, gender, size, vaccine, image);
        this.breed = breed;
        this.trainingSkills = trainingSkills
        this.URLbreed = URLbreed;
    }

    displayInfo() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decor" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:25rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text"><strong>Gender:</strong> ${this.gender}</p>
                    <p class="card-text"><strong>Age:</strong> ${this.age}</p>
                    <p class="card-text"><strong>Size:</strong> ${this.size}</p>
                    <div class="vaccine"><button type="" class=" btn-success w-100 rounded-pill vaccine-btn">${this.vaccine}</button></div>
                    <p class="card-text"><strong>Breed:</strong> ${this.breed}</p>
                    <p class="card-text"><strong>Training Skills:</strong> ${this.trainingSkills}</p>
                    <p class="card-text"><strong>Breed info:</strong> 
                    <a href="">${this.URLbreed}</a>
                </div>  
            </div>
        </div>`
    }
}

let array: Array < Animal > = [];

new cat("Athos", 5, "Male", "Small", true, "../img/athos.jpg", "Brittish Shorthair", "Cream", "https://www.dailypaws.com/cats-kittens/cat-breeds/british-shorthair");
new cat("Blacky", 2, "Male", "Medium", true, "../img/blacky.jpg", "Maine Coon", "White", "https://www.dailypaws.com/cats-kittens/cat-breeds/maine-coon");
new cat("Chip", 4, "Male", "Small", false, "../img/chip.jpg", "European Shorthair", "Orange Tabby", "https://www.dailypaws.com/cats-kittens/cat-breeds/european-shorthair");
new dog("Pablo", 6, "Male", "Medium", true, "../img/pablo.jpg", "French Bulldog", "yes", "https://www.dailypaws.com/dogs-puppies/dog-breeds/french-bulldog");
new dog("Dingo", 3, "Male", "Large", false, "../img/dingo.jpg", "Standard Schnautzer", "yes", "https://www.dailypaws.com/dogs-puppies/dog-breeds/standard-schnauzer");
new dog("Lucky", 2, "Female", "Small", true, "../img/lucky.jpg", "Pembroke Welsh Corgi", "no", "https://www.dailypaws.com/dogs-puppies/dog-breeds/pembroke-welsh-corgi");
new Animal("Grape", 4, "Female", "Small", false, "../img/grape.jpg");
new Animal("Snowball", 1, "Female", "Small", false, "../img/snowball.jpg");



(document.querySelector(".sorting") as HTMLElement).addEventListener("click", sortByAge);

const vaccineBtn = document.getElementsByClassName("vaccine-btn");

function cards() {

    array.forEach((val) => {
        (document.querySelector(".result") as HTMLElement).innerHTML += val.displayInfo();
    });
}
cards();

function displayButton() {
    for(let i = 0; i < vaccineBtn.length ; i++){
      if (array[i].vaccine === true) {
        (document.getElementsByClassName("vaccine")[i] as HTMLElement).innerHTML = `<button type="" class="btn btn-success w-100 rounded-pill vaccine-btn"><h4>Vaccine <i class="bi bi-award"></i></h4></button>`;
      } else if (array[i].vaccine === false) {
        (document.getElementsByClassName("vaccine")[i] as HTMLElement).innerHTML = `<button type="" class="btn btn-danger w-100 rounded-pill vaccine-btn"><h4>Vaccine <i class="bi bi-clipboard-x"></i></h4></button>`;
      };
    };
    checkVaccine()
  };
  
  displayButton();

  function checkVaccine(){
    for(let i = 0; i < vaccineBtn.length ; i++){
      vaccineBtn[i].addEventListener("click", function(){
        if (array[i].vaccine == true) {
          array[i].vaccine = false;
        } else if (array[i].vaccine == false) {
          array[i].vaccine = true; 
        }    
        displayButton();      
      });
    };
  };

  function sortByAge() {

    array.sort(function (min, max) {
        return min.age - max.age
    });
    (document.querySelector(".result") as HTMLElement).innerHTML = "";
    cards();
    displayButton();
};






  