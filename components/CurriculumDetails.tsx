const CurriculumDetails: React.FC = () => {
  const courses = [
    {
      title: "초급",
      details: ["git이란?", "커맨드 창 사용법", "git gui", "Markdown"],
    },
    { title: "고급", details: ["고급 주제 1", "고급 주제 2"] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-3xl font-bold text-center mb-8">CURRICULUM</div>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="p-4 border">
            <div className="font-bold">{course.title}</div>
            <ul className="list-disc ml-5 mt-2">
              {course.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumDetails;
