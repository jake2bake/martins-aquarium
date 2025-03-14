import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
//import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

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

// Render each HTML string to the correct DOM element