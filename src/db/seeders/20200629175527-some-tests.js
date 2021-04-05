'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'tests',
      [
        {
          question1: 1,
          question2: 3,
          question3: 4,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-1)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 1,
          question2: 3,
          question3: 2,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-2)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 5,
          question2: 4,
          question3: 1,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-3)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 2,
          question2: 3,
          question3: 1,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-4)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 3,
          question2: 4,
          question3: 2,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-5)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 3,
          question2: 5,
          question3: 2,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-6)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 3,
          question2: 1,
          question3: 5,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-7)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 5,
          question2: 2,
          question3: 1,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-8)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 5,
          question2: 1,
          question3: 3,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-9)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 3,
          question2: 5,
          question3: 1,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-10)),
          subjectId: 1,
          studentId: 1,
        },
        {
          question1: 4,
          question2: 2,
          question3: 1,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-1)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 4,
          question2: 1,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-2)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 3,
          question2: 1,
          question3: 5,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 4,
          question2: 1,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-4)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 1,
          question2: 3,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-5)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 1,
          question2: 2,
          question3: 4,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-6)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 3,
          question2: 2,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-7)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 1,
          question2: 2,
          question3: 5,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-8)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 1,
          question2: 5,
          question3: 3,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-9)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 4,
          question2: 5,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-10)),
          subjectId: 2,
          studentId: 1,
        },
        {
          question1: 2,
          question2: 1,
          question3: 3,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-1)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 5,
          question2: 3,
          question3: 2,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-2)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 4,
          question2: 5,
          question3: 1,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 2,
          question2: 5,
          question3: 1,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-4)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 2,
          question2: 4,
          question3: 3,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-5)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 5,
          question2: 4,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-6)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 2,
          question2: 3,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-7)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 1,
          question2: 3,
          question3: 5,
          answer1: 1,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-8)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 4,
          question2: 1,
          question3: 2,
          answer1: 1,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-9)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 3,
          question2: 2,
          question3: 4,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-10)),
          subjectId: 3,
          studentId: 1,
        },
        {
          question1: 5,
          question2: 2,
          question3: 1,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-1)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 3,
          question2: 1,
          question3: 2,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-2)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 3,
          question3: 2,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 3,
          question2: 2,
          question3: 1,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-4)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 2,
          question2: 4,
          question3: 1,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-5)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 5,
          question3: 3,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-6)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 3,
          question2: 5,
          question3: 2,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-7)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 2,
          question2: 4,
          question3: 5,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-8)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 3,
          question3: 5,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-9)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 5,
          question3: 1,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-10)),
          subjectId: 1,
          studentId: 2,
        },
        {
          question1: 2,
          question2: 1,
          question3: 3,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-1)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 2,
          question3: 3,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-2)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 3,
          question2: 1,
          question3: 2,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-3)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 4,
          question3: 5,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-4)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 5,
          question2: 3,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-5)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 5,
          question3: 4,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-6)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 5,
          question3: 3,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-7)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 5,
          question2: 1,
          question3: 4,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-8)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 3,
          question2: 5,
          question3: 4,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-9)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 3,
          question2: 1,
          question3: 4,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-10)),
          subjectId: 2,
          studentId: 2,
        },
        {
          question1: 3,
          question2: 1,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-1)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 5,
          question2: 2,
          question3: 3,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-2)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 3,
          question3: 5,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-3)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 2,
          question3: 3,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-4)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 3,
          question3: 1,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-5)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 4,
          question2: 1,
          question3: 2,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-6)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 4,
          question3: 5,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-7)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 3,
          question3: 5,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-8)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 5,
          question2: 3,
          question3: 1,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-9)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 3,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-10)),
          subjectId: 3,
          studentId: 2,
        },
        {
          question1: 1,
          question2: 3,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-1)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 5,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-2)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 4,
          question3: 2,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-3)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 5,
          question2: 4,
          question3: 1,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-4)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 4,
          question2: 5,
          question3: 3,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-5)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 3,
          question2: 5,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-6)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 2,
          question3: 4,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-7)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 3,
          question3: 2,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-8)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 5,
          question3: 2,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-9)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 5,
          question2: 4,
          question3: 2,
          answer1: 1,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-10)),
          subjectId: 1,
          studentId: 3,
        },
        {
          question1: 2,
          question2: 1,
          question3: 4,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-1)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 3,
          question3: 5,
          answer1: 1,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-2)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 4,
          question2: 5,
          question3: 1,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-3)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 3,
          question2: 5,
          question3: 1,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-4)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 5,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-5)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 3,
          question3: 4,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-6)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 4,
          question2: 5,
          question3: 3,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-7)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 3,
          question2: 2,
          question3: 1,
          answer1: 0,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-8)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 5,
          question2: 1,
          question3: 2,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-9)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 2,
          question3: 5,
          answer1: 0,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(13)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(13)).setDate(-10)),
          subjectId: 2,
          studentId: 3,
        },
        {
          question1: 3,
          question2: 4,
          question3: 5,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-1)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-1)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 2,
          question2: 1,
          question3: 3,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(9)).setDate(-2)),
          updatedAt: new Date(new Date(new Date().setHours(9)).setDate(-2)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 4,
          question2: 3,
          question3: 1,
          answer1: 0,
          answer2: 1,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          updatedAt: new Date(new Date(new Date().setHours(15)).setDate(-3)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 1,
          question2: 5,
          question3: 2,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-4)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-4)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 4,
          question2: 1,
          question3: 3,
          answer1: 0,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(11)).setDate(-5)),
          updatedAt: new Date(new Date(new Date().setHours(11)).setDate(-5)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 2,
          question2: 4,
          question3: 3,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-6)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-6)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 5,
          question2: 3,
          question3: 4,
          answer1: 1,
          answer2: 1,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(12)).setDate(-7)),
          updatedAt: new Date(new Date(new Date().setHours(12)).setDate(-7)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 5,
          question2: 4,
          question3: 3,
          answer1: 1,
          answer2: 0,
          answer3: 0,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-8)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-8)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 3,
          question2: 4,
          question3: 1,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(10)).setDate(-9)),
          updatedAt: new Date(new Date(new Date().setHours(10)).setDate(-9)),
          subjectId: 3,
          studentId: 3,
        },
        {
          question1: 2,
          question2: 4,
          question3: 5,
          answer1: 1,
          answer2: 0,
          answer3: 1,
          createdAt: new Date(new Date(new Date().setHours(14)).setDate(-10)),
          updatedAt: new Date(new Date(new Date().setHours(14)).setDate(-10)),
          subjectId: 3,
          studentId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tests', null, {});
  },
};
