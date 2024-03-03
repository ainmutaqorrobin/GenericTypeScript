var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function countDescription(element) {
    var descrition = "got no value";
    if (element.length === 1) {
        descrition = "got 1 element";
    }
    else if (element.length > 1) {
        descrition = "got  " + element.length + " element";
    }
    return [element, descrition];
}
console.log(countDescription(["Coooking", "STLOO WOO"]));
function extractAndConvert(obj, key) {
    return "Value of " + obj[key];
}
extractAndConvert({ name: "robin" }, "name");
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("NOKIA");
textStorage.addItem("PATAYA");
textStorage.removeItem("NOKIA");
console.log(textStorage.getItems());
var item = { name: "Robin", age: 21 };
var numberStorage = new DataStorage();
var objStorage = new DataStorage();
objStorage.addItem(item);
objStorage.addItem({ name: "Hapiz soib", age: 24 });
objStorage.removeItem(item);
console.log(objStorage.getItems());
