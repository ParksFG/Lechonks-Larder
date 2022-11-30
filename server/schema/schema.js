const { AuthenticationError } = require("apollo-server-express");
const { cards, users } = require("../sampleData");
const { signToken } = require("../utils/auth");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  buildClientSchema,
  GraphQLNonNull,
} = require("graphql");

// Card Type
const CardType = new GraphQLObjectType({
  name: "card",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    supertype: { type: GraphQLString },
    subtype: { type: GraphQLString },
    image: { type: GraphQLString },
    uid: { type: GraphQLString },
    username: { type: GraphQLString },
  }),
});

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLID },
    uid: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
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
      },
    },

    //Allows us to query for a specific card based on card Name
    cardname: {
      type: CardType,
      args: { name: { type: GraphQLID } },
      resolve(parent, args) {
        return cards.find(cards => cards.name === args.name);
      },
    },

    //Allows us to query for a cards by UID[user id]
    uidscard: {
      type: new GraphQLList(CardType),
      args: { uid: { type: GraphQLString } },
      resolve(parent, args) {
        return cards.filter(cards => cards.uid === args.uid);
      },
    },

    //Allows us to query for cards by username
    usernamescard: {
      type: new GraphQLList(CardType),
      args: { username: { type: GraphQLString } },
      resolve(parent, args) {
        return cards.filter(cards => cards.username === args.username);
      },
    },

    //Allows us to query for users
    users: {
      type: new GraphQLList(UserType),
      args: { username: { type: GraphQLString } },
      resolve(parent, args) {
        return users;
      },
    },

    //Allows us to query for an individual user by username
    user: {
      type: UserType,
      args: { username: { type: GraphQLString } },
      resolve(parent, args) {
        return users.find(users => users.username === args.username);
      },
    },

    //Allows us to query for an individual user by email
    useremail: {
      type: UserType,
      args: { email: { type: GraphQLString } },
      resolve(parent, args) {
        return users.find(users => users.email === args.email);
      },
    },
  },
});

//Mutations

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCard: {
      type: CardType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        supertype: { type: GraphQLNonNull(GraphQLString) },
        subtype: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        uid: { type: GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        //insert mongoose model here for card
      },
      //return mongoose model.save();
    },

    deleteCard: {
      type: CardType,
      args: {
        //create arg that will use a unique identifier to remove said card
      },
    },

    addUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        uid: { type: GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        //insert mongoose model here for user
      },
      //return mongoose model.save();
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
