import { json } from "express";
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data))


app.route('/api')
.post(async(req, res) => {
    console.log('POST request detected');
    console.log('From data in res.body', req.body);
res.send(json);
});

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
             <span class ="restaurant">${Rname.restaurant}</span>
            <span class ="restaurantType">${Rname.address}</span>
        </li>
        ;
    }).join('');
    suggestions.innerHTML = html;
  }
  
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');
  
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
