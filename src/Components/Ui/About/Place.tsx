import { TabContents } from "../../Share/TabContents";
import { IoLocationSharp } from "react-icons/io5";


const overviewData = [
  {
    icon: <IoLocationSharp className="text-gray-500" size={25} />,
    text: "Current City Dhaka, Gazipur",
  },
  {
    icon: <IoLocationSharp className="text-gray-500" size={25} />,
    text: "From Chattogram, Sonapur",
  },
];
export default function Place() {
  return (
    <div className="space-y-3">
    {overviewData.map((item, index) => (
      <TabContents key={index} icon={item.icon} text={item.text} />
    ))}
  </div>
  )
}
