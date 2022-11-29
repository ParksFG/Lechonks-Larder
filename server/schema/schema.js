const { cards, users } = require('../sampleData')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, buildClientSchema,} = require('graphql');


// Card Type
const CardType = new GraphQLObjectType({
    name: 'card',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        supertype: { type: GraphQLString },
        subtype: { type: GraphQLString },
        image: { type: GraphQLString },
        uid: { type: GraphQLString },
        username: { type: GraphQLString },
    })
});

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLID },
        uid: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});


//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{

        //Allows us to query for all cards
        cards: {
            type: new GraphQLList(CardType),
            resolve(parent, args) {
                return cards;
            },
        },        
        
        //Allows us to query for a specific card based on card id
        card: {
            type: CardType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return cards.find(cards => cards.id === args.id);
            }
        },

        //Allows us to query for a specific card based on card Name
        cardname:  {
            type: CardType,
            args: { name: { type: GraphQLID } },
            resolve(parent, args) {
                return cards.find(cards => cards.name === args.name);
            }
        },

        //Allows us to query for a cards by UID[user id]
        uidscard: {
            type: new GraphQLList(CardType),
            args: { uid: { type: GraphQLString } },
            resolve(parent, args) {
                return cards.filter(cards => cards.uid === args.uid);
            }
        },

        //Allows us to query for cards by username
        usernamescard: {
            type: new GraphQLList(CardType),
            args: { username: { type: GraphQLString } },
            resolve(parent, args) {
                return cards.filter(cards => cards.username === args.username);
            }
        },

        //Allows us to query for users
        users: {
            type: new GraphQLList(UserType),
            args: { username: { type: GraphQLString } },
            resolve(parent, args) {
                return users;
            }
        },

        //Allows us to query for an individual user by username
        user: {
            type: UserType,
            args: { username: { type: GraphQLString } },
            resolve(parent, args) {
                return users.find( users => users.username === args.username);
            }
        },

        //Allows us to query for an individual user by email
        useremail: {
            type: UserType,
            args: { email: { type: GraphQLString } },
            resolve(parent, args) {
                return users.find( users => users.email === args.email);
            }
        },


        


    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});