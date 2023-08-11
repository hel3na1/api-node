import { Model, DataTypes } from 'sequelize';
import database from '../database'

class Todo extends Model {
  public id!: number;
  public nome!: string;
  public duracao!: number;

  // Se houver métodos específicos para o model Todo, você pode adicioná-los aqui.
}

Todo.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database.connection,
    modelName: 'Todo',
    freezeTableName: true,
  }
);

export default Todo;