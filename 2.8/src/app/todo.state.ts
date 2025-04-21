import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddTodo } from './todo.actions';
import { Todo } from './todo.model';


@State<Todo[]>({
  name: 'todos',
  defaults: []
})
export class TodoState {
  private static nextId = 0;

  @Selector()
  static getTodos(state: Todo[]) {
    return state;
  }

  @Action(AddTodo)
  add({ getState, setState  }: StateContext<Todo[]>, { payload }: AddTodo) {
    const state = getState();
    const newTodo: Todo = {
      id: TodoState.nextId++,
      text: payload
    };
    setState([...state, newTodo]);
  }
}
