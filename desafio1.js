class ProductManager {
    constructor() {
      this.products = [];
    }
  
    agregarProducto(title, description, price, thumbnail, code, stock) {
      const producto = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      
      if (
        title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined
      ) {
        return console.log("Todos los campos son obligatorios");
      }
  
      let condition = this.products.find((producto) => producto.code === code);
      if (condition) {
        return console.log("El producto ya existe");
      } else {
        this.products.push(producto);
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let myID = parseInt(id);
      let miPRoducto = null;
      this.products.forEach((producto) => {
        if (producto.id === myID) {
          miPRoducto = producto;
        }
      });
      if (miPRoducto === null) {
        return console.log("No existe el producto");
      } else {
        return miPRoducto;
      }
    }
  }
  
  const productManager = new ProductManager();
  productManager.agregarProducto(
    "Chapita identificadora Forma de golden",
    "chapita realizada en 3d",
    800,
    "https://http2.mlstatic.com/D_NQ_NP_619390-MLA51638340116_092022-O.webp",
    "1",
    1000
  );
  productManager.agregarProducto(
    "Chapita identificadora Forma de Huellita",
    "chapita realizada en 3d",
    800,
    "https://http2.mlstatic.com/D_NQ_NP_784710-MLA51638182660_092022-O.webp",
    "2",
    1000
  );
  
  console.log(productManager.getProducts());
  
  console.log("busqueda de producto", productManager.getProductById(1));