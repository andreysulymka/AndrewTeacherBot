const questions = require('./questions.json');

const getRandomQuestion = (topic) => {
    let questionTopic = topic.toLowerCase();

    if (questionTopic === 'випадкове запитання') {
        const randomTopicIndex = Math.floor(
            Math.random() * Object.keys(questions).length
        );
        questionTopic = Object.keys(questions)[randomTopicIndex];
    }

    const topicQuestions = questions[questionTopic];
    const randomQuestionIndex = Math.floor(
        Math.random() * topicQuestions.length
    );
    const randomQuestion = topicQuestions[randomQuestionIndex];

    return { question: randomQuestion, questionTopic };
};

const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find((question) => question.id === id);

    if (!question.hasOptions) {
        return question.answer;
    }

    return question.options.find((option) => option.isCorrect).text;
};

module.exports = { getRandomQuestion, getCorrectAnswer };
