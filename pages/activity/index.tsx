import Navbar from "@/components/Navbar";
import React from "react";

interface YearFilterProps {
  years: number[];
  selectedYear: number;
  onSelectYear: (year: number) => void;
}

const YearFilter: React.FC<YearFilterProps> = ({
  years,
  selectedYear,
  onSelectYear,
}) => {
  return (
    <div className="flex space-x-2 mb-6">
      {years.map((year) => (
        <button
          key={year}
          className={`px-3 py-1 rounded ${
            year === selectedYear
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
          onClick={() => onSelectYear(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

interface ActivityCardProps {
  date: string;
  title: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="border-b py-4">
      <div className="mb-1 text-sm text-gray-600">{date}</div>
      <div className="text-lg font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
};

const ActivityPage: React.FC = () => {
  const years = [2024];
  const [selectedYear, setSelectedYear] = React.useState(years[0]);

  const activities = [
    {
      date: "2024-03-27",
      title: "1기 신입회원 OT",
      description:
        "동아리 소개 및 교육과정에 관련한 오리엔테이션을 진행했습니다.",
    },
    {
      date: "2024-03-04",
      title: "신입회원 모집",
      description: "COMING SOON에서 함께 성장할 분들을 모집합니다.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="text-4xl font-bold text-center my-8">Activity</div>
        <p className="text-center mb-10">
          COMING SOON에서 진행하는 활동입니다.
        </p>

        <YearFilter
          years={years}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />

        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            date={activity.date}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;
