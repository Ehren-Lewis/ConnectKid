const { Parent, Event, Child, Weekly } = require("../models");

const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { pathToArray } = require("graphql/jsutils/Path");
const { JsonWebTokenError } = require("jsonwebtoken");
const { Types } = require("mongoose");

const resolvers = {
  Query: {
    parents: async () => {
      return await Parent.find({});
    },

    singleParent: async (parent, { email }) => {
      return await Parent.findOne({ email });
    },
    events: async () => {
      return await Event.find({}).populate("attendees");
    },
    singleEvent: async (parent, { id }) => {
      const event = await Event.findById(id).populate("attendees");
      return event;
    },
    weekly: async () => {
      return await Weekly.find({});
    },
  },

  Mutation: {
    createParent: async (
      parent,
      { firstName, lastName, email, password, age, child }
    ) => {
      const newParent = await Parent.create({
        firstName,
        lastName,
        email,
        password,
        age,
        child,
      });

      const _id = newParent._id;

      const token = signToken({ firstName, lastName, _id, email });
      return { parent: newParent, token };
    },
    createChild: async (
      parent,
      { firstName, lastName, age, interests, gender, parentId },
      context
    ) => {
      if (context.user) {
        const child = new Child({
          firstName,
          lastName,
          age,
          interests,
          gender,
        });

        await Parent.findByIdAndUpdate(parentId, {
          $addToSet: { child: child },
        });

        return child;
      }

      throw new AuthenticationError("Not logged in");
    },

    createEvent: async (
      parent,
      {
        name,
        location,
        time,
        date,
        isFeatured,
        preparationTips,
        attendees,
        eventDetails,
      }
    ) => {
      return await Event.create({
        name,
        location,
        time,
        date,
        isFeatured,
        preparationTips,
        attendees,
        eventDetails,
      });
    },
    addParentToEvent: async (parent, { parentId, eventId }) => {
      return await Event.findOneAndUpdate(
        { _id: Types.ObjectId(eventId) },
        { $addToSet: { attendees: Types.ObjectId(parentId) } },
        { new: true }
      );
    },

    removeParentToEvent: async (parent, { parentId, eventId }) => {
      const removedParent = await Event.findOne({
        _id: eventId,
      });
      removedParent.attendees.pull(parentId);
      removedParent.save();
      return removedParent;
    },

    logIn: async (parent, { email, password }) => {
      const currentParent = await Parent.findOne({ email });

      if (!currentParent) {
        throw new AuthenticationError(
          "No Parent has been found with that email"
        );
      }

      if (!currentParent.isCorrectPassword(password)) {
        throw new AuthenticationError("Incorrect email or password");
      }

      const { firstName, lastName, _id } = currentParent;

      const token = signToken({ _id, firstName, lastName, email });

      return { parent: currentParent, token };
    },
  },
};
module.exports = resolvers;
