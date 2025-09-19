import React from "react";
import { FacebookIcon, YoutubeIcon, InstagramIcon, TwitterIcon, MessageCircle } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import CustomeText from "./ui/CustomeText";
import Link from "next/link";
import ClientOnly from "./ui/ClientOnly";

const Footer = () => {
    const navigation = ["Home", "About", "Service", "Resume", "Project", "Contact"];
    const iconsAndUrl = [
        { icon: FacebookIcon, url: "https://facebook.com" },
        { icon: YoutubeIcon, url: "https://youtube.com" },
        { icon: MessageCircle, url: "https://whatsapp.com" },
        { icon: InstagramIcon, url: "https://instagram.com" },
        { icon: TwitterIcon, url: "https://twitter.com" },
    ];

    const contact = [
        "+91 9874563210",
        "hello@gmail.com",
        "hello.com"
    ]

    return (
        <footer className="w-full min-h-[300px] px-4 sm:px-6 lg:px-8 py-8 flex flex-col bg-black rounded-t-2xl text-white justify-between">

            {/* Top Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                <h1 className="font-semibold leading-tight text-2xl lg:text-3xl text-white text-center lg:text-left">
                    Let&apos;s Connect There
                </h1>
                <ClientOnly>
                    <button className="group flex items-center justify-center gap-2 w-full sm:w-40 h-12 px-6 py-2 text-black text-base font-semibold rounded-full bg-white cursor-pointer hover:bg-gray-200 transition-colors">
                        Hire Me
                        <ArrowUpRight
                            size={20}
                            className="transition-transform duration-300 group-hover:rotate-45"
                        />
                    </button>
                </ClientOnly>
            </div>

            <div className="border border-gray-600 w-full mt-6"></div>

            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row justify-between w-full gap-8 mt-8">

                <div className="w-full lg:w-1/2 flex flex-col items-start justify-start gap-6">
                    <div className="flex gap-3 sm:gap-4 items-center flex-shrink-0 cursor-pointer">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="4" y="18" fontSize="12" fontWeight="bold" fill="black">AB</text>
                            </svg>
                        </div>
                        <span className="font-bold text-lg tracking-wide cursor-pointer">ABHIRUCHI</span>
                    </div>
                    <p className="w-full text-base text-white">Professional designer creating beautiful and functional digital experiences.</p>
                    <div className="flex gap-2 sm:gap-2.5">
                        {iconsAndUrl.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={`https://${item.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10  rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
                                >
                                    <Icon size={16} className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-[#FD853A]" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Navigation" className="text-lg font-semibold text-white" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                                className="w-8 h-8 rounded-full flex hover:scale-110 transition-transform bg-gray-800 hover:bg-gray-700 items-center justify-center"
                            <Link href={`#${key.toLowerCase()}`} key={idx} className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">
                                <Icon size={16} className="text-white" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Contact" className="text-lg font-semibold text-white" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                        {contact.map((key, idx) => (
                            <span key={idx} className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">
                                {key}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            <div className="border border-gray-600 w-full mt-8"></div>

            <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 mt-6">
                <p className="text-base text-white text-center sm:text-left">Copyright© 2025 Abhiruchi. All Rights Reserved.</p>
                <Link href={"#"} className="text-base text-white hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
