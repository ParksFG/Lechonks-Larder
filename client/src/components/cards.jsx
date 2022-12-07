import { gql, useQuery } from '@apollo/client'
import { Segment, Container} from "semantic-ui-react";
import CardRow from './CardRow';
const GET_CARDS = gql`
    query getCards {
        cards {
            id
            name
            supertype
            subtype
            image
            uid
            username 
        }
    }

`


export default function Cards() {
    const { loading, error, data } = useQuery(GET_CARDS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

    return<>{!loading && !error && (
        <Segment>
            <Container >
            <h2>Your Card Collection</h2>
            </Container>,
            <Container>
               {data.cards.map((card) => (
                <CardRow key={card.id} card={card} />
               ))} 
            </Container>
        </Segment>
    )}</>;
}