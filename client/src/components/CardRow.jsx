import { Grid, Image } from "semantic-ui-react";


export default function CardRow({ card }) {
    return(
        <Grid>
            <Grid.Column>
            <Image src={card.image}/>
            </Grid.Column>
        </Grid>

    )
}