import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

export default function PokemonCards({ cards, goPrevPage, goNextPage }) {
  return (
    <>
        <Grid columns={6} divided>
            {cards.map(cards => (
                <Grid.Column key={cards.id}>{cards.name}
                    <img width='150px' height='250px' src={cards.images.small}></img>
                    <Button id={cards.id}>Add to Collection</Button>
                </Grid.Column>
            ))}
        </Grid>
        {goPrevPage && <Button onClick={goPrevPage} >Previous</Button>}
        {goNextPage && <Button onClick={goNextPage}>Next</Button>}
    </>
  )
}
