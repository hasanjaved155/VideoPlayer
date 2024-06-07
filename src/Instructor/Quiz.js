import React, { useState } from 'react';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    const questions = [
        {
            id: 'q1',
            text: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            correctAnswer: 'Paris'
        },
        {
            id: 'q2',
            text: 'Who wrote "Romeo and Juliet"?',
            options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
            correctAnswer: 'William Shakespeare'
        },
        {
            id: 'q3',
            text: 'What is the powerhouse of the cell?',
            options: ['Nucleus', 'Chloroplast', 'Mitochondrion', 'Endoplasmic reticulum'],
            correctAnswer: 'Mitochondrion'
        },
        // Add more questions here
    ];

    const showQuestion = (index) => {
        const question = questions[index];
        return (
            <div key={question.id} className="flex flex-col space-y-4">
                <p className="text-lg font-bold">{question.text}</p>
                <div>
                    {question.options.map((option, idx) => (
                        <label key={idx} className="inline-flex items-center">
                            <input
                                type="radio"
                                name={question.id}
                                value={option}
                                onChange={() => handleAnswerSelect(option)}
                                className="form-radio h-4 w-4 text-indigo-600"
                            />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        );
    };

    const handleAnswerSelect = (selectedOption) => {
        setAnswers({ ...answers, [questions[currentQuestionIndex].id]: selectedOption });
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
    };

    const prevQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const submitQuiz = () => {
        let calculatedScore = 0;
        questions.forEach((question) => {
            const userAnswer = answers[question.id];
            if (userAnswer === question.correctAnswer) {
                calculatedScore += 10; // Each correct answer scores 10 points
            }
        });
        setScore(calculatedScore);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setAnswers({});
        setScore(null);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
            {score === null ? (
                <div>
                    {/* Render current question */}
                    {showQuestion(currentQuestionIndex)}

                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={prevQuestion}
                            disabled={currentQuestionIndex === 0}
                            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextQuestion}
                            disabled={currentQuestionIndex === questions.length - 1}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    </div>

                    {/* Submit button */}
                    {currentQuestionIndex === questions.length - 1 && (
                        <button
                            onClick={submitQuiz}
                            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    )}
                </div>
            ) : (
                <div>
                    {/* Render result section */}
                    <p className="text-lg font-bold mb-2">Quiz Result</p>
                    <p className="mb-2">Score: {score}/30</p>
                    <p>
                        {score >= 70
                            ? 'Congratulations! You did great!'
                            : 'You can do better. Keep practicing.'}
                    </p>
                    <button
                        onClick={restartQuiz}
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Restart Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
