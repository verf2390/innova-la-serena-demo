import { categories, type ProductCategory } from "@/data/products";

type FilterValue = "Todos" | ProductCategory;

type CategoryFilterProps = {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
};

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full border px-4 py-2 text-sm transition ${active === category ? "border-brand-700 bg-brand-700 text-white" : "border-rose-200 bg-white text-zinc-600 hover:border-brand-500 hover:text-brand-700"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
