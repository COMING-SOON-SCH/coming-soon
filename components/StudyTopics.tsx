const StudyTopics: React.FC = () => {
  const topics = [
    {
      title: "첫번째 교육 주제",
      description: "첫번째 교육 주제에 대한 설명입니다...",
    },
    {
      title: "두번째 교육 주제",
      description: "두번째 교육 주제에 대한 설명입니다...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-3xl font-bold text-center mb-8">Topics</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <div key={index} className="border p-4">
            <div className="font-bold">{topic.title}</div>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyTopics;
