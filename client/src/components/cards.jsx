import { gql, useQuery } from '@apollo/client'

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

    return <>{!loading && !error && <h1>Cards</h1>}</>;
}