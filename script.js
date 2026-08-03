// Product data
  const products = [
    {name:"Apple iPhone 15 Pro Max (256GB)", price:"₦1,350,000", img:"https://images.unsplash.com/photo-1695048065131-1a05e0b3c3a3?w=300&q=80"},
    {name:"HP Pavilion 15 Laptop (12th Gen Intel i5)", price:"₦650,000", img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&q=80"},
    {name:"Samsung Galaxy Watch 6 (44mm)", price:"₦250,000", img:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300&q=80"},
    {name:"Sony WH-1000XM5 Wireless Headphones", price:"₦320,000", img:"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&q=80"},
    {name:"Nike Air Force 1 '07 Men's Shoes", price:"₦120,000", img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&q=80"},
    {name:"Gucci Ophidia GG Shoulder Bag", price:"₦850,000", img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80"}
  ];

  const categories = [
    {name:"Phones & Tablets", icon:"📱"},
    {name:"Laptops & Computers", icon:"💻"},
    {name:"Fashion", icon:"👗"},
    {name:"Shoes", icon:"👟"},
    {name:"Smart Watches", icon:"⌚"},
    {name:"Home Appliances", icon:"🏠"},
    {name:"Gaming", icon:"🎮"},
    {name:"Beauty & Health", icon:"💄"},
    {name:"Accessories", icon:"🎒"}
  ];

  const productsGrid = document.getElementById('productsGrid');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="wish">♡</div>
      <div class="thumb"><img src="${p.img}" alt="${p.name}"></div>
      <h5>${p.name}</h5>
      <div class="price">${p.price}</div>
      <button class="buy-btn">🛒 Buy Now</button>
    `;
    productsGrid.appendChild(card);
  });

  const catGrid = document.getElementById('catGrid');
  categories.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `<div class="ci">${c.icon}</div><span>${c.name}</span>`;
    catGrid.appendChild(card);
  });

  // Wishlist toggle
  document.addEventListener('click', e => {
    if (e.target.classList.contains('wish')) {
      e.target.textContent = e.target.textContent === '♡' ? '♥' : '♡';
      e.target.style.color = e.target.textContent === '♥' ? '#ff3b30' : '';
    }
  });

  // Dark mode toggle (demo)
  const darkSwitch = document.getElementById('darkSwitch');
  darkSwitch.addEventListener('click', () => {
    darkSwitch.classList.toggle('on');
    document.body.classList.toggle('dark-mode');
  });

  // Buy now demo alert
  document.addEventListener('click', e => {
    if (e.target.classList.contains('buy-btn')) {
      const name = e.target.closest('.product-card').querySelector('h5').textContent;
      alert(`Added "${name}" to cart!`);
    }
  });
