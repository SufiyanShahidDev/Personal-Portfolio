import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

function PortfolioSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const { projects, services } = portfolioData;

  return (
    <section className="portfolio-section portfolio-projects bg-[#1f2733] px-[10%] py-8 pb-[28rem] max-[992px]:px-[4%] max-[992px]:pb-[27rem] max-[768px]:pb-[25rem] max-[600px]:pb-[22rem] max-[600px]:pt-4">
      <marquee behavior="scroll" direction="left" scrollamount="5" className="block text-[1.6rem]">
        {portfolioData.maintenanceMessage}
      </marquee>
      <h2 className="text-center text-[4rem] font-semibold">Portfolio</h2>

      <div className="mt-4 mb-8 flex h-20 w-full">
        {["My Work", "My Service"].map((tab, index) => (
          <div
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`flex w-full cursor-pointer items-center border-b-[0.3rem] px-2 text-[2.5rem] font-medium text-[#7c8594] transition ${
              activeTab === index ? "border-[#00eeff] text-[#00eeff]" : "border-[#7c8594]"
            } ${index === 1 ? "justify-end" : "justify-start"}`}
          >
            <h3>{tab}</h3>
          </div>
        ))}
      </div>

      {activeTab === 0 && (
        <div className="tab-grid-active grid max-h-[calc(100vh-20rem)] grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 overflow-y-auto overflow-x-hidden">
          {projects.map((project, index) => (
            <article
              key={`${project.image}-${index}`}
              onClick={(event) => {
                if (window.matchMedia("(hover: none)").matches && !event.target.closest("a")) {
                  setActiveProject(activeProject === index ? null : index);
                }
              }}
              className={`portfolio-project group relative overflow-hidden rounded-[6.4px] bg-[#2d3542] p-8 ${
                activeProject === index ? "is-project-active" : ""
              }`}
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-125" />
              </div>
              <div className="portfolio-project-backdrop absolute inset-0 bg-[#2d3542] opacity-0 transition duration-300 group-hover:opacity-90" />
              <div className="portfolio-project-details relative z-10 flex h-full invisible flex-col justify-center opacity-0 transition duration-300 group-hover:visible group-hover:opacity-100">
                <h4 className="text-[2.3rem] font-semibold leading-none">{project.title}</h4>
                <p className="my-4 text-[1.6rem] leading-relaxed">{project.description}</p>
                <div className="mb-4 border-b border-white pb-4 text-[#00eeff]">
                  <p className="text-[1.6rem]">{project.tech}</p>
                </div>
                <div className="flex items-center">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link relative mr-4 inline-flex rounded-full bg-white p-4 text-[2.5rem] text-[#171f2b] transition hover:bg-[#00eeff]"
                  >
                    <i className="bx bx-arrow-back" />
                    <span className="pointer-events-none invisible absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#00eeff] px-4 py-1 text-[1.4rem] font-medium text-[#171f2b] opacity-0 transition group-hover/link:visible group-hover/link:opacity-100">
                      Preview
                    </span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link relative inline-flex rounded-full bg-white p-4 text-[2.5rem] text-[#171f2b] transition hover:bg-[#00eeff]"
                  >
                    <i className="fa-brands fa-github" />
                    <span className="pointer-events-none invisible absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#00eeff] px-4 py-1 text-[1.4rem] font-medium text-[#171f2b] opacity-0 transition group-hover/link:visible group-hover/link:opacity-100">
                      GitHub Repository
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div className="tab-grid-active grid max-h-[calc(100vh-20rem)] grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 overflow-y-auto overflow-x-hidden">
          {services.map((service) => (
            <article key={service.title} className="group flex flex-col justify-center rounded-[6.4px] bg-[#2d3542] p-8">
              <div className="mb-2 flex items-center justify-between">
                <i className={`${service.icon} text-[5rem] transition duration-300 group-hover:text-[#00eeff]`} />
                <a href="#" onClick={(event) => event.preventDefault()} className="group/link relative inline-flex rounded-full bg-white p-4 text-[2.5rem] text-[#171f2b] transition group-hover:bg-[#00eeff] hover:bg-[#00eeff]">
                  <i className="bx bx-arrow-back" />
                </a>
              </div>
              <h4 className="text-[2.3rem] font-semibold transition group-hover:text-[#00eeff]">{service.title}</h4>
              <p className="mt-4 text-[1.6rem] leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
