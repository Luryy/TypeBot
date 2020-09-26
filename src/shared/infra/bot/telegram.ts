import TelegramBot from 'node-telegram-bot-api';
import botConfig from '@config/bot';

const { token, opt } = botConfig.telegram;

const bot = new TelegramBot(`${token}`, opt);

export default bot;
