import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";

type FooterSection = {
  title: string;
  lists: string[];
};

const footerSections: FooterSection[] = [
  {
    title: "Platform",
    lists: ["Courses", "Library", "Pricing", "Enterprise"],
  },
  {
    title: "Company",
    lists: ["About", "Careers", "Blog", "Press"],
  },
  {
    title: "Resources",
    lists: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white px-6">
      <div className="flex flex-col md:flex-row space-x-4 py-8">
       <div className="flex flex-col items-center md:items-start mb-7 md:mb-0 md:w-1/3 text-[#9CA3AF]">
        <Image src="/xcrino.png" alt="Logo" width={80} height={40}   /> 
        <p className="text-sm">
          Empowering learners worldwide with <br></br> quality education and practical skills.
        </p>
      </div>
      <div className="flex justify-between md:justify-center md:space-x-[10rem]">
         {footerSections.map((section, idx) => (
          <div key={idx}
          >
            <h4 className="mb-3 text-[#FFFFFF]">{section.title}</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF] ">
              {section.lists.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
        </div>
      

       <div className="border-t border-gray-700 text-gray-400 text-sm py-6 px-6 flex flex-col md:flex-row justify-between gap-4">
        <div className="text-center md:text-left">&copy; 2025 Xcrino. All rights reserved.</div>

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-[#9CA3AF]">
          <FaTwitter size={18} />
          <FaLinkedin size={18} />
          <IoLogoGithub size={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
