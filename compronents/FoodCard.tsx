type Food = {
  name: string;
  image: string;
  category?: string;
  price?: number;
};

type Props = {
  food: Food;
};

export default function FoodCard({ food }: Props) {
  return (
    <div className="bg-[#5a3817] text-white rounded-lg shadow overflow-hidden">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{food.name}</h2>
        {food.price && (
          <p className="text-sm text-white">Price: {food.price} THB</p>
        )}
      </div>
    </div>
  );
}
