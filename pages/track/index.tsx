import StudyTopics from "@/components/StudyTopics";
import CurriculumDetails from "@/components/CurriculumDetails";
import TabSwitcher from "@/components/TabSwitcher";

const Track = () => {
  return (
    <div>
      <TabSwitcher />
      <StudyTopics />
      <CurriculumDetails />
    </div>
  );
};

export default Track;
