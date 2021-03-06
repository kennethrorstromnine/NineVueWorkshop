
export class TodoService {
    private liste: string[] = ['todo 1', 'todo 2'];

    public opret(todo: string): void {
        this.liste.push(todo);
    }

    public opdatere(todo: string, index: number): void {
        this.liste[index] = todo;
    }

    public slet(index: number): void {
        this.liste.splice(index, 1);
    }

    public hent(index: number): string {
        return this.liste[index];
    }

    public hentListen(): string[] {
        return [...this.liste];
    }
}
export const todoService = new TodoService();
