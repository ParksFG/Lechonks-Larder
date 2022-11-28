const { cards, users } = require('../sampleData')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema,} = require('graphql');


// Card Type
const CardType = new GraphQLObjectType({
    name: 'cards',
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
    name: 'users',
    fields: () => ({
        id: { type: GraphQLID },
        uid: {}
    })
})


//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        cards: {
            type: CardType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return cards.find(cards => cards.id === args.id);
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});