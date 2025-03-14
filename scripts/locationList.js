import { database } from './aquariumData.js';


export const locationList = () => {
    let locationHTML = " "
    for (const location of database.locations) {
        locationHTML += `<article class="locations">\n
               <section class="location">- ${location.name}</section>
               <section class="location"> ${location.country}</section>
               <section class="location"> ${location.description}</section>
              </article>`
       
   }

   return locationHTML
};
