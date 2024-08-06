import {hotel} from '../model/hotel';
export let hotels:hotel[] = [
    {
        name:'Hotel Tulip Inn',
        id:'234',
        location:'Banglore',
        isAvailable:true,
    }
];

export function addHotel(h1:hotel){
    hotels.push(h1);
    console.log("Added successfully");
}
export function showHotels()
{
    hotels.map((hotel)=>console.log(`${hotel.id} ${hotel.name} ${hotel.location}`))
}