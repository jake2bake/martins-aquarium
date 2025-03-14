import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
//import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import {mostHolyFish, soldierFish, regularFish} from "./functions.js"

// Generate the fish lists
const fishHTML = fishList() 
const fishes = document.getElementById("fishList")
fishes.innerHTML = fishHTML

// Generate the care tips
const tipHTML = tipList()
const tips = document.getElementById("tipList")
tips.innerHTML = tipHTML

// Generate the location list
const locationHTML = locationList()
const locations = document.getElementById("locationList")
locations.innerHTML = locationHTML

const holyFish = mostHolyFish()
const holies = document.getElementById("fishList")
holies.innerHTML = holyFish

const solidFish = soldierFish()
const warriors = document.getElementById("fishList")
warriors.innerHTML = solidFish
// Render each HTML string to the correct DOM element

mediocreFish = regularFish()
const normies = document.getElementById("fishList")
normies.innerHTML = mediocreFish


module.exports = {fishHTML}