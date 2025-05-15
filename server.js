import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Для поддержки CORS
import { OpenAI } from 'openai'; // Для работы с OpenAI API

// Инициализация OpenAI API с твоим API-ключом
const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY'
});

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Разрешаем CORS-запросы

// Обработка GET-запроса на корневой путь
app.get('/', (req, res) => {
  res.send('Сервер работает. Отправь POST запрос на /get-recommendations.');
});

// Функция для получения рекомендаций по профессиям
async function getCareerRecommendations(gallupTalents, mbtiType) {
  const prompt = `
    Ты — профориентолог. Учитывая следующие данные:
    Топ 10 талантов Gallup: ${gallupTalents.join(", ")}
    Тип 16Personalities: ${mbtiType}
    Предложи 10 профессий, которые подойдут этим данным, с кратким описанием.
  `;
  
  // Отправка запроса к OpenAI для генерации рекомендаций
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 600, // Ограничиваем количество токенов в ответе
  });

  // Возвращаем текст с рекомендациями
  return response.choices[0].message.content;
}

// Логируем данные, полученные с клиента, и отправляем запрос на рекомендации
app.post('/get-recommendations', async (req, res) => {
  const { gallupTalents, mbtiType } = req.body;

  // Логируем полученные данные
  console.log('Получены данные:', { gallupTalents, mbtiType });

  try {
    // Получаем рекомендации
    const recommendations = await getCareerRecommendations(gallupTalents, mbtiType);
    // Отправляем рекомендации обратно клиенту
    res.json({ recommendations });
  } catch (error) {
    console.error('Ошибка при получении рекомендаций:', error);
    res.status(500).send('Ошибка при получении рекомендаций.');
  }
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('Сервер работает на http://localhost:3000');
});
