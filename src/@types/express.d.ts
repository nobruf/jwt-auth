declare namespace Express {
    export interface Request {
        userId: string;
    }
    export interface ProcessEnv {
        [key: string]: string | undefined
    }
}