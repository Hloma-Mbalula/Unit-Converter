const userInput = document.getElementById('number--input');
const lengthDiv = document.getElementById("length--paragraph");
const volumeDiv = document.getElementById("volume--paragraph");
const massDiv = document.getElementById('mass--paragraph');
const convertButton = document.getElementById("convert--btn");

function roundDownToTwoDecimals(value) {
    return Math.floor(value * 100) / 100;
}

function lengthInFeet(value) {
    return value * 3.281;
}

function lengthInMeters(value) {
    return value / 3.281;
}

function volumeInGallons(value) {
    return value / 3.785;
}

function volumeInLitres(value) {
    return value * 3.785;
}

function massInPounds(value) {
    return value * 2.205;
}

function massInKilos(value) {
    return value / 2.205;
}

convertButton.addEventListener('click', function () {
    const inputValue = parseFloat(userInput.value);

    const lengthFeet = roundDownToTwoDecimals(lengthInFeet(inputValue));
    const lengthMeters = roundDownToTwoDecimals(lengthInMeters(inputValue));
    const volumeGallons = roundDownToTwoDecimals(volumeInGallons(inputValue));
    const volumeLitres = roundDownToTwoDecimals(volumeInLitres(inputValue));
    const massPounds = roundDownToTwoDecimals(massInPounds(inputValue));
    const massKilos = roundDownToTwoDecimals(massInKilos(inputValue));

    lengthDiv.innerHTML = `
    <p class="font-bold text-center p-1 text-blue-950">
        ${inputValue} meters = ${lengthFeet} feet | ${inputValue} feet = ${lengthMeters} meters
    </p>`;

    volumeDiv.innerHTML = `
    <p class="font-bold text-center p-1 text-blue-950">
        ${inputValue} liters = ${volumeGallons} gallons | ${inputValue} gallons = ${volumeLitres} liters
    </p>`;

    massDiv.innerHTML = `
    <p class="font-bold text-center p-1 text-blue-950">
        ${inputValue} kilos = ${massPounds} pounds | ${inputValue} pounds = ${massKilos} kilos
    </p>`;

    

});
