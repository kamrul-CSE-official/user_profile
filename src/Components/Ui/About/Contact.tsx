import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

import { TabContents } from "../../Share/TabContents";

const contactData = [
  {
    icon: <BsFillTelephoneFill className="text-gray-500" size={25} />,
    text: "01823855998",
  },
  {
    icon: <FaFacebook className="text-gray-500" size={25} />,
    text: "Kamrul H. Manzur",
  },
  {
    icon: <IoLogoLinkedin className="text-gray-500" size={25} />,
    text: "MD.Kamrul Hasan",
  },
];

const Contact = () => {
  return (
    <div>
      <p className="text-2xl font-semibold my-2">Contact Info</p>
      <div className="space-y-3">
        {contactData.map((item, index) => (
          <TabContents key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
