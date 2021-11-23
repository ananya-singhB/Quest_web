import React, { useReducer, useState } from 'react';
import './qna.css'
import Modal from './Modal';

export const reducer = (state, action) => {
    if(action.type === 'ADD_QUES'){
        const newQueries = [...state.queries, action.payload];

        return{
            ...state,
            queries: newQueries,
            isModalOpen: true,
            modalContent: 'Question Added',
        };
    }

    if(action.type === 'NO_QUES'){
        return{
            ...state, isModalOpen:true,
            modalContent: 'Please input a query!'
        };
    }

    if(action.type === 'CLOSE_MODAL'){
        return{...state,
        isModalOpen: false
        }
    }

    if(action.type === 'ADD_ANS'){
        const newAnswers = [...state.answers, action.payload];

        return{
            ...state,
            answers: newAnswers,
            isModalOpen: true,
            modalContent: 'Answer Added',
        };
    }

    if(action.type === 'NO_ANS'){
        return{
            ...state, isModalOpen:true,
            modalContent: 'Please input an answer!'
        };
    }

    if(action.type === 'REMOVE_ANS'){
        const newAns = state.answers.filter(
        (ans) => ans.id !== action.payload);

        return{...state, answers: newAns};
    }
    throw new Error('No matching action type');
}