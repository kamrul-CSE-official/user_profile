import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap, FaHeart } from "react-icons/fa";
import { IoHomeOutline, IoLocationSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TabContents } from "../../Share/TabContents";



const overviewData = [
  {
    icon: <MdOutlineWork className="text-gray-500" size={25} />,
    text: "Web development at Chittagong October 26, 2021 to present",
  },
  {
    icon: <FaGraduationCap className="text-gray-500" size={25} />,
    text: "Studied B.Sc in CSE at Dhaka International University - PCIU Started in 2019",
  },
  {
    icon: <IoHomeOutline className="text-gray-500" size={25} />,
    text: "Lives in Dhaka",
  },
  {
    icon: <IoLocationSharp className="text-gray-500" size={25} />,
    text: "From Chattogram",
  },
  {
    icon: <FaHeart className="text-gray-500" size={25} />,
    text: "Single",
  },
  {
    icon: <BsTelephone className="text-gray-500" size={25} />,
    text: "01823855998",
  },
];

const Overview: React.FC = () => (
  <div className="space-y-3">
    {overviewData.map((item, index) => (
      <TabContents key={index} icon={item.icon} text={item.text} />
    ))}
  </div>
);

export default Overview;
