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
          className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MemberFilter;
