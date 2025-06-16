Esto debe estar dentro del archivo .env

HOST=http://localhost

PORT=3000

VITE_PORT=3001

Para poder visualizar la página hay que entrar en la terminal, comandar dentro de TP4/Backend:

 npm install   
 
 node index.js

y debe verse de la siguiente manera:
Servidor corriendo en http://localhost:3000


Y luego comandar en una nueva terminal dentro de TP4/Frontend:

npm install

npm run dev

y debe verse de la siguiente manera:
> tp4-frontend@0.0.0 dev
> vite


  VITE v4.5.14  ready in 297 ms

  ➜  Local:   http://localhost:3001/
  ➜  Network: use --host to expose
  ➜  press h to show help


  ¡Listo! Desde el navegador ingresá a http://localhost:3001 :)
