'use client';
import { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import FoodList from './FoodList';

import { Sawarabi_Mincho } from 'next/font/google'
const sawarabi = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: '400',
})

const foodData = [
  { name: 'Sushi', image: '/img/Sushi.png', category: 'Sushi', price: 120 },
  { name: 'Tonkotsu Ramen', image: '/img/Ramen.png', category: 'Ramen', price: 100 },
  { name: 'Donburi', image: '/img/Donburi.png', category: 'Rice', price: 120 },
  { name: 'Tempura', image: '/img/tempura.png', category: 'Snack', price: 100 },
  { name: 'Udon', image: '/img/Udon.png', category: 'Ramen', price: 120 },
  { name: 'Takoyaki', image: '/img/Takoyaki.png', category: 'Snack', price: 120 },
];

export default function FoodSection() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFoods = useMemo(() => {
    return foodData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  const categories = ['All', 'Sushi', 'Ramen', 'Rice','Snack'];

  return (
    <section id="search-food" className="text-white px-4 mb-5">
      <div className="max-w-7xl mx-auto">
      <h1 className={`${sawarabi.className} text-5xl mb-6 text-center`}>Find a menu</h1>

        <div className="mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mx-2 rounded-lg ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-black/50 text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <SearchBar onSearch={setQuery} />
        <FoodList items={filteredFoods} />
      </div>
    </section>
  );
}
