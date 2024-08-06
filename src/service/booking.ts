import { hotels } from '../service/addhotel';
import promptSync from 'prompt-sync';
const prompt = promptSync();

export function bookHotel(id: string) {
    try {
        let val = hotels.findIndex((hotel) => hotel.id == id);

        if (val === -1) {
            throw new Error("No Hotel found with provided id");
        } else {
            if (hotels[val].checkOutDate && hotels[val].checkOutDate<new Date()){
                hotels[val].isAvailable=true
            }
            if (hotels[val].isAvailable) {
                const checkInDateString = prompt("Enter checkIn date (YYYY-MM-DD): ");
                const checkOutDateString = prompt("Enter checkOut date (YYYY-MM-DD): ");

                const checkInDate: Date = new Date(checkInDateString);
                const checkOutDate: Date = new Date(checkOutDateString);
                const today: Date = new Date();

                
                if (checkInDate < today) {
                    throw new Error("Check-in date cannot be before today's date.");
                }

          
                if (checkOutDate <= checkInDate) {
                    throw new Error("Check-out date cannot be prior to check-in date.");
                }

                hotels[val].checkInDate = checkInDate;
                hotels[val].checkOutDate = checkOutDate;
                hotels[val].isAvailable = false;
                console.log("Your room is booked.");
            } else {
                throw new Error("Room not available");
            }
        }
    } catch (e: any) {
        console.log(e.message);
    }
}
