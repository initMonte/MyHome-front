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
- Agregada libreria de Splash e implementada
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
- Modificaciones al styling de los bottomNav y topNav
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
- Implementado Delete user
- Implementando que usuario quede loggeado
- Implementando endpoint a flujo de PassRecovery
- Terminado flujo PassRecovery y mejorado flujo Register
- Empezando integracion de Publicaciones con el back
- Implementado get Avatar, guardado de la imagen, y visualizacion en el perfil
- Integracion completa de Publicacion X
- Re-implemetando visualizacion de imagen de Avatar en todo el perfil, para Me y de otros usuarios cuando entras a una propiedad
- Implementacion de Delete user
- Implementando creacion de Propiedades
- Implementado Login y Logout de Google para usuarios
- Implementada navegacion de User
- Creadas ventanas de perfil en usuario y de favoritos
- Creadas ventanas de PublicacionX
- Endpoint loginGoogle
- Componentes starSelector y starShow
- Modificaciones en ventanas varias de la parte de PublicacionX
- Creada pantalla de Filtros de Busqueda
- Modificada la navegacion levemente
- Ahora se puede loguear, desloguear, eliminar cuenta, y hacer update de cuenta de usuarios normales
- Creadas llamadas a endpoints de Contacto y el reducer de Contacto
- Modificado Login a su version "final"
- Creada logica para que automaticamente te lleve al landing correspondiente a tu tipo de usuario si estas logueado
- Corregido bug de navegacion
- Ventanas de Home, Favoritos, Consultas, ConsultaX, Consultar, Reservar hechas
- Ventana de Vistias Programadas y VisitaX
- Ventanas del lado inmobiliaria de Consultas, Visitas, ConsultasX, VisitasX
- Ventana de Reservas
- Calification endpoints y reducer
- Ventanas ver calificaciones en usuario e inmobiliaria
- Implementado autocomplete en Publicar y en editar
- Implementada ubicacion en Home de usuario + get de propiedades cercanas
- Corregido bug de n° periodico en calificaciones
- Corregido bug al crear contacto de tipo question
- Corregido bug de "nombre largo" en las cardStates en varios sitios
- Creada llamada de getEstatesFiltered e implementada en pantalla de Filtrar
- Arreglado bug en PublicacionX de usuario cuando la inmobiliaria no tenia ninguna calificacion
- Corregidas varias pantallas el texto que mostraban cuando no se encontraba una propiedad o calificaciones
- Corregida llamada a endpoint de filtrar propiedades
- Corregido bug del input de Google Autocomplete
- Modificaciones leves en Publicar y en Filtros en la seccion de "direccion"
- Creadas actions para guardar "el filtro" en estate slice
- Implementada logica para controlar home desde getNear o getFiltered
- Cambiada la card de Consultas y VisitasProgramadas en usuario e inmobiliaria para facilitar el flujo
- Implementado modal en Home que aparece cuando esta la ubicacion apagada
- Corregido bug cuando el nombre es muy largo en Reservas
- Corregido bug del Home que no aparecia la imagen de que no hay propiedades cercanas en ciertas ocasiones
- Corregida posicion de "extras" en publicar y editar cuando hacen "wrap"
- Corregido bug de que no se actualizaban las estrellas de la inmobiliaria despues de hacer una reserva
- Corregido bug de update perfil en usuario
- Corregido texto de peso y dolar en Contactar
- Corregido texto de expensas peso/dolar en Contactar y Reservar
- Agregado manejo en front de la info ficticia "enviada" en reservar
- Agregado boton de 0 ambientes, dormitorios y baños en Publicar, Editar y Filtro
- Ahora se puede no seleccionar nada en filtros en ambientes, dormitorios, bañor y currency para no filtrar por esos
