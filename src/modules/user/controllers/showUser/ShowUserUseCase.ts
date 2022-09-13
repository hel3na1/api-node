import logger from "../../../../utils/logger"

import { User } from "../../../../schemas/User";

interface IRequest {
    id: string;
}

class ShowUserUseCase {
    async execute({
        id
    }: IRequest) {
        try {
            const user = await User.findById(id);

            return user;
        } catch (error) {
            logger.error(error)
        }
    }
}

export { ShowUserUseCase };
