import { EntitySchema } from "typeorm";
import { User } from "./user.entity";

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
      },
    }
    });