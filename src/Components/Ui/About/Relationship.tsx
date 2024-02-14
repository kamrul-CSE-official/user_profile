import { FaHeart } from "react-icons/fa";
import { TabContents } from "../../Share/TabContents";

const relationShipData = [
  {
    icon: <FaHeart className="text-gray-500" size={25} />,
    text: "Single",
  },
];

export default function Relationship() {
  return (
    <div>
      <p className="text-2xl font-semibold my-2">Overview</p>
      <div className="space-y-3">
        {relationShipData.map((item, index) => (
          <TabContents key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}
