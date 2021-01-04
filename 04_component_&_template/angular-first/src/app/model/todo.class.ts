export class Todo{
  id: number;
  title: String;
  completed: boolean;
  constructor(title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
  }
}

