import { FaGraduationCap } from "react-icons/fa";
import { TabContents } from "../../Share/TabContents";
import { RiSchoolLine } from "react-icons/ri";
import { RiCollageFill } from "react-icons/ri";

const overviewData = [
  {
    icon: <FaGraduationCap className="text-gray-500" size={25} />,
    text: "Studied B.Sc in CSE at Dhaka International University",
  },
  {
    icon: <RiCollageFill className="text-gray-500" size={25} />,
    text: "Collage BN collage",
  },
  {
    icon: <RiSchoolLine className="text-gray-500" size={25} />,
    text: "Primary School PH Amin school",
  },
];

const Education = () => {
  return (
    <div className="space-y-3">
      {overviewData.map((item, index) => (
        <TabContents key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
};

export default Education;
