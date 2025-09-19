import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Who discovered the theory of relativity',
        answer: 'Albert Einstein',
    },
    {
        points: 200,
        question:
            'What is the 6th most spoken language in the world',
        answer: 'French',
    },
    {
        points: 300,
        question:
            'How much tailwind is needed to invalidate a world record for fastest 100 meter run (in m/s)',
        answer: '2 m/s',
    },
    {
        points: 400,
        question: 'What game engine is open source and uses GDscript as its primary coding language',
        answer: 'Godot',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What club did Oliver and Conor start?',
            answer: 'The Game Development Club',
        },
        {
            points: 100,
            question:
                'How many strings does a guitar have?',
                imgSrc: '/GuitarPhoto.png',
            answer: '6 strings',
        },
        {
            points: 300,
            question:
            'What kind of wood is this?',
            imgSrc: "/Plywood.png",
            answer: 'Plywood',
            
        },
        {
            points: 400,

            imgSrc: "/BlenderScreenshot.png",

            question:
            
                'What is the command for adding an object in blender (object mode)',
            answer: 'Shift A',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What genre of game is mario',
        answer: 'platformer',
    },
    {
        points: 200,
        question: 'What programming language does Unity use?',
        answer: 'C#',
    },
    {
        points: 300,

        question:
            'What is the most popular sport in the world',
        answer: 'Soccer',


    },

    {
        points: 400,
        question: 'In the movie Ratatouille, what is chef Gusteaus famous catchphrase',
    answer: 'Anyone can cook',
    }
]);


const categories = [
    {
        title: 'Conor\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Conor\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Conor\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}