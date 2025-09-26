1. Регистрация

POST /register
Тело: { email, username, displayName, description, password }
Возвращает: информацию о пользователе (id, email, username, displayName, description).

2. Логин (авторизация)

POST /login
Тело: { email, password }
Возвращает: JWT токен.

3. Поиск пользователя по username

GET /users/:username
Возвращает: информацию о пользователе (id, email, username, displayName, description).

4. Отправка сообщения

POST /messages
Тело: { token, receiverUsername, content }
Возвращает: информацию о созданном сообщении (id, senderId, receiverId, content, createdAt).

5. Получение переписки с пользователем

GET /messages/:username
Заголовок: token
Возвращает: массив сообщений между текущим пользователем и указанным пользователем.