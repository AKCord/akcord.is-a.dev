import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
const ContactLink = ({ icon: Icon, text, link, size = 30 }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl transition-colors duration-100 font-semibold text-gray-400 hover:text-gray-200"
    >
      <div className="flex items-start gap-4">
        <Icon
          size={size}
          className="text-gray-400 group-hover:text-gray-200 transition-colors"
        />
        <span className="break-all">{text}</span>
      </div>
    </a>
  );
};

const ContactContent = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-light text-white">let's connect</h2>
        <div className="w-35 h-0.5 bg-gradient-to-r from-white to-gray-400 mt-4"></div>
        <p className="text-gray-400 text-lg max-w-2xl">
          Ready to bring your ideas to life?
        </p>
      </div>
      <div className=" md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="pt-8 space-y-4">
              <ContactLink
                icon={Mail}
                text="shrestha.aeniv@gmail.com"
                link="mailto:shrestha.aeniv@gmail.com"
              />
              <ContactLink
                icon={FaDiscord}
                text="akcord"
                link="https://discord.com/users/827062335620382751"
              />
              <ContactLink
                icon={TbBrandGithubFilled}
                text="akcord"
                link="https://github.com/akcord"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
