
Instalación del proyecto.
En terminal:
git clone https://github.com/belenburgos20/Programaci-n-3.git
cd TP3
cp .env.template .env
npm install
npm install dotenv

Dentro del archivo .nav ingresar:

SECRET_WORD= "Palabra" -> Dentro podés ingresar la palabra que quieras
EXPIRES_IN= 1d -> También a modificar si se gusta

En terminal:
node src/index.js

A continuación el resultado debe ser: 

Server running on port 3000, host: http://localhost:3000
Base de datos conectada.
¡Listo, ya podés empezar a utilizar la app!
-----------------------------------------------------------
VERSION WEB

Ingresar en el navegador host: http://localhost:3000
En la sección de "Login Administrador" se requiere de un usuario y clave para ingresar.
User: admin@gmail.com
Password: Admin2345

A partir de acá podés administrar la sección de Pacientes y acceder a la agenda de turnos

En la sección "Turnos" podés acceder libremente para poder solicitar un turno en la clínica.

-----------------------------------------------------------
VERSION LOCAL 

Para utilizar la app en Postman necesitás ingresar con el usuario administrador para poder realizar las consultas de CRUD.

post -> http://localhost:3000/api/v1/pacientes/login
body->raw-> {"email": "admin@gmail.com", "password": "Admin2345"}

Esto genera un token. El token se utiliza en un 

GET -> http://localhost:3000/api/v1/turnos
authorization->Bearer Token-> Token : tu-token

A partir de acá podés hacer tus consultas. Las rutas de la API que podés utilizar son:

Ruta principal: /api/v1/pacientes.

GET/list->Para obtener una lista completa de los pacientes registrados.
GET/:id-> Para obtener los datos de un paciente según su id.
POST/->Para crear un nuevo paciente.
POST/login-> Para obtener un token que protege el resto de las acciones que involucran pacientes.
PUT/:id ->Para actualizar datos de un paciente cargado por id.
DELETE/:id ->Selecciona un paciente por su id y lo elimina.


Ruta principal: /api/v1/turnos.

GET/->Para obtener una lista completa de turnos.
GET/:id->Para obtener un turno por su :id.
GET/paciente/:pacienteId-> Para obtener los turnos que correspondan a un paciente según su :id.
POST/-> Para crear un nuevo turno.
PUT/:id->Para actualizar un turno existente que pertenezca al :id.
DELETE/:id->Selecciona un turno por su :id y lo elimina.


---------------------------------------------------------
Integrantes del grupo

-Burgos, Belén.
-Guardese, Luciano.
-Guardese, Iván.
-Hubert, Noelia.
-Ibáñez, Ian.

---------------------------------------------------------

Comentarios.

La conexión a base de datos se empezó trabajando con los modelos y controladores desde la memoria interna, usando datos creados para la prueba y error de los llamados, funciones y rutas. Una vez probado y descartando errores, se comenzó con la conexión a la base de datos real "SQLite", ahí se realizó un traslado de carpetas realizando el llamado correcto de SQL desde models, controllers y routes.
Una vez resuelto, se agregaron las verificaciones necesarias en config.js y a la ruta this.app.use("/api/v1/turnos", rutaTurnos) en el servidor, sin olvidar que se importaron los modelos y se relacionaron las tablas dentro de la base de datos (db.js).

#Capturas
https://drive.google.com/drive/folders/1ppEypY-0e-bF6oqZeipzmtYwFF1cOKVK?usp=sharing
