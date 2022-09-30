import { defineStore } from 'pinia'

export const useQuestions = defineStore('questions', {
  state: () => {
    return {
      questions: [
        {
          id: 'q-1',
          text: 'Tell me about yourself.',
          type: 'text'
        },
        {
          id: 'q-2',
          text: 'How did you hear about this position?',
          type: 'text'
        },
        {
          id: 'q-3',
          text: 'Why do you want to work at this company?',
          type: 'text'
        },
        {
          id: 'q-3',
          text: 'Why do you want this job?',
          type: 'text'
        }
      ]
    }
  },
  actions: {}
})
