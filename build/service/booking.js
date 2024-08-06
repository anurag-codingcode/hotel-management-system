"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookHotel = bookHotel;
const addhotel_1 = require("../service/addhotel");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function bookHotel(id) {
    try {
        let val = addhotel_1.hotels.findIndex((hotel) => hotel.id == id);
        if (val === -1) {
            throw new Error("No Hotel found with provided id");
        }
        else {
            console.log(new Date());
            if (addhotel_1.hotels[val].isAvailable) {
                const checkInDateString = prompt("Enter checkIn date (YYYY-MM-DD): ");
                const checkOutDateString = prompt("Enter checkOut date (YYYY-MM-DD): ");
                const checkInDate = new Date(checkInDateString);
                const checkOutDate = new Date(checkOutDateString);
                const today = new Date();
                if (checkInDate < today) {
                    throw new Error("Check-in date cannot be before today's date.");
                }
                if (checkOutDate <= checkInDate) {
                    throw new Error("Check-out date cannot be prior to check-in date.");
                }
                addhotel_1.hotels[val].checkInDate = checkInDate;
                addhotel_1.hotels[val].checkOutDate = checkOutDate;
                addhotel_1.hotels[val].isAvailable = false;
                console.log("Your room is booked.");
            }
            else {
                throw new Error("Room not available");
            }
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
