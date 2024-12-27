import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from "joi";

const validateBody = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            res.status(400).json({                
                errors: error.details.map(err => err.message)
            });
            return;
        }

        next();
    };
};

export { validateBody };
