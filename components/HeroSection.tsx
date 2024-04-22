const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-800 text-white py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-xl font-bold mb-2 md:mb-6 md:text-4xl ">
          Development Team for SoonChunHyang University
        </h1>
        <p className="md:text-xl mb-6">
          순천향대학교 IT 서비스 개발 동아리 COMING SOON
        </p>
        <button className="text-xs bg-base border hover:bg-blue-700 text-white md:font-bold md:text-md py-2 px-4 ">
          COMING SOON 소개
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
