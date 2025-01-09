import logo from "../assets/images/logo.png";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineExport,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#3795BD] shadow-lg h-auto py-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
      {/* Logo y redes sociales */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
        />
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/IvanLeffalle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#424242] hover:text-[#48CFCB] transition-colors"
          >
            <AiOutlineGithub className="text-2xl md:text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/leffalleivan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#424242] hover:text-[#48CFCB] transition-colors"
          >
            <AiOutlineLinkedin className="text-2xl md:text-3xl" />
          </a>
          <a
            href="https://ivanleffalle-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#424242] hover:text-[#48CFCB] transition-colors"
          >
            <AiOutlineExport className="text-2xl md:text-3xl" />
          </a>
        </div>
      </div>

      {/* Texto de derechos de autor */}
      <p className="text-[#424242] text-xs md:text-sm text-center md:text-left">
        © {new Date().getFullYear()} Ivan Leffalle. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
