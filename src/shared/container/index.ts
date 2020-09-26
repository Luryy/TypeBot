import { container } from 'tsyringe';

import IBotProvider from './providers/BotProvider/models/IBotProvider';
import TelegramBotProvider from './providers/BotProvider/implementations/TelegramBotProvider';

container.registerSingleton<IBotProvider>(
  'TelegramBotProvider',
  TelegramBotProvider,
);
