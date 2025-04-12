'use client';
type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Find a menu..."
        className="w-full px-4 py-2 rounded-xl bg-black/50"
      />
    </div>
  );
}
