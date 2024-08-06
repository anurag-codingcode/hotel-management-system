"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotels = void 0;
exports.addHotel = addHotel;
exports.showHotels = showHotels;
exports.hotels = [
    {
        name: 'Hotel Tulip Inn',
        id: '234',
        location: 'Banglore',
        isAvailable: true,
    }
];
function addHotel(h1) {
    exports.hotels.push(h1);
    console.log("Added successfully");
}
function showHotels() {
    exports.hotels.map((hotel) => console.log(`${hotel.id} ${hotel.name} ${hotel.location}`));
}
