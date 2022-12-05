import React from 'react'
import {
    Card,
    Image
} from 'semantic-ui-react'

import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: '325033bd-fc04-4141-aec9-7a359727ce1e'})

const PokemonCardImageSearch = ({name}) => {

    var x;

    return(
        pokemon.configure({apiKey: '325033bd-fc04-4141-aec9-7a359727ce1e'}),
        
        pokemon.card.where({ q:'name:'+ name +'', pageSize: 100, page: 1  })
        .then(result => {
            console.log(result.data[0].images.large);
            x = result.data[0].images.large;
        }),

        <Card>
        <Card.Header>{name}</Card.Header>    
        <Image src={x} ></Image>
        </Card>
    )
}







export default PokemonCardImageSearch