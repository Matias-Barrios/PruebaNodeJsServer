## Desafio

- A. Programar un API en node, a la cual se le pase un texto y reponda con el mismo texto.
- B. Programar un App cliente en React que permita enviar textos a la API del punto A y muestre las respuestas del api.

## Se pide
- Un API en nodejs 8 usando express, junto con sus test unitarios usando chai & supertest
- Un cliente para el API rest usando React & Redux y bootstrap, junto con sus test unitarios usando Jest

## Enviar el codigo fuente junto con las instrucciones de como correr las apps y los test.

## Opcional

- Usar Docker o Docker Compose para correr las apps
- Entregar el codigo en un repo git *

## Requerimientos

Tener instalado Node 8 y NPM 6.

## Instruciones

1. Clonar esta repo y ubicarse en el directorio clonado.
2. Correr el comando : ```npm install```
3. Correr el comando : ```npm start```. Esto iniciara la app.
4. Correr el comando : ```curl localhost:8080 -d 'MYCHOSENTEXT'``` donde **MYCHOSENTEXT** es cualquier text utf8 valido que se le quiera enviar a la app.
5. La app hara *eco* de lo que se le pase.
6. Para ver la informacion del request ```curl -v localhost:8080 -d 'MYCHOSENTEXT'```.

## Instrucciones para Docker

1. Clonar esta repo y ubicarse en el directorio clonado.
2. Correr el comando : ```docker build -t matiasbarrios/nodeprueba .``` ---> INCLUYENDO EL PUNTITO!!
3. Correr el comando : ```docker run -p 8080:8080 -d matiasbarrios/nodeprueba```
4. Correr el comando : ```curl localhost:8080 -d 'MYCHOSENTEXT'``` donde **MYCHOSENTEXT** es cualquier text utf8 valido que se le quiera enviar a la app.
5. La app hara *eco* de lo que se le pase.
6. Para ver la informacion del request ```curl -v localhost:8080 -d 'MYCHOSENTEXT'```.

