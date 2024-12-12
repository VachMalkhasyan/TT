# Проект регистрации/авторизации (ReactJS + Laravel)

Этот проект представляет собой реализацию формы регистрации/авторизации, использующую ReactJS для фронтенда и Laravel для бэкенда. Аутентификация реализована с использованием JWT (JSON Web Tokens).

## Требования к паролю

*   Содержит символы в разных регистрах (заглавные и строчные).
*   Содержит цифры.

## Установка и запуск

### Бэкенд (Laravel)

1.  **Клонирование репозитория:**

    ```bash
    git clone git@github.com:VachMalkhasyan/auth-api.git
    ```

2.  **Переход в директорию бэкенда (если необходимо):**

    ```bash
    cd auth-api
    ```

3.  **Установка зависимостей Composer:**

    ```bash
    composer install
    ```

4.  **Копирование файла `.env.example` в `.env` и настройка переменных окружения (например, база данных):**

    ```bash
    cp .env.example .env
    # Редактировать .env, например:
    # DB_CONNECTION=mysql
    # DB_HOST=127.0.0.1
    # DB_PORT=3306
    # DB_DATABASE=your_database_name
    # DB_USERNAME=your_database_username
    # DB_PASSWORD=your_database_password
    ```

5.  **Генерация ключа приложения Laravel:**

    ```bash
    php artisan key:generate
    ```

6.  **Миграция базы данных:**

    ```bash
    php artisan migrate
    ```
7.  **Установка пакета для работы с JWT (если не установлен автоматически):**
    ```bash
    composer require tymon/jwt-auth
    ```
8.  **Публикация конфигурационного файла JWT:**
    ```bash
    php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
    ```
9.  **Генерация секретного ключа JWT:**
    ```bash
    php artisan jwt:secret
    ```

10. **Запуск сервера Laravel:**

    ```bash
    php artisan serve
    ```

### Фронтенд (ReactJS)

1.  **Переход в директорию фронтенда:**

    ```bash
    cd auth-frontend
    ```

2.  **Установка зависимостей NPM:**

    ```bash
    npm install
    # или
    yarn install
    ```

3.  **Запуск приложения React:**

    ```bash
    npm run start
    # или
    yarn start
    ```
