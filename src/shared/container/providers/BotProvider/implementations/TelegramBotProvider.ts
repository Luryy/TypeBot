import TelegramBot from 'node-telegram-bot-api';
import bot from '@shared/infra/bot/telegram';
import IBotProvider from '../models/IBotProvider';

class TelegramBotProvider implements IBotProvider {
  public onText(
    regex: RegExp,
    callback: (msg: TelegramBot.Message, match: RegExpExecArray | null) => void,
  ): void {
    bot.onText(regex, callback);
  }

  public async sendMessage(
    chatId: number | string,
    text: string,
    options?: TelegramBot.SendMessageOptions,
  ): Promise<TelegramBot.Message> {
    const message = await bot.sendMessage(chatId, text, options);
    return message;
  }
}

export default TelegramBotProvider;
