$(document).ready(function () {
    for (let i = 1; i <= 100; i++) {
        accusations(i);
    };
    function accusations(i) {
        var h3 = document.createElement('h3');
        var friend = ["Richard", "Anthony", "Mitch", "Pete", "James"];
        var place = ["homeless shelter", "presence of God", "Australian outback", "Kia Sorento", "farmer's market", "bus station", "All of Garden", "truck stop sunglasses aisle", "airport doggy potty station", "hotel lobby"];
        var weapon = ["knife", "Gateway desktop", "large slice of pie", "poisonous pocket lizard", "child's gun", "real man's gun", "rich understanding of overpopulation", "Juul", "gallon of whole milk", "young Slovakian woman", "phone charger", "compass", "whistle", "mercury-infused cocktail", "lil feller named Steve", "pair of yesterday's underwear", "reuben sandwich", "cuban sandwich", "Marmaduke clipping from September 10, 2001", "stinky toot",];
        h3.innerHTML = "Accusation " + (i);
        h3.addEventListener('click', function () {
            alert('I accuse ' + friend[i % 5] + ', they did it in the ' + place[i % 10] + ' with a ' + weapon[i % 20] + '!');
        });
        $('#container').append(h3);
    };
});


