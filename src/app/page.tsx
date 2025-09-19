import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import Image from "next/image";
import { Star } from "lucide-react";
import { experiences, portfolioData, reviews } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col w-full min-h-[500px] px-4 sm:px-6 md:px-8 gap-8 items-center justify-center mt-6">
        <div className="relative w-full flex flex-col items-center justify-center max-w-4xl">
          <div className="flex flex-col items-center justify-center px-4 sm:px-6">
            <ClientOnly>
              <button className="h-[40px] px-6 py-2 rounded-full border border-black flex items-center justify-center bg-white mb-8">
                Hello!
              </button>
            </ClientOnly>
            
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center gap-2">
                <CustomeText title="I'm" className="text-black font-semibold text-4xl md:text-6xl" />
                <CustomeText title="Abhiruchi" className="text-black font-semibold text-4xl md:text-6xl" />
              </div>
              <CustomeText title="Professional Designer" className="text-black font-semibold text-4xl md:text-6xl text-center" />
            </div>
          </div>

          <div className="relative w-full max-w-[600px] aspect-[3/2] flex items-center justify-center">
            <div className="absolute bottom-0 z-0 w-[90%] aspect-[2/1] overflow-hidden flex items-center justify-center">
              <div className="absolute w-full h-full bg-gray-200 rounded-t-full" />
            </div>

            <Image
              src="/girl.svg"
              alt="abhiruchi"
              width={600}
              height={400}
              className="relative z-20 w-full h-auto object-contain filter grayscale"
              priority
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="black" stroke="black" />
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black">10 Years</h1>
            <p className="text-sm text-gray-600">Experience</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="relative flex flex-col w-full gap-12 items-center px-4 sm:px-6 lg:px-8 py-16 bg-black rounded-3xl my-16">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="flex gap-2">
            <CustomeText title="My" className="font-medium text-3xl lg:text-4xl text-white" />
            <CustomeText title="Services" className="font-medium text-3xl lg:text-4xl text-white" />
          </div>
          <p className="w-full max-w-2xl font-medium text-lg text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {['UI/UX Design', 'Web Development', 'Brand Identity', 'Mobile Apps', 'Consulting', 'Prototyping'].map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-semibold text-black mb-2">{service}</h3>
              <p className="text-gray-600">Professional {service.toLowerCase()} services</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full flex flex-col items-center mb-12">
          <div className="flex gap-2 text-center">
            <CustomeText title="Work" className="font-medium text-4xl lg:text-5xl text-black" />
            <CustomeText title="Experience" className="font-medium text-4xl lg:text-5xl text-black" />
          </div>
        </div>

        <div className="w-full max-w-4xl">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0 border-l-2 border-black pl-6 relative">
              <div className="absolute -left-2 top-2 w-4 h-4 bg-black rounded-full" />
              <div className="bg-gray-50 p-6 rounded-lg">
                <CustomeText title={exp.company} className="font-semibold text-black text-xl mb-1" />
                <CustomeText title={exp.duration} className="text-gray-600 text-sm mb-2" />
                <CustomeText title={exp.role} className="font-semibold text-black text-lg mb-2" />
                {exp.desc && (
                  <CustomeText title={exp.desc} className="text-gray-600 text-sm leading-relaxed" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="w-full flex flex-col items-center gap-6 mb-12">
          <div className="flex gap-2 text-center">
            <CustomeText title="My" className="font-semibold text-4xl lg:text-5xl text-black" />
            <CustomeText title="Portfolio" className="font-semibold text-4xl lg:text-5xl text-black" />
          </div>
        </div>

        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.slice(0, 4).map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative flex flex-col w-full items-center px-4 sm:px-6 lg:px-8 py-16 bg-black">
        <div className="flex flex-col w-full items-center gap-4 mb-12">
          <div className="flex gap-2 text-center">
            <CustomeText title="Client" className="font-medium text-3xl lg:text-4xl text-white" />
            <CustomeText title="Testimonials" className="font-medium text-3xl lg:text-4xl text-white" />
          </div>
          <p className="w-full max-w-2xl text-lg text-white text-center">
            What my clients say about working with me
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="black" stroke="black" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm">{review.text}</p>
              <div>
                <h4 className="font-semibold text-black">{review.name}</h4>
                <p className="text-gray-600 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 gap-8">
        <div className="w-full max-w-3xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Let's Work Together"
            className="font-semibold text-4xl lg:text-5xl text-black"
          />
          <p className="text-gray-600 text-lg">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="w-full max-w-md flex items-center gap-4 px-4 py-3 rounded-full border-2 border-black bg-white">
          <ClientOnly>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none bg-transparent placeholder:text-gray-500"
            />
            <button className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
              Contact
            </button>
          </ClientOnly>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-black">
          <div className="flex items-center gap-2">
            <Star size={16} />
            4.9 Average Rating
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} />
            25+ Projects Completed
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} />
            Certified Designer
          </div>
        </div>
      </div>
    </div>
  );
}