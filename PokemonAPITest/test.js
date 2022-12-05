import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: '325033bd-fc04-4141-aec9-7a359727ce1e'})

var slot1;
var slot2;
var slot3;

function testQuery() {
    pokemon.card.where({ q:'name:rowlet', pageSize: 100, page: 1  })
        .then(result => {
            console.log(result.data[0].images.large)
            console.log(result.data[1].images.large)
            console.log(result.data[2].images.large)

            slot1 = result.data[0].images.large
            slot2 = result.data[1].images.large
            slot3 = result.data[2].images.large

           

        });




};



exports.testQuery = testQuery;


