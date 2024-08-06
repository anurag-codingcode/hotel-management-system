"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const hotel_1 = require("./model/hotel");
const addhotel_1 = require("./service/addhotel");
const addhotel_2 = require("./service/addhotel");
const booking_1 = require("./service/booking");
console.log("Welcome to hotel management application");
let flag = true;
while (flag == true) {
    console.log("1: Add new hotel");
    console.log("2: Show hotels");
    console.log("3: Book hotel");
    console.log("4: Exit");
    let input = prompt("enter your choice ");
    switch (input) {
        case '1': {
            let name = prompt("enter hotel name: ");
            let id = prompt("enter hotel id : ");
            let loc = prompt("enter hotel location : ");
            let h1 = new hotel_1.hotel(name, id, loc);
            (0, addhotel_1.addHotel)(h1);
            break;
        }
        case '2': {
            (0, addhotel_2.showHotels)();
            break;
        }
        case '3': {
            (0, addhotel_2.showHotels)();
            let id = prompt("Enter hotel id : ");
            (0, booking_1.bookHotel)(id);
            break;
        }
        case '4': {
            flag = false;
            break;
        }
        default:
            {
                console.log("enter valid input");
            }
            console.log("\n");
    }
}
