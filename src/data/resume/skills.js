// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'React JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Android Studio',
    competency: 3,
    category: ['Mobile Development'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Big data'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'C ++',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Swift',
    competency: 2,
    category: ['Mobile Development'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Unix',
    competency: 2,
    category: ['Operation System'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#e47272',
  '#cc7b94',
  '#3896e2',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
