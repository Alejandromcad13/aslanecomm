# aslanecomm

Ecommerce de comida para mascotas y ropa para mascotas

## Descripcion

E-commerce en el cual puedes filtrar los productos en base a la categoria, tambien puedes acceder a los detalles especificos de cada producto y la navegacion es dinamica en base a eso. Si eliges una categoria del menu, te mostrara solamente los productos que pertenecen a esa misma categoria y si accedes a item del menu "categorias" se mostrara una lista todos los productos disponibles.

A la hora de agregar un producto al carrito, nada mas podras agregar un maximo de productos que contiene cada producto en stock, si intentas agregar mas el sistema no permite, solamente la cantidad maxima en stock. 

Puedes agregar varios productos en un solo carrito y al darle click al carrito ver tu lista de productos agregado, cuanta cantidad de cada producto agregaste y un boton para remover productos del carrito. 

Debajo de la lista de productos esta el Checkout, en donde puedes agregar tus datos y generar una orden, la cual guarda toda la informacion del total mas los productos, en una base de datos FireBase. 

Al finalizar la compra, te muestra el checkout con la informacion de tu orden, incluyendo el ID autogenerado y tambien se habilita un boton para vaciar el carrito y volver a comprar de nuevo desde 0.


### Dependencias

- Vite - React - json loader - material UI - react-dom - react-router-dom 

- Estas fueron utilizadas mas que todo para facilitarme la parte front-end del proyecto ya que podia simplemente importar componentes desde Material UI y ahorrarme tiempo de hacer todo el CSS. Json Loader la utilice en el principio del curso para leer el json que creamos al realizar mock API calls. 

### Instalacion

- Forkear el proyecto desde aqui: https://github.com/Alejandromcad13/aslanecomm y descargarlo a la PC usando la linea de comandos Git.
- correr `npm install ` para instalar todas las dependencias

### Como ejecutar

- correr el siguiente comando en la consola:

```
npm run dev
```

- acceder al localhost creado luego de correr el comando anterior
