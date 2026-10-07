import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

function ResumeItem({ children }) {
  return <div className="flex flex-col justify-center rounded-lg bg-[#2d3542] p-8">{children}</div>;
}

function ResumeSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { resume } = portfolioData;

  return (
    <section className="portfolio-section portfolio-resume bg-[#171f2b] px-[10%] py-8 pb-[28rem] max-[992px]:px-[4%] max-[992px]:pb-[27rem] max-[768px]:pb-[25rem] max-[600px]:pb-[22rem] max-[600px]:pt-4">
      <marquee behavior="scroll" direction="left" scrollamount="5" className="block text-[1.6rem]">
        {portfolioData.maintenanceMessage}
      </marquee>
      <h2 className="text-center text-[4rem] font-semibold">Resume</h2>

      <div className="mt-4 mb-8 flex h-20 w-full">
        {resume.tabs.map((tab, index) => (
          <div
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`flex w-full cursor-pointer items-center border-b-[0.3rem] px-2 text-[2.5rem] font-medium text-[#7c8594] transition ${
              activeTab === index ? "border-[#00eeff] text-[#00eeff]" : "border-[#7c8594]"
            } ${index === 1 ? "justify-center" : index === 2 ? "justify-end" : "justify-start"}`}
          >
            <h3>{tab}</h3>
          </div>
        ))}
      </div>

      {activeTab === 0 && (
        <div className="tab-grid-active grid max-h-[calc(100vh-20rem)] grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 overflow-y-auto overflow-x-hidden pr-1">
          {resume.expertise.map((item) => (
            <ResumeItem key={item.title}>
              <h4 className="mb-1 text-[1.7rem] font-normal text-[#00eeff]">{item.label}</h4>
              <h4 className="text-[2.3rem] font-semibold leading-tight">{item.title}</h4>
              <p className="mt-4 text-[1.6rem] leading-relaxed">{item.description}</p>
            </ResumeItem>
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div className="tab-grid-active grid max-h-[calc(100vh-20rem)] grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 overflow-y-auto overflow-x-hidden pr-1">
          {resume.skills.map((skill) => (
            <ResumeItem key={skill.label}>
              <div className="flex flex-col items-center">
                <i className={`${skill.icon} text-[8rem] transition duration-300 hover:text-[#00eeff]`} />
                <p className="mt-0 text-center text-[1.6rem]">{skill.label}</p>
                {skill.secondLabel && <p className="mt-0 text-center text-[1.6rem]">{skill.secondLabel}</p>}
              </div>
            </ResumeItem>
          ))}
        </div>
      )}

      {activeTab === 2 && (
        <div className="tab-grid-active grid max-h-[calc(100vh-20rem)] grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 overflow-y-auto overflow-x-hidden pr-1">
          {resume.education.map((item) => (
            <ResumeItem key={`${item.title}-${item.period}`}>
              <h4 className="mb-1 text-[1.7rem] font-normal text-[#00eeff]">{item.period}</h4>
              <h4 className="text-[2.3rem] font-semibold leading-tight">{item.title}</h4>
              <h4 className="relative ml-8 mt-2 text-[1.7rem] font-normal leading-relaxed before:absolute before:-left-8 before:top-1/2 before:h-4 before:w-4 before:-translate-y-1/2 before:rounded-full before:bg-[#00eeff]">
                {item.institute}
              </h4>
              <p className="mt-4 text-[1.6rem] leading-relaxed">{item.description}</p>
            </ResumeItem>
          ))}
        </div>
      )}
    </section>
  );
}

export default ResumeSection;
