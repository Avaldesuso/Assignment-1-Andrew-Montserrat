import { json } from "express";
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data))

function findMatches(wordToMatch, restaurants) {
    return restaurants.filter(Rname => {


        const regex = new RegExp(wordToMatch, 'gi');
        return Rname.name.match(regex)
    });
}
function displayMatches(){
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(Rname => {

        return 
            <li>
            <span class ="restaurant"><b>${Rname.restaurants}</b></span><br>
            <span class ="restaurantType">${Rname.address}</span><br>
            </li>
        ;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

serachInput.addEventListener('change', displayMatches);