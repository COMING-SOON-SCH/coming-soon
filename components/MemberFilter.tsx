type MemberFilterProps = {
  categories: string[];
  onSelectCategory: (category: string) => void;
};

const MemberFilter: React.FC<MemberFilterProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <div className="flex justify-center flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="m-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MemberFilter;
