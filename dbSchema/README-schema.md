# Схема базы данных MongoDB

В этой папке `dbSchema` находятся:

- `mongo-schema.dbs` — исходник проекта в DbSchema для редактирования.
- `mongo-schema.pdf` — экспорт диаграммы схемы для передачи по ТЗ.

*Сами модели в папке Models

## Описание коллекций

### products
- `serialNumber` (Number)
- `is_new` (Boolean)
- `photo` (String)
- `title` (String)
- `type` (String)
- `specification` (Object)
- `guarantee` (Object: `start`, `end`)
- `price` (Object: `uah`, `usd`)
- `order` (Date)
- `createdAt`, `updatedAt` (Date)

### orders
- `title` (String)
- `date` (Date)
- `description` (String)
- `products` (Array of ObjectId → Product)
- `createdAt`, `updatedAt` (Date)

## Связи

- Каждый `order` может содержать несколько товаров.
- Поле `products` в `orders` хранит ссылки на коллекцию `products`.
