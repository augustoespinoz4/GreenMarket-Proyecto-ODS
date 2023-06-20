// Variables globales
var cartItems = [];

// Función para abrir/cerrar el carrito.
function toggleCart() {
    var cartContainer = document.querySelector('.cart-container');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
}

// Función para guardar los datos del carrito en localStorage
function saveCartToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Función para cargar los datos del carrito desde localStorage
function loadCartFromLocalStorage() {
  var cartItemsData = localStorage.getItem('cartItems');
  if (cartItemsData) {
    cartItems = JSON.parse(cartItemsData);
    updateCart();
  }
}

// Llamada a la función para cargar los datos del carrito al cargar la página
loadCartFromLocalStorage();

// Función para agregar un producto al carrito
function addToCart(product) {
  cartItems.push(product);
  updateCart();
  saveCartToLocalStorage();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
  saveCartToLocalStorage();
}

// Función para actualizar el contenido del carrito
function updateCart() {
  var cartItemsList = document.querySelector('.cart-items');
  var cartTotal = document.getElementById('cart-total');
  var cartEmpty = document.querySelector('.cart-empty');

  cartItemsList.innerHTML = '';
  var total = 0;

  if (cartItems.length === 0) {
    cartEmpty.style.display = 'block';
  } else {
    cartEmpty.style.display = 'none';

    cartItems.forEach(function (item, index) {
      var productTotal = item.price * item.quantity;
      total += productTotal;

      var cartItem = document.createElement('li');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = item.name + ' - Cantidad: ' + item.quantity + ' - $' + productTotal.toFixed(2);

      var removeButton = document.createElement('button');
      removeButton.textContent = 'Eliminar';
      removeButton.addEventListener('click', function () {
        removeFromCart(index);
      });

      cartItem.appendChild(removeButton);
      cartItemsList.appendChild(cartItem);
    });
  }

  cartTotal.textContent = total.toFixed(2);
}

// Event listener para agregar un producto al carrito al hacer clic en el botón correspondiente
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var productId = event.target.getAttribute('data-product-id');
    var quantityInput = event.target.nextElementSibling;
    var quantity = parseInt(quantityInput.value);
    var product = getProductDetails(productId, quantity);
    addToCart(product);
  });
});

// Función para obtener los detalles del producto por su ID y cantidad seleccionada por el usuario
function getProductDetails(productId, quantity) {


  var productData = {
    1: { name: 'Maquina de Afeitar', price: 1199.99, quantity: quantity },
    2: { name: 'Jabon Artesanal Natural', price: 1249.99, quantity: quantity },
    3: { name: 'Cepillo de Bambú', price: 1249.99, quantity: quantity },
    4: { name: 'Esponja Facial', price: 1249.99, quantity: quantity },
    5: { name: 'Pasta de Dientes', price: 1249.99, quantity: quantity },
    6: { name: 'Protector Solar', price: 1249.99, quantity: quantity },
    16: { name: 'Tónico Agua Termanl', price: 1249.99, quantity: quantity },
    17: { name: 'Cepillo Corporal', price: 1249.99, quantity: quantity },
  };

  return productData[productId];
}