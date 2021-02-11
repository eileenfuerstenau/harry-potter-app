import HomePage from './HomePage'

export default {
  title: 'Homepage',
  component: HomePage,
}

export const base = () =>
  HomePage([
    {
      question: 'This could be your question',
      answer: 'This could be your answer',
    },
    {
      question: 'This could be your question',
      answer: 'This could be your answer',
    },
  ]).el
