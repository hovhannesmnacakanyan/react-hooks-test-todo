export default function reducer(state, {type, payload}) {
  switch (type) {
    case 'remove':
      return state.filter((todo) => todo.id !== payload);

    case 'toggle':
      return state.map(todo => todo.id === payload ? ({
        ...todo,
        completed: !todo.completed
      }) : todo);

    case 'add':
      const todo = {
        id: Date.now(),
        completed: false,
        title: payload,
        userId: 1,
      };

      return [...state, todo];

    default:
      return state;
  }
}