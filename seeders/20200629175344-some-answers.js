'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'answers',
      [
        {
          text: 'Brussels',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 1,
        },
        {
          text: 'Amsterdam',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 1,
        },
        {
          text: 'Liege',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 1,
        },
        {
          text: 'Antwerp',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 1,
        },
        {
          text: 'Mount Everest',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 2,
        },
        {
          text: 'K2',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 2,
        },
        {
          text: 'Mont Blanc',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 2,
        },
        {
          text: 'El Capitan',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 2,
        },
        {
          text: 'Spanish',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 3,
        },
        {
          text: 'Colombian',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 3,
        },
        {
          text: 'English',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 3,
        },
        {
          text: 'Portugues',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 3,
        },
        {
          text: '17 million',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 4,
        },
        {
          text: '12 million',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 4,
        },
        {
          text: '10 million',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 4,
        },
        {
          text: '20 million',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 4,
        },
        {
          text: '50 - 13',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 5,
        },
        {
          text: '50 - 10',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 5,
        },
        {
          text: '51 - 10',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 5,
        },
        {
          text: '52 - 13',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 5,
        },
        {
          text: '1969',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 6,
        },
        {
          text: '1976',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 6,
        },
        {
          text: '1965',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 6,
        },
        {
          text: '1964',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 6,
        },
        {
          text: 'Winston Churchill',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 7,
        },
        {
          text: 'Adolf Johnson',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 7,
        },
        {
          text: 'Margaret Thatcher',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 7,
        },
        {
          text: 'Alan Turing',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 7,
        },
        {
          text: 'The Incas',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 8,
        },
        {
          text: 'The Mayas',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 8,
        },
        {
          text: 'The Egyptians',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 8,
        },
        {
          text: 'The conquistadors',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 8,
        },
        {
          text: '1512',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 9,
        },
        {
          text: '1943',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 9,
        },
        {
          text: '1610',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 9,
        },
        {
          text: '1700',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 9,
        },
        {
          text: 'North Africa',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 10,
        },
        {
          text: 'Australia',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 10,
        },
        {
          text: 'South America',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 10,
        },
        {
          text: 'East Asia',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 10,
        },
        {
          text: '136',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 11,
        },
        {
          text: '38',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 11,
        },
        {
          text: '138',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 11,
        },
        {
          text: '102',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 11,
        },
        {
          text: '16',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 12,
        },
        {
          text: '18',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 12,
        },
        {
          text: '12',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 12,
        },
        {
          text: '36',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 12,
        },
        {
          text: '25',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 13,
        },
        {
          text: '20',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 13,
        },
        {
          text: '8',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 13,
        },
        {
          text: '15',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 13,
        },
        {
          text: '14',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 14,
        },
        {
          text: '15',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 14,
        },
        {
          text: '8',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 14,
        },
        {
          text: '40',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 14,
        },
        {
          text: '7',
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 15,
        },
        {
          text: '5',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 15,
        },
        {
          text: '6',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 15,
        },
        {
          text: '4',
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          questionId: 15,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('answers', null, {});
  },
};
