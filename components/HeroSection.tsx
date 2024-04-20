const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-800 text-white py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">
          Development Team for SoonChunHyang University
        </h1>
        <p className="text-xl mb-6">
          순천향대학교 IT 서비스 개발 동아리 COMING SOON
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          COMING SOON 소개
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
