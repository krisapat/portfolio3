import FoodCard from './FoodCard';

type Food = {
  name: string;
  image: string;
};

type Props = {
  items: Food[];
};

export default function FoodList({ items }: Props) {
  if (items.length === 0) {
    return <p className="text-white text-center">The menu you are looking for is not found</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </div>
  );
}
