import plush from './img/plush.png';
import nushirt from './img/nushirt.png';
import adidaspolo from './img/adidaspolo.png';
import nuadidas from './img/nuadidas.png';
import tote from './img/tote2.jpg';
import tumbler from './img/tumbler.png';
import cap from './img/cap.png';
import shirt from './img/shirt.png';
import lanyard from './img/lanyard.png';
import hoodie from './img/hoodie.png';
import sticker from './img/sticker.png';

const products = [
  {
    name: 'campus-tote-bag',
    title: 'Campus Tote Bag',
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    image: tote,
    content: [
      'A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.',
      'Made with thick canvas, reinforced handles, and a clean NU print.',
      'Best for students who want one simple carry-all bag for class and after-class plans.',
    ],
  },
  {
    name: 'id-lanyard-set',
    title: 'ID Lanyard Set',
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    image: lanyard,
    content: [
      'A durable lanyard and card holder set for IDs, access cards, and small passes.',
      'The clip is easy to detach when scanning or presenting credentials.',
      'Simple enough for daily use and sturdy enough for a full semester.',
    ],
  },
  {
    name: 'stainless-tumbler',
    title: 'NU Tumbler',
    category: 'Drinkware',
    price: 'PHP 499',
    stock: 'In stock',
    image: tumbler,
    content: [
      'A double-wall tumbler built for water, coffee, or tea during long school days.',
      'The matte finish keeps the look simple while the lid helps reduce spills in your bag.',
      'Fits most side pockets and keeps drinks ready between classes.',
    ],
  },
  {
    name: 'nu-cap',
    title: 'NU Cap',
    category: 'Accessories',
    price: 'PHP 249',
    stock: 'In stock',
    image: cap,
    content: [
      'Official NU Bulldogs cap with embroidered logo, perfect for game days and campus wear.',
      'Adjustable strap fits most head sizes comfortably.',
      'Available in black and navy colorways.',
    ],
  },
  {
    name: 'hoodie-jacket',
    title: 'NU Sweatshirt',
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'In stock',
    image: hoodie,
    content: [
      'A soft everyday sweatshirt with a relaxed fit for classrooms, commute days, and weekends.',
      'Features the iconic NATIONAL UNIVERSITY print across the chest.',
      'Heavy cotton blend keeps structure while staying comfortable for regular wear.',
    ],
  },
  {
    name: 'nu-volleyball-shirt',
    title: 'NU Volleyball Shirt',
    category: 'Apparel',
    price: 'PHP 899',
    stock: 'In stock',
    image: shirt,
    content: [
      'Official NU Volleyball UAAP shirt — show your support for the Lady Bulldogs.',
      'Navy blue with bold NATIONAL UNIVERSITY VOLLEYBALL print.',
      'Comfortable cotton blend, perfect for game days and casual wear.',
    ],
  },
  {
    name: 'nu-adidas-shirt',
    title: 'NU x Adidas Shirt',
    category: 'Apparel',
    price: 'PHP 1,499',
    stock: 'In stock',
    image: nushirt,
    content: [
      'Exclusive NU x Adidas collaboration shirt featuring the Bulldog mascot on the back.',
      'Navy blue with Adidas three-stripe branding and embroidered NU shield.',
      'Premium quality sports fabric, great for training and everyday campus wear.',
    ],
  },
  {
    name: 'nu-adidas-polo',
    title: 'NU x Adidas Polo',
    category: 'Apparel',
    price: 'PHP 1,699',
    stock: 'In stock',
    image: adidaspolo,
    content: [
      'Premium NU x Adidas polo shirt with three-stripe detailing and embroidered NU crest.',
      'Navy blue pique fabric with a classic collar and button placket.',
      'Ideal for school events, presentations, and smart-casual campus days.',
    ],
  },
  {
    name: 'nu-adidas-jersey',
    title: 'NU x Adidas Jersey',
    category: 'Apparel',
    price: 'PHP 1,299',
    stock: 'Low stock',
    image: nuadidas,
    content: [
      'Official NU x Adidas training jersey with NU shield embroidered on the chest.',
      'Available in white and navy, featuring Adidas three-stripe shoulder detailing.',
      'Moisture-wicking fabric designed for training and sports activities.',
    ],
  },
  {
    name: 'bulldog-plushie',
    title: 'Bulldog Plushie',
    category: 'Collectibles',
    price: 'PHP 399',
    stock: 'In stock',
    image: plush,
    content: [
      'The official NU Bulldogs mascot plushie — a must-have for every Bulldog fan.',
      'Available in small (PHP 249) and large (PHP 399) sizes.',
      'Soft, huggable, and perfect as a desk companion or gift for NU students.',
    ],
  },
  {
    name: 'nu-sticker-pack',
    title: 'NU Sticker Pack',
    category: 'Collectibles',
    price: 'PHP 150',
    stock: 'In stock',
    image: sticker,
    content: [
      'Official NU Volleyball sticker pack with Lady Bulldogs designs.',
      'Includes foam finger, shield, oval logo, and mascot stickers.',
      'Perfect for personalizing notebooks, water bottles, and laptops.',
    ],
  },
];

export default products;