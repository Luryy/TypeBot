import TelegramBot from 'node-telegram-bot-api';

export default interface IBotProvider {
  onText(
    regex: RegExp,
    callback: (msg: TelegramBot.Message, match: RegExpExecArray | null) => void,
  ): void;
  sendMessage(
    chatId: number | string,
    text: string,
    options?: TelegramBot.SendMessageOptions,
  ): Promise<TelegramBot.Message>;
}
