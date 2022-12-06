import React, { useState, useEffect } from 'react'
import { Segment, Input, Container, Header, Grid, Image, Form, Button } from 'semantic-ui-react'
import pokemon from "pokemontcgsdk"
import PokemonCards from './PokemonCards'

pokemon.configure({apiKey: '55b209ac-2e62-424f-9958-71bb4dbd357d'})

const Search = () => {
    const [cards, setPokemon] = useState([]);
    const [searchQuery, setSearchQuery] = useState('Bulbasaur')
    const [searchBar, setSearchBar] = useState('')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(true);
    

    useEffect(() => {
        setLoading(true)
        pokemon.card.where({ q: 'name:' + searchQuery + "*", pageSize: 18, page: currentPage })
        .then(results => {
            setLoading(false)
            console.log(currentPage + 1)
            setPokemon(results.data.map(p => p))
            console.log(results)
            console.log(results.count)
        
            for(let i = 1; i < results.count + 1; i++) {
                const cardData = JSON.stringify(results.data[i - 1].id)
                localStorage.setItem(`card${i}`, cardData)
            }
            if(results.count >= 18) {
                setNextPage(true)
            } else {
                setNextPage(false)
                console.log(nextPage)
            }
        })
    }, [searchQuery, currentPage])

    if (loading) return "Loading..."

    function goNextPage() {
        setCurrentPage(currentPage + 1)
    }

    function goPrevPage() {
        setCurrentPage(currentPage - 1)
    }


    // Monitor searchbox
    const searchChange = event => {
        setSearchBar(event.target.value)
    }

    // Set searchquery
    const handleSearch = event => {
        event.preventDefault();
        setCurrentPage(1)
        setSearchQuery(searchBar);
    }

    return (
        <Segment inverted>
            <Header as='h1'>Search the DB</Header>
        </Segment>,
        <Segment>
            <Header as='h2'>Search Here</Header>
            <Container>
                <Input
                    label={{ basic: true, content: 'Search' }}
                    labelPosition='right'
                    placeholder='Enter pokemon name'
                />
            </Container>
        </Segment>,
        <Segment>
            <Header as='h2'>Search Pokemon Cards</Header>
            <Container className='search-container' id="searchContainer">
                <Form>
                    <Input type="text" id="searchQ" placeholder="Search.." name="search" onChange={searchChange}></Input>
                    <Button type="submit" id="pokeSearch" onClick={handleSearch} >Search</Button>
                </Form>
            </Container>
            <Container className='searchResults'>
                <PokemonCards 
                    cards={cards} 
                    goNextPage={nextPage ? goNextPage : null} 
                    goPrevPage={currentPage > 1 ? goPrevPage : null}
                >
                </PokemonCards>
            </Container>
        </Segment> 
    )
}


export default Search