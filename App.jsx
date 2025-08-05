// // App.jsx
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [input, setInput] = useState('');
//   const [bgClass, setBgClass] = useState('default');
//   const [weatherIcon, setWeatherIcon] = useState('🌤️');

//   async function handleWeather() {
//     const API_KEY = '4400e6de8401c3611882a18f1dd5fdee';
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;
//     const result = await fetch(url);
//     const response = await result.json();

//     if (response.cod === 200) {
//       setWeather(response);
//       updateBackgroundAndIcon(response.weather[0].main);
//     } else {
//       alert('City not found');
//     }
//   }

//   function updateBackgroundAndIcon(condition) {
//     const conditionLower = condition.toLowerCase();

//     if (conditionLower.includes('cloud')) {
//       setBgClass('cloudy');
//       setWeatherIcon('☁️');
//     } else if (conditionLower.includes('rain')) {
//       setBgClass('rainy');
//       setWeatherIcon('🌧️');
//     } else if (conditionLower.includes('clear')) {
//       setBgClass('sunny');
//       setWeatherIcon('☀️');
//     } else if (conditionLower.includes('snow')) {
//       setBgClass('snowy');
//       setWeatherIcon('❄️');
//     } else if (
//       conditionLower.includes('fog') ||
//       conditionLower.includes('mist') ||
//       conditionLower.includes('haze')
//     ) {
//       setBgClass('foggy');
//       setWeatherIcon('🌫️');
//     } else {
//       setBgClass('default');
//       setWeatherIcon('🌤️');
//     }
//   }

//   return (
//     <div className={`weather-container ${bgClass}`}>
//       <div className="weather-box">
//         <h1
//           className="weather-heading"
//           style={{ color: bgClass === 'snowy' ? '#000' : '#fff' }}
//         >
//           {weatherIcon} Weather App
//         </h1>

//         <input
//           className="input-box"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           type="text"
//           placeholder="Enter city name"
//         />

//         <button className="weather-button" onClick={handleWeather}>
//           Get Weather
//         </button>

//         {weather && (
//           <div className="weather-result">
//             <p className="city-name">{weather.name}</p>
//             <p className="temp">
//               🌡️ Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C
//             </p>
//             <p className="desc">
//               Weather: {weatherIcon} {weather.weather[0].description}
//             </p>
//             <p className="humidity">💧 Humidity: {weather.main.humidity}%</p>
//             <p className="wind">💨 Wind Speed: {weather.wind.speed} m/s</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState([]);

//   async function fetchData() {
//     const result = await fetch('https://fakestoreapi.com/products');
//     const response = await result.json();
//     setData(response);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function addToCart(product) {
//     const exists = cart.find((item) => item.id === product.id);
//     if (exists) {
//       alert("Product is already in the cart");
//     } else {
//       setCart([...cart, product]);
//     }
//   }

//   return (
//     <div className="container">
//       <h1 className="main-heading">🛒 FakeStore</h1>
//       <div className="products">
//         {data.map((item) => (
//           <div key={item.id} className="product-card">
//             <img src={item.image} alt={item.title} className="product-image" />
//             <h3 className="product-title">{item.title}</h3>
//             <h4 className="product-price">${item.price}</h4>
//             <button className="add-btn" onClick={() => addToCart(item)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="cart-section">
//         <h2 className="cart-heading">🛍 Cart Details</h2>
//         <p className="cart-count">Items in cart: {cart.length}</p>
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-card">
//               <img src={item.image} alt={item.title} className="cart-image" />
//               <h3 className="cart-title">{item.title}</h3>
//               <h4 className="cart-price">${item.price}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './index.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState([]);

//   async function fetchData() {
//     const result = await fetch('https://fakestoreapi.com/products');
//     const response = await result.json();
//     setData(response);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function addToCart(product) {
//     const exists = cart.find((item) => item.id === product.id);
//     if (!exists) {
//       setCart([...cart, product]);
//     }
//   }

//   function isInCart(productId) {
//     return cart.some((item) => item.id === productId);
//   }

//   return (
//     <div className="container">
//       <h1 className="main-heading">🛒 FakeStore</h1>
//       <div className="products">
//         {data.map((item) => (
//           <div key={item.id} className="product-card">
//             <img src={item.image} alt={item.title} className="product-image" />
//             <h3 className="product-title">{item.title}</h3>
//             <h4 className="product-price">${item.price}</h4>
//             {isInCart(item.id) ? (
//               <button className="added-btn" disabled>✔ Added</button>
//             ) : (
//               <button className="add-btn" onClick={() => addToCart(item)}>
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="cart-section">
//         <h2 className="cart-heading">🛍 Cart Details</h2>
//         <p className="cart-count">Items in cart: {cart.length}</p>
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-card">
//               <img src={item.image} alt={item.title} className="cart-image" />
//               <h3 className="cart-title">{item.title}</h3>
//               <h4 className="cart-price">${item.price}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState([]);

//   async function fetchData() {
//     const result = await fetch('https://fakestoreapi.com/products');
//     const response = await result.json();
//     setData(response);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function addToCart(product) {
//     const exists = cart.find((item) => item.id === product.id);
//     if (!exists) {
//       setCart([...cart, product]);
//     }
//   }

//   function isInCart(productId) {
//     return cart.some((item) => item.id === productId);
//   }

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

//   return (
//     <div className="container">
//       <h1 className="main-heading">🛒 FakeStore</h1>
//       <div className="products">
//         {data.map((item) => (
//           <div key={item.id} className="product-card">
//             <img src={item.image} alt={item.title} className="product-image" />
//             <h3 className="product-title">{item.title}</h3>
//             <h4 className="product-price">${item.price}</h4>
//             {isInCart(item.id) ? (
//               <button className="added-btn" disabled>✔ Added</button>
//             ) : (
//               <button className="add-btn" onClick={() => addToCart(item)}>
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="cart-section">
//         <h2 className="cart-heading">🛍 Cart Details</h2>
//         <p className="cart-count">Items in cart: {cart.length}</p>
//         <p className="cart-total">Total Price: ${totalPrice}</p>
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-card">
//               <img src={item.image} alt={item.title} className="cart-image" />
//               <h3 className="cart-title">{item.title}</h3>
//               <h4 className="cart-price">${item.price}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchData() {
    const result = await fetch('https://fakestoreapi.com/products');
    const response = await result.json();
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    }
  }

  function isInCart(productId) {
    return cart.some((item) => item.id === productId);
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="container">
      {/* Left Side - Products */}
      <div className="products-container">
        <h1 className="main-heading">🛒 FakeStore</h1>
        <div className="products">
          {data.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} className="product-image" />
              <h3 className="product-title">{item.title}</h3>
              <h4 className="product-price">${item.price}</h4>
              {isInCart(item.id) ? (
                <button className="added-btn" disabled>✔ Added</button>
              ) : (
                <button className="add-btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Cart Sidebar */}
      <div className="cart-section">
        <h2 className="cart-heading">🛍 Cart</h2>
        <p className="cart-count">Items: {cart.length}</p>
        <p className="cart-total">Total: ${totalPrice}</p>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.title} className="cart-image" />
              <h3 className="cart-title">{item.title}</h3>
              <h4 className="cart-price">${item.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


