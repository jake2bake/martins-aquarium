import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = " "
    for (const fish of database.fish) {
        fishHTML += `<article class="fish">\n
                
               <img src="${fish.image}" alt="Picture of ${fish.name}"> 
               <div class="fish__details">
                   <h2 class="fish_name">Name: ${fish.name}</h2>
                   <p class="fish_length">Length: ${fish.length}</p>
               </div>
           </article>`
       
   }

   return fishHTML
};

    // Generate an HTML representation of each fish
