import cart from "./components/cart.js";
import darkMode from "./components/darkMode.js";
import loader from "./components/loader.js";
import animationNav from "./components/navbarScroll.js";
import products from "./components/products.js";
import showCart from "./components/showCart.js";
import showMenu from "./components/showMenu.js";
import getProducts from "./helpers/getProducts.js";

// Ui elements

loader()

showMenu()

showCart()

darkMode()

animationNav()
// prodcuts

const { db, printProducts } = products(await getProducts())

// Cart

cart(db, printProducts)