import { MdBloodtype } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import { TabContents } from "../../Share/TabContents";

const aboutYouData = [
  {
    icon: <MdBloodtype className="text-gray-500" size={25} />,
    text: "O+",
  },
  {
    icon: <ImQuotesLeft className="text-gray-500" size={25} />,
    text: "I Want to sleep at least for one night in my life without any stress, any tense, any bad dreams, any issues - just pure sleep for one night only! i restlessly want it..!",
  },
];

export default function You() {
  return (
    <div>
      <p className="text-2xl font-semibold my-2">About you</p>
      <div className="space-y-3">
        {aboutYouData.map((item, index) => (
          <TabContents key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}
