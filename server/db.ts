import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What school is near a cathedral and has an emblem with 7 candles in it?',
        answer: 'The Cathedral School',
    },
    {
        points: 200,
        question:
            'In what state is it illegal to take selfies with tigers (hint: it rhymes with stew pork)',
        answer: 'New York',
    },
    {
        points: 300,
        question:
            'How much tailwind is needed to invalidate a world record for fastest for track and field sports (in m/s)',
        answer: '2.0 m/s',
    },
    {
        points: 400,
        question: 'What game console did Nintendo release on November 18, 2012',
        answer: 'Wii U',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What club did Oliver and Conor get approved to start yesterday (please join)',
            answer: 'Game Development Club',
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
            'Who is this chef from the hit 2007 movie ratatouille (last name only)',
            imgSrc: "/Gusteau.png",
        answer: 'Gusteau',
    },

    {
        points: 400,
        question:
            'What is the most popular sport in the world',
        answer: 'Soccer',
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