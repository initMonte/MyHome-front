# aplicacionesDistribuidas-frontEnd

App creada con React Native CLI

La primera vez que se ejecuta el proyecto despues de pullear se tiene que ejecutar el comando `npm install` para instalar todas las librerias nuevas

## Ejecutar App

### Metro + emulador
Para correr el Metro y el emulador junto directamente desde el VScode, ejecutar esto

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### Solo Metro
Se puede ejecutar solo el metro para luego correr la app desde otro lugar, como por ejemplo desde Android Studio

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Changelog

- Creado proyecto base con CLI
- Agregada libreria i18n para poner texto desde variables strings, y para posible multilenguaje (por ahora esta solo hecho para que funcione con español)
- Agregada libreria localize por si queremos hacer multilenguaje
- Agregadas librerias para compatibilidad con svg
- Agregado svg del logo
- Agregada libreria de navegacion
- Agregados iconos de la App
- Agregada libreria de Splash e implementada **(tuve que desactivar el "Splash automatico" de Android 12 y eso genera un pequeño retraso al inicio :c)**
- Implementando Navigation basica
- Creados componentes Button y InputText, personalizables para lo necesario segun el Figma
- Solucionado error del styles.xml que causaba crasheo con el TextInput de React Native
- Rework del Button y InputText
- Creadas pantallas de Login, LoginInmobiliaria, PasswordRecovery
- Creadas pantallas de PasswordRecoveryCode, PasswordRecoveryNewPass
- Creadas pantallas de Register, RegisterCode, RegisterSuccessful
- Agregado svg del icono de success
- Creado componente 'cardState'
- Creadas pantallas de Venta y Alquiler en Inmobiliaria
- Agregados iconos SVG varios
- Pequeñas modificaciones en Navigators y Constants
- Modificaciones al styling de los bottomNav y topNav **(Como hacer que cuando se entra a Perfil a alguna otra ventana del Stack deje de verse seleccionado el bottom nav?)**
- Creando PerfilNavigator para inmobiliaria
- Creaada ventana de Perfil
- Creadas ventanas de Consultas, Visitas Programadas y Opiniones para Inmobiliaria
- Creadas ventanas de Mis Datos, ConsultaX y VisitaProgramadaX para Inmobiliaria
- Creada navegacion para Publicacion X y agregada a las distintas ventanas de Inmobiliaria
- Creada ventana de Publicacion X de Inmobiliaria
- Navegacion para Editar Publicacion X, y conectada con Publicacion X
- Implemenado Redux para manejo global de estados y persistencia de datos
- Implementadas llamadas al servidor para Registrar usuario, acitvar Codigo de registro, Login, y algunos get
- Implementado logout de la aplicacion para borrar los datos persistentes
- Implementado Delete user **NO TERMINADO, DA ERROR**
- Implementando que usuario quede loggeado
- Implementando endpoint a flujo de PassRecovery
