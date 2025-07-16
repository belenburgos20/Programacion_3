<<<<<<< HEAD

=======
Proyecto Final- Programación 3.
Elección del proyecto: Control de gastos Personales.

Integrantes
-Burgos, Belén.
-Guardese, Iván.
-Guardese, Luciano.
-Hubert, Noelia.
-Ibáñez, Ian Franco.

Instalación del proyecto
git clone https://github.com/belenburgos20/Programaci-n-3.git
cd Proyecto-Final
cp .env.template .env
docker-compose up -d
docker-compose ps
docker exec -it app_backend npm run migrate
docker exec -it app_backend npm run seed

Acceso a la aplicación
En el navegador accedé a http://localhost:3000

Usuario de prueba
	Usuario: administrador@test.com
	Contraseña: 123456

Uso de la aplicación
Si no tenés cuenta, podés registrarte desde la pantalla de inicio ingresando nombre, correo y constraseña:
El registro guarda los datos en la base de datos y redirige automáticamente al login. Una vez iniciada la sesión, accederás al menú principal que incluye:
	Movimientos de ejemplo (ingresos y egresos).
	Balance general visible.
	Botones para editar o eliminar cada movimiento.
	Filtros por categoría y fecha para personalizar el balance.

En la parte superior del listado, hay un formulario para ingresar nuevos movimientos seleccionando tipo (Ingreso o Egreso).

Tecnologías utilizadas
Frontend: React 18, PORT: 3000 (Interfaz de usuario) 
Backend: Express + Sequelize, PORT: 3001 (API REST) 
Database: PostgreSQL 15, PORT: 5433 (Base de datos principal)
Cache: Redis 7, PORT: 6379 (Cache y sesiones)
Proxy: Nginx, PORT: 80 (Reverse proxy)
pgAdmin: pgAdmin 4, PORT: 5050 (Administración de BD)
>>>>>>> dev
