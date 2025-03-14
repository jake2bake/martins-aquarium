import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = " "
    for (const tip of database.tips) {
        tipHTML += `<ul class="tips">\n
               <li class="tip">${tip.topic}</li>
               <li class="tip">${tip.text}</li>
              </ul>`
       
   }

   return tipHTML
};