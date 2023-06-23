# NodeJS starter

## Installation

Run commands

```
cd client
npm install
npm run build
cd ..
npm install
npm start

```

Open [http://localhost:3050](http://localhost:3050)

``
Nodejs and npm
Необхідні версії

node: 16.x.x
npm: 8.x.x
Ryu звернувся до студента із завданням, щоб можна було додавати бійців та змінювати їх характеристики. Також Ryu хоче, щоб було видно, хто саме користується додатком.

У Ryu вже є сторінки реєстрації та логіну, а також сторінка перегляду характеристик бійців, проте немає backend частини.

Запуск проекту
При першому запуску необхідно виконати команду
. build-start
(виконуваний файл build-start.sh знаходиться у корені проекту)

Після цього можно запускати за допомогою команди
npm start
Особливості проекту
У папці client знаходиться невеликий react застосунок, в якому є сторінки реєстрації, логіна, додавання та вибору бійців. Цей проект розміщений для ознайомлення і його основна мета — показати, як клієнт працює з сервером. Запити від клієнта можна подивитися у вкладці Network в Chrome Dev tool. При розробці backend частини використовуйте Postman для тестування API.
У папці config знаходиться конфігурація бази даних. У ролі бази даних виступає файл database.json.
У папці middlewares знаходяться проміжні функції, які відпрацьовують перед контролерами у папці routes.
У папці repositories знаходяться класи для роботи з базою даних для кожної сутності. Про патерн сховища можна почитати тут
У папці routes знаходяться контролери для кожної сутності. Це точка входу для запиту до backend частини застосунку.
У папці services знаходяться класи для обробки запитів за бізнес правилами для кожної сутності. Дуже важливо, щоб контролери залишалися чистими, а всі бізнес правила розміщувалися в сервісах. Це дозволяє ефективніше писати і перевикористати код.
У папці models знаходяться моделі основних сутностей додатку. Це те, в якому вигляді сутності зберігаються в базі даних.
index.js — це точка входу в застосунок і конфігурація самого сервера.
Завдання
Необхідно реалізувати REST API для сутностей користувача і бійця.

    USER:
        GET /api/users
        GET /api/users/:id
        POST /api/users
        PUT /api/users/:id
        DELETE /api/users/:id

    FIGHTER
        GET /api/fighters
        GET /api/fighters/:id
        POST /api/fighters
        PUT /api/fighters/:id
        DELETE /api/fighters/:id

Для запитів на створення і оновлення сутностей необхідно реалізувати валідацію через middlewares. Правила валідації визначаються сутностями, в папці models. Валідувати необхідно:

Наявність властивостей:
При створенні юзера — всі поля обов’язкові, окрім id
При створенні бійця — всі поля обов’язкові, окрім health та id
При оновленні юзера чи бійця — повинно бути присутнє хоча б одне поле з моделі
Id в body запитів має бути відсутнім
Наявність зайвих властивостей(не з папки models) — заборонено
Формат властивостей:
email — тільки gmail
phoneNumber: +380xxxxxxxxx
power — число, 1 ≤ power ≤ 100
defense — число, 1 ≤ defense ≤ 10
health — число, 80 ≤ health ≤ 120, необов’язкове поле(за замовчуванням — 100)
password — строка, min 3 символи
Всі додаткові валідації будуть плюсом. Використовувати сторонні бібліотеки для валідацій не можна

Також необхідно реалізувати 'response.middleware' для видачі відповіді сервера за такими правилами:

Якщо все пройшло добре — повернути статус 200 та JSON з даними відповіді
Помилки
Помилки запиту (валідація, проблеми в обробці) — повернути статус 400 та JSON з помилкою
Якщо запитувані дані не знайдено — повернути статус 404 і JSON з помилкою
JSON помилки формату

{
error: true,
message: ''
}
В базі данних не може бути:

Користувачів з однаковими “email”
Користувачів з однаковими “phoneNumber”
Бійців з однаковими “name” (усі поля case insensitive)
Намагайтеся давати лаконічні, але зрозумілі повідомлення про помилки, наприклад:

User not found
User entity to create isn’t valid
Під час реалізації домашнього завдання дуже важливо дотримуватися заданої структури проекту та розподілу на шари:

repositories — робота з базою даних
services — бізнес логіка додатка
routes — прийом запитів і відправка відповідей
Додаткове завдання
Додати функціонал самої битви з попереднього завдання.
Реалізувати збереження битв і переглядати їх історії.

``
