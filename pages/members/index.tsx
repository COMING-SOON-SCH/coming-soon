import React, { useState } from "react";
import MemberCard from "@/components/MemberCard";
import MemberFilter from "@/components/MemberFilter";

const MembersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const members = [
    {
      name: "임채민",
      sub: "Chaemin Lim",
      github: "https://github.com/Antraxmin",
      profilePic: "/path-to-image",
      status: "Core",
      skills: ["Leader", "full-stack"],
    },
    {
      name: "황다경",
      sub: "Dakyung Hwang",
      github: "https://github.com/monixc",
      profilePic: "/path-to-image",
      status: "Core",
      skills: ["FE", "Designer"],
    },
    {
      name: "이동규",
      sub: "Dongkyu Lee",
      github: "https://github.com/LDK1009",
      profilePic: "/path-to-image",
      status: "Core",
      skills: ["Front-End"],
    },
    {
      name: "김민아",
      sub: "Mina Kim",
      github: "https://github.com/Ogu1208",
      profilePic: "/path-to-image",
      status: "Core",
      skills: ["Back-End"],
    },
    {
      name: "심주흔",
      sub: "Juhuen Shim",
      github: "https://github.com/tejava7177",
      profilePic: "/path-to-image",
      status: "Core",
      skills: ["Back-End"],
    },
  ];

  const categories = ["All", "Core", "Newbie"];

  return (
    <div className="p-6 bg-gray-100">
      <div className="text-3xl font-bold text-center my-8">Members</div>
      <MemberFilter
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {members
          .filter(
            (member) =>
              selectedCategory === "All" || member.status === selectedCategory
          )
          .map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
      </div>
    </div>
  );
};

export default MembersPage;
