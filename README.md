# Система для обмена книгами

### Запуск проекта

В начале необходимо перейти в корневую папку проекта и создать .env, пример данных можно взять из .env.example.

Установка завимостей.

```
composer i

npm run i
```

Запуск mysql субд.

```
docker compose -f docker-compose.dev.yaml up
```

Генерация ключа приложения

```
php artisan key:generate
```

Применение миграций.

```
php artisan migrate --seed
```

Запуск приложения.

```
composer run dev
```

### Изображения приложения
