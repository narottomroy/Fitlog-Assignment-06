import Logo from "@/assets/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <div className="pb-10">
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>

      <footer className="footer container mx-auto sm:footer-horizontal text-neutral-content items-center p-4">
        <div className="grid-flow-col justify-between items-center">
          <Image src={Logo} alt="footer-logo"></Image>
          <h1 className="text-xl font-bold text-white">FITLOG</h1>
        </div>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="flex justify-end">
            © {new Date().getFullYear()} FitLog — Workout Library. Train hard,
            log honest.
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default FooterPage;
