import React from "react";

type MemberCardProps = {
  name: string;
  sub: string;
  github: string;
  profilePic: string;
  status: string;
  skills: string[];
};

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  sub,
  github,
  profilePic,
  status,
  skills,
}) => {
  return (
    <div className="max-w-md rounded-xl overflow-hidden shadow-lg bg-white m-6 transform transition duration-500 hover:scale-105">
      <div className="flex justify-between items-center px-6 pt-6">
        <div className="flex items-center">
          {/* <img
            className="w-24 h-24 rounded-full mr-4"
            src={profilePic}
            alt="Profile"
          /> */}
          <div>
            <div className="font-bold text-xl">{name}</div>
            <div className="text-sm text-gray-500">{sub}</div>
            <div
              className={`text-xs px-2 inline-block rounded-full ${
                status === "운영팀"
                  ? "bg-red-200 text-red-800"
                  : "bg-green-200 text-green-800"
              } mt-2`}
            >
              {status}
            </div>
          </div>
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <svg
            className="w-8 h-8 text-gray-800 hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.607-4.043-1.607-.546-1.386-1.332-1.753-1.332-1.753-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.305 3.492.997.108-.775.419-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.241 2.872.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.476 5.922.43.371.823 1.102.823 2.222 0 1.604-.014 2.898-.014 3.293 0 .32.213.694.826.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
      <div className="px-6 py-4"></div>
      <div className="px-6 pt-4 pb-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;
