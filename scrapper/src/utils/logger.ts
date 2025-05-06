import winston from 'winston';
import path from 'path';

const logDir = 'logs';

// Custom timestamp format
const timestampFormat = winston.format.timestamp({
  format: () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];

    return `${date} ${time}`;
  },
});

// Custom format for console output
const consoleFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
  // For errors, include stack trace
  if (level === 'error') {
    return `${timestamp} [${level}]: ${message} ${meta.stack ? '\n' + meta.stack : ''}`;
  }

  // For other levels, keep it clean
  return `${timestamp} [${level}]: ${message}`;
});

// Custom format for file output (includes all metadata)
const fileFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
  const metaString = Object.keys(meta).length ? JSON.stringify(meta, null, 2) : '';

  return `${timestamp} ${level}: ${message} ${metaString}`;
});

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    timestampFormat,
    winston.format.errors({ stack: true }),
    winston.format.splat(),
  ),
  defaultMeta: { service: 'scrapper' },
  transports: [
    // Console transport with clean output
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), consoleFormat),
    }),
    // Error file transport with detailed output
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error',
      format: fileFormat,
    }),
  ],
});

export default logger;
