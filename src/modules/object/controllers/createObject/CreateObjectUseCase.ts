import Todo from "models/Todo";
import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
  nome: string;
  duracao:number;

}

class CreateObjectUseCase {
  async execute({
    nome,
    duracao
  }: IRequest) {
    try {
      const todo = await Todo.create({ nome, duracao });
      return todo;
    } catch (error) {
      return 401
    }
  }
}

export { CreateObjectUseCase };
