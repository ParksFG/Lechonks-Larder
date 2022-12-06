const { cards, users } = require("../sampleData");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull} = require('graphql');

//Mongoose Models
const Card = require('../models/card');
const User = require('../models/user');


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
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        uid: { type: GraphQLString },
    })
});


//Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      //Allows us to query for all cards
      cards: {
        type: new GraphQLList(CardType),
        resolve(parent, args) {
          return Card.find();
        },
      },
  
      //Allows us to query for a specific card based on card id
      card: {
        type: CardType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Card.findById(args.id);
        },
      },
  
      //Allows us to query for a specific card based on card Name
      cardname: {
        type: CardType,
        args: { name: { type: GraphQLID } },
        resolve(parent, args) {
          return Card.findById(args.name);
        },
      },
  
      //Allows us to query for a cards by UID[user id]
      uidscard: {
        type: new GraphQLList(CardType),
        args: { uid: { type: GraphQLString } },
        resolve(parent, args) {
          return Card.findbyID(args.uid);
        },
      },
  
      //Allows us to query for cards by username
      usernamescard: {
        type: new GraphQLList(CardType),
        args: { username: { type: GraphQLString } },
        resolve(parent, args) {
          return cards.findbyID(args.username);
        },
      },
  
      //Allows us to query for users
      users: {
        type: new GraphQLList(UserType),
        args: { username: { type: GraphQLString } },
        resolve(parent, args) {
          return User.find();
        },
      },
  
      //Allows us to query for an individual user by username
      user: {
        type: UserType,
        args: { username: { type: GraphQLString } },
        resolve(parent, args) {
          return User.find(args.username);
        },
      },
  
      //Allows us to query for an individual user by email
      useremail: {
        type: UserType,
        args: { email: { type: GraphQLString } },
        resolve(parent, args) {
          return User.find(args.email);
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