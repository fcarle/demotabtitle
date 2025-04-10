export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 149.99,
    image: 'https://placehold.co/600x400/3b82f6/FFFFFF?text=Headphones',
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation and premium sound.',
    features: [
      'Active noise cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable ear cups',
      'Bluetooth 5.0'
    ]
  },
  {
    id: '2',
    name: 'Stylish Smartwatch',
    price: 199.99,
    image: 'https://placehold.co/600x400/3b82f6/FFFFFF?text=Smartwatch',
    category: 'Electronics',
    description: 'Track your fitness and stay connected with this stylish smartwatch.',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      '7-day battery life',
      'Smartphone notifications'
    ]
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://placehold.co/600x400/8b5cf6/FFFFFF?text=T-Shirt',
    category: 'Clothing',
    description: 'Comfortable and eco-friendly organic cotton t-shirt.',
    features: [
      '100% organic cotton',
      'Sustainably sourced',
      'Comfortable fit',
      'Machine washable',
      'Available in multiple colors'
    ]
  },
  {
    id: '4',
    name: 'Premium Coffee Maker',
    price: 89.99,
    image: 'https://placehold.co/600x400/22c55e/FFFFFF?text=Coffee+Maker',
    category: 'Home',
    description: 'Brew delicious coffee at home with this premium coffee maker.',
    features: [
      'Programmable timer',
      '12-cup capacity',
      'Auto shut-off',
      'Built-in grinder',
      'Easy to clean'
    ]
  },
  {
    id: '5',
    name: 'Leather Backpack',
    price: 79.99,
    image: 'https://placehold.co/600x400/f59e0b/FFFFFF?text=Backpack',
    category: 'Accessories',
    description: 'Stylish and durable leather backpack perfect for daily use.',
    features: [
      'Genuine leather',
      'Multiple compartments',
      'Laptop sleeve',
      'Adjustable straps',
      'Water-resistant'
    ]
  },
  {
    id: '6',
    name: 'Fitness Tracker',
    price: 59.99,
    image: 'https://placehold.co/600x400/3b82f6/FFFFFF?text=Fitness+Tracker',
    category: 'Electronics',
    description: 'Track your fitness goals with this waterproof fitness tracker.',
    features: [
      'Step counter',
      'Sleep monitoring',
      'Heart rate tracking',
      'Waterproof design',
      '7-day battery life'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
}; 