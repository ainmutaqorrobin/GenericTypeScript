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
