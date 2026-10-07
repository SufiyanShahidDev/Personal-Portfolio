import { portfolioData } from "../data/portfolioData";

function AboutSection() {
  const { profile } = portfolioData;

  return (
    <section className="portfolio-section portfolio-about flex items-center gap-20 bg-[#1f2733] max-[768px]:flex-col max-[768px]:justify-center max-[768px]:gap-8 max-[768px]:pb-24 max-[400px]:text-center">
      <div className="shrink-0">
        <div className="relative flex h-[32vw] w-[32vw] items-center justify-center overflow-hidden rounded-full border-[0.5rem] border-[#00eeff] bg-transparent shadow-[0_0_2rem_#00eeff,inset_0_0_1rem_#00eeff] max-[768px]:h-[35rem] max-[768px]:w-[35rem] max-[400px]:h-[25rem] max-[400px]:w-[25rem]">
          <img src={profile.image} alt={profile.name} className="absolute top-12 z-0 block w-[85%] object-cover" />
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-center text-[4rem] font-semibold max-[400px]:text-[3.2rem] min-[769px]:text-left">{profile.aboutTitle}</h2>
        <h3 className="-mt-2 text-[2.5rem] text-[#00eeff]">{profile.aboutRole}</h3>
        <p className="my-4 mb-8 text-[1.6rem] leading-relaxed">{profile.aboutDescription}</p>
        <a
          href="https://www.linkedin.com/in/sufiyanshahiddev/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-[#00eeff] px-16 py-5 text-[1.6rem] font-semibold text-[#171f2b] shadow-[0_0_1rem_#00eeff] transition hover:shadow-none"
        >
          View More
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
