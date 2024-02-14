import { MdPublic } from "react-icons/md";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

type OverviewItemProps = {
    icon: JSX.Element;
    text: string;
  };
export const TabContents: React.FC<OverviewItemProps> = ({ icon, text }) => (
  <div className="flex items-center justify-between">
    <p className="flex items-center gap-3 text-wrap">
      {icon} {text}
    </p>
    <p className="flex items-center gap-5">
      <MdPublic />
      <span className="bg-transparent border-2 text-black p-2 rounded-full cursor-pointer">
        <PiDotsThreeOutlineVerticalLight />
      </span>
    </p>
  </div>
);