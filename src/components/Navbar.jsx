import { portfolioData } from "../data/portfolioData";

function Navbar({ activeSection, onSectionChange }) {
  return (
    <nav className="fixed bottom-8 left-1/2 z-50 w-[40rem] max-w-full -translate-x-1/2 rounded-[5rem] bg-white/10 px-0 py-8 backdrop-blur-md sm:bottom-0">
      <ul className="flex justify-evenly">
        {portfolioData.navigation.map((item) => (
          <li
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`group relative flex cursor-pointer text-[3rem] transition duration-300 ${
              activeSection === item.id ? "text-[#00eeff]" : "text-white"
            }`}
          >
            <i className={item.icon} />
            <span className="pointer-events-none invisible absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#00eeff] px-4 py-1 text-[1.6rem] font-medium text-[#171f2b] opacity-0 transition duration-300 group-hover:visible group-hover:opacity-100">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
