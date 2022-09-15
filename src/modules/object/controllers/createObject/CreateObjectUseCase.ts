import logger from "../../../../utils/logger"
import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
    name: string; 
    array: []; 
    object: {
        objName: string;
        objValue: number;
    }; 
    number: number;
}

class CreateObjectUseCase {
    async execute({
        name, 
        array, 
        object, 
        number
    }: IRequest) {
        try {
            const Object = await ObjectTest.create({
                name, 
                array, 
                object, 
                number
            });
    
            return Object;
        } catch (error) {
            logger.error(error)
        }
    }
}

export { CreateObjectUseCase };
