/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    onePet(_, { input }, { models }) {
      return models.Pet.findOne(input);
    },
    manyPets(_, { input }, { models }) {
      return models.Pet.findMany(input);
    },
    findUser(_, __, { models }) {
      return models.User.findOne({});
    },
  },
  Mutation: {
    createPet(_, { input }, { models }) {
      return models.Pet.create(input);
    },
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300';
    },
    owner(pet, __, { user }) {
      return user;
    },
  },
  User: {
    pets(user, __, { models }) {
      return models.Pet.findMany();
    },
  },
};
