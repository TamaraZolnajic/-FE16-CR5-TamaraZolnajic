var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, gender, size, vaccine, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.image = image;
        array.push(this);
    }
    Animal.prototype.printInfo = function () {
        return "\n        <div class=\"col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center\">\n            <div class=\"card card-decor\" style=\"width: 22rem;\">\n                <img src=\"".concat(this.image, "\" class=\"card-img-top\" style=\"height:22rem; object-fit:cover\">\n                <div class=\"text-center bg-dark text-white p-1\">").concat(this.name, "</div>\n                <div class=\"card-body\">\n                  <p class=\"card-text\">Gender: ").concat(this.gender, "</p>\n                  <p class=\"card-text\">Age: ").concat(this.age, "</p>\n                  <p class=\"card-text\">Size: ").concat(this.size, "</p> \n                  <h1 class=\"text-center btn d-flex justify-content-center bg-").concat(this.vaccine ? "success" : "danger", "\">Vaccine: ").concat(this.vaccine, "</h1>\n                </div>\n              </div>\n        </div>");
    };
    return Animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name, age, gender, size, vaccine, image, breed, furcolor, URLbreed) {
        var _this = _super.call(this, name, age, gender, size, vaccine, image) || this;
        _this.breed = breed;
        _this.furColor = furcolor;
        _this.URLbreed = URLbreed;
        return _this;
    }
    cat.prototype.printInfo = function () {
        return "\n        <div class=\"col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center\">\n            <div class=\"card card-decor\" style=\"width: 22rem;\">\n                <img src=\"".concat(this.image, "\" class=\"card-img-top\" style=\"height:22rem; object-fit:cover\">\n                <div class=\"card-title text-center bg-dark text-white p-1\">").concat(this.name, "</div>\n                <div class=\"card-body\">\n                    <p class=\"card-text\">Gender: ").concat(this.gender, "</p>\n                    <p class=\"card-text\">Age: ").concat(this.age, "</p>\n                    <p class=\"card-text\">Size: ").concat(this.size, "</p>\n                    <h1 class=\"text-center btn d-flex justify-content-center bg-").concat(this.vaccine ? "success" : "danger", "\">Vaccine: ").concat(this.vaccine, "</h1>\n                    <p class=\"card-text\">Breed: ").concat(this.breed, "</p>\n                    <p class=\"card-text\">Fur color: ").concat(this.furColor, "</p>\n                    <p class=\"card-text text-center\">Breed info: \n                    <a href=\"\">").concat(this.URLbreed, "</a>\n                </div>  \n            </div>\n        </div>");
    };
    return cat;
}(Animal));
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name, age, gender, size, vaccine, image, breed, trainingSkills, URLbreed) {
        var _this = _super.call(this, name, age, gender, size, vaccine, image) || this;
        _this.breed = breed;
        _this.trainingSkills = trainingSkills;
        _this.URLbreed = URLbreed;
        return _this;
    }
    dog.prototype.printInfo = function () {
        return "\n        <div class=\"col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center\">\n            <div class=\"card card-decor\" style=\"width: 22rem;\">\n                <img src=\"".concat(this.image, "\" class=\"card-img-top\" style=\"height:22rem; object-fit:cover\">\n                <div class=\"card-title text-center bg-dark text-white p-1\">").concat(this.name, "</div>\n                <div class=\"card-body\">\n                    <p class=\"card-text\">Gender: ").concat(this.gender, "</p>\n                    <p class=\"card-text\">Age: ").concat(this.age, "</p>\n                    <p class=\"card-text\">Size: ").concat(this.size, "</p>\n                    <h1 class=\"text-center btn d-flex justify-content-center bg-").concat(this.vaccine ? "success" : "danger", "\">Vaccine: ").concat(this.vaccine, "</h1>\n                    <p class=\"card-text\">Breed: ").concat(this.breed, "</p>\n                    <p class=\"card-text\">Training Skills: ").concat(this.trainingSkills, "</p>\n                    <p class=\"card-text text-center\">Breed info: \n                    <a href=\"\">").concat(this.URLbreed, "</a>\n                </div>  \n            </div>\n        </div>");
    };
    return dog;
}(Animal));
var array = [];
new cat("Athos", 5, "male", "small", true, "../img/athos.jpg", "Brittish Shorthair", "Cream", "https://www.dailypaws.com/cats-kittens/cat-breeds/british-shorthair");
new cat("Blacky", 2, "male", "medium", true, "../img/blacky.jpg", "Maine Coon", "White", "https://www.dailypaws.com/cats-kittens/cat-breeds/maine-coon");
new cat("Chip", 4, "female", "small", false, "../img/chip.jpg", "European Shorthair", "Orange Tabby", "https://www.dailypaws.com/cats-kittens/cat-breeds/european-shorthair");
new dog("Pablo", 6, "male", "medium", true, "../img/pablo.jpg", "French Bulldog", "yes", "https://www.dailypaws.com/dogs-puppies/dog-breeds/french-bulldog");
new dog("Dingo", 3, "male", "large", false, "../img/dingo.jpg", "Standard Schnautzer", "yes", "https://www.dailypaws.com/dogs-puppies/dog-breeds/standard-schnauzer");
new dog("Lucky", 2, "female", "small", true, "../img/lucky.jpg", "Pembroke Welsh Corgi", "no", "https://www.dailypaws.com/dogs-puppies/dog-breeds/pembroke-welsh-corgi");
new Animal("Grape", 4, "female", "small", false, "../img/grape.jpg");
new Animal("Snowball", 1, "female", "small", false, "../img/snowball.jpg");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    document.getElementsByClassName("result")[0].innerHTML += val.printInfo();
}
