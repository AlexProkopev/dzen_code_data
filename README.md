<h2>📡 Backend API</h2>

<h3>https://dzencodedata-production.up.railway.app</h3>  

<h3>/api/orders</h3>
<ul>
  <li><code>GET /api/orders</code> — Получить список заказов с пагинацией</li>
  <li><code>GET /api/orders/:id</code> — Получить детали заказа</li>
  <li><code>DELETE /api/orders/:id</code> — Удалить заказ по ID</li>
</ul>
<p>Пример: <code>/api/orders?page=1&amp;limit=10</code></p>

<h3>/api/products</h3>
<ul>
  <li><code>GET /api/products</code> — Получить список всех продуктов (с фильтрацией по типу)</li>
  <li><code>GET /api/products/:id</code> — Получить продукт по ID</li>
</ul>
<p>Пример: <code>/api/products?type=Телевизор&amp;page=1&amp;limit=20</code></p>

<h2>🧭 Пояснение: пагинация и фильтрация</h2>
<ul>
  <li><code>page</code> — номер страницы (начинается с 1)</li>
  <li><code>limit</code> — количество элементов на странице</li>
  <li><code>type</code> — тип продукта (например, <code>Телевизор</code>, <code>Смартфон</code>)</li>
</ul>
<p>
  Пример запроса для получения 10 новых ноутбуков на второй странице:<br>
  <code>/api/products?type=Ноутбук&amp;page=2&amp;limit=10</code>
</p>

<h2>🧾 Модели</h2>

<h3>Product</h3>
<pre><code>{
  serialNumber: Number,
  type: String,
  is_new: Boolean,
  photo: String,
  price: { usd: Number, uah: Number },
  guarantee: { start: Date, end: Date },
  order: ObjectId,
  title: String,
  createdAt: Date,
  updatedAt: Date
}
</code></pre>

<h3>Order</h3>
<pre><code>{
  title: String,
  status: String,
  products: [ObjectId],
  createdAt: Date,
  updatedAt: Date,
  notes: String
}
</code></pre>

<h2>🔌 WebSocket</h2>
<p>
  Используется Socket.IO для счётчика вкладок.<br>
  При подключении клиент получает обновлённое значение:<br>
  <code>io.emit("activeTabs", count);</code><br>
  При отключении — счётчик уменьшается.
</p>

<h2>🛠 Используемый стек</h2>
<ul>
  <li><strong>Node.js</strong> — серверная логика</li>
  <li><strong>Express</strong> — REST API</li>
  <li><strong>MongoDB</strong> + <strong>Mongoose</strong> — база данных и ODM</li>
  <li><strong>Socket.IO</strong> — real-time соединения (вкладки)</li>
  <li><strong>CORS, dotenv</strong> — конфигурации и безопасность</li>
</ul>

<h2>⚙️ Структура backend</h2>
<pre><code>
server/
├── models/          # Схемы MongoDB
├── controllers/     # Бизнес-логика
├── services/        # Вспомогательные функции для контроллеров
├── dbSchema/        # PDF и .dbs-файл с визуальной схемой MongoDB (открывается в DbSchema, Notion или аналогах)
├── routes/          # API endpoints
├── db.js            # Подключение MongoDB
├── app.js           # Express-приложение
└── server.js        # Запуск сервера и сокетов
</code></pre>

<h3>🚀 Запуск через Docker</h3>
<pre><code># 1. Клонируй репозиторий
git clone https://github.com/AlexProkopev/dzen_code_data.git
cd dzen_code_data

# 2. Убедись, что есть файл .env
cp .env.example .env

# 3. Собери Docker-образ
docker build -t dzen-code-back .

# 4. Запусти бэкенд на порту 5050
docker run -p 8080:5050 dzen-code-back
</code></pre>

<p>✅ Теперь Frontend сможет обращаться к API по адресу <code>http://localhost:8080/api</code>.</p>

<a href="https://github.com/AlexProkopev/dzen-code">Перейти к репозиторию Frontend</a>
