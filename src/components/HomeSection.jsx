import { portfolioData } from "../data/portfolioData";

function HomeSection() {
  const { profile, socialLinks } = portfolioData;

  return (
    <section className="portfolio-section portfolio-home flex items-center gap-20 bg-[#171f2b] max-[768px]:flex-col-reverse max-[768px]:justify-center max-[768px]:gap-8 max-[768px]:pb-24 max-[400px]:text-center">
      <div className="min-w-0 flex-1">
        <marquee behavior="scroll" direction="left" scrollamount="5" className="mb-2 block text-[1.6rem]">
          {portfolioData.maintenanceMessage}
        </marquee>
        <h3 className="text-[3rem] font-extrabold max-[400px]:text-[2.4rem]">{profile.greeting}</h3>
        <h1 className="text-[5.5rem] font-black leading-none text-[#00eeff] max-[400px]:text-[3.8rem]">{profile.name}</h1>
        <h3 className="text-[3rem] font-extrabold max-[400px]:text-[2.4rem]">{profile.role}</h3>
        <p className="my-4 mb-8 text-[1.6rem] leading-relaxed">{profile.homeDescription}</p>

        <div className="flex items-center max-[400px]:flex-col-reverse">
          <a
            href={profile.cv}
            download
            className="inline-flex rounded-full bg-[#00eeff] px-12 py-5 text-[1.6rem] font-semibold text-[#171f2b] shadow-[0_0_1rem_#00eeff] transition hover:shadow-none"
          >
            Download CV
          </a>
          <div className="ml-8 flex max-[400px]:mb-8 max-[400px]:ml-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative mx-2 inline-flex rounded-full border-2 border-[#00eeff] p-3 text-[2rem] text-[#00eeff] transition hover:bg-[#00eeff] hover:text-[#171f2b]"
              >
                <i className={social.icon} />
                <span className="pointer-events-none invisible absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#00eeff] px-4 py-1 text-[1.4rem] font-medium text-[#171f2b] opacity-0 transition group-hover:visible group-hover:opacity-100">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 max-[768px]:mb-2">
        <div className="home-image relative flex h-[32vw] w-[32vw] max-[768px]:h-[35rem] max-[768px]:w-[35rem] max-[400px]:h-[25rem] max-[400px]:w-[25rem] items-center justify-center overflow-hidden rounded-full border-[0.5rem] border-[#00eeff] bg-[linear-gradient(#171f2b,#00eeff)] shadow-[0_0_2rem_#00eeff] transition duration-500 hover:shadow-[0_0_8rem_#00eeff]">
          <img src={profile.image} alt={profile.name} className="absolute top-12 block w-[85%] object-cover" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
