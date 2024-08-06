import promptSync from 'prompt-sync';
const prompt=promptSync();
import {hotel} from './model/hotel'
import {addHotel} from './service/addhotel'
import {showHotels} from './service/addhotel'
import {bookHotel}from './service/booking'
console.log("Welcome to hotel management application");
let flag=true
while(flag==true){
    console.log("1: Add new hotel")
    console.log("2: Show hotels")
    console.log("3: Book hotel")
    console.log("4: Exit")
    let input=prompt("enter your choice ")
    switch(input){
        case '1':{
            let name=prompt("enter hotel name: ");
            let id=prompt("enter hotel id : ");
            let loc=prompt("enter hotel location : ");

            let h1=new hotel(name,id,loc);
            addHotel(h1);
            break;
        }
        case '2':{
            showHotels();
            break;
        }
        case '3':{
            showHotels();
            let id=prompt("Enter hotel id : ");
            bookHotel(id);
            break;
        }
        case '4':{
            flag=false;
            break;
        }
        default:{
            console.log("enter valid input")
        }
        console.log("\n")
    }
}


