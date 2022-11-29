const cards = [
    {
        id: '1',
        name: 'Charizard VSTAR',
        supertype: 'Pokémon',
        subtypes: 'VSTAR',
        image: 'https://images.pokemontcg.io/swsh9/18_hires.png',
        uid: "12345",
        username: "tee-oni"
    },

    {
        id: '2',
        name: 'Charizard V',
        supertype: 'Pokémon',
        subtypes: 'V',
        image: 'https://images.pokemontcg.io/swsh9/17_hires.png',
        uid: "12345",
        username: "tee-oni"
    },

    {
        id: '3',
        name: 'Charizard',
        supertype: 'Pokémon',
        subtypes: '1st Edition',
        image: 'https://images.pokemontcg.io/base1/4_hires.png',
        uid: '45678',
        username: 'tree'
    },
]

const users = [
    {
        uid: '12345',
        username: 'tee-oni',
        email: "teeoni@gmail.com",
        password: "password1234"
    },

    {
        uid: '45678',
        username: 'tree',
        email: "tree@gmail.com",
        password: "tree1234"
    }
];

module.exports = { cards, users };