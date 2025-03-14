import {database} from "./aquariumData.js"
import {fishList} from "./fishList.js"




export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = ""

    for (const fish of database.fish) {
        if(fish.length % 3 === 1) {
            holyFish += `<article class="fish">\n
                
            <img src="${fish.image}" alt="Picture of ${fish.name}"> 
            <div class="fish__details">
                <h2 class="fish_name">Name: ${fish.name}</h2>
                <p class="fish_length">Length: ${fish.length}</p>
            </div>
        </article>`}

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const solidFish = ""

    for (const fish of database.fish) {
        if(fish.length % 5 === 1) {
            solidFish += `<article class="fish">\n
                
            <img src="${fish.image}" alt="Picture of ${fish.name}"> 
            <div class="fish__details">
                <h2 class="fish_name">Name: ${fish.name}</h2>
                <p class="fish_length">Length: ${fish.length}</p>
            </div>
        </article>`}
        
    }
    
    return solidFish
}


export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    mediocreFish = ""
    for(const fish of database.fish){
        if(fish.length % 3 !== 1 || fish.length % 5 !== 1){
            mediocreFish = fishHTML
        }
    }
}

