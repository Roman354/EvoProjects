export class AddTodo {
  static readonly type = '[TODO] Add';
  constructor(public payload: string) {}
}
