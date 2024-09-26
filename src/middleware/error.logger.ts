import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import moment from 'moment';

const logErrorToFile = (statusCode: number, message: string) => {
    const date = moment().format('YYYY-MM-DD');
    const logDir = path.join(__dirname, '../logs');
    const logFile = path.join(logDir, `${date}.log`);

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    const logEntry = `${moment().format('YYYY-MM-DD HH:mm:ss')} | Status: ${statusCode} | Error: ${message}\n`;

    fs.appendFileSync(logFile, logEntry);
};

const errorLogger = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode >= 400 ? res.statusCode : 500;
    const message = err.message || 'Unknown error occurred';

    if (statusCode >= 400) {
        logErrorToFile(statusCode, message);
    }

    res.status(statusCode).json({ message });
};

export default errorLogger;
