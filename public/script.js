const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data))

function findMatches(wordToMatch, restaurants) {
    return restaurants.filter(Rname => {


        const regex = new RegExp(wordToMatch, 'gi');
        return Rname.name.match(regex)|| Rname.city.match(regex) || Rname.zip.match(regex) || Rname.type.match(regex)
    });
}
function displayMatches(){
    const matchArray = findMatches(this.value,cities);

    const html = matchArray.map(Rname => {

        const regex = new RexExp(this.value, 'gi');
        const cityName = Rname.city.replace(regex, <span class="h1">${this.value}</span>);
        const restaurantName = Rname.name.replace(regex, <span class="hl">${this.value}</span>);
        const restaurantType = Rname.type.replace(regex, <span class="hl">${this.value}</span>);
        const zipCode = Rname.zip.replace(regex, <span class="hl">${this.value}</span>);

        return 
            <li>
            <span class ="restaurant"><b>${restaurantName}</b></span><br>
            <span class ="restaurantType">${restaurantType}</span><br>
            <span class="name">${cityName}</span><br>
            <span class ="zipcode">${zipCode}</span><br><br>
            </li>
        ;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

serachInput.addEventListener('change', displayMatches);