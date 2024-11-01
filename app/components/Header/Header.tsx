import { formatImagePath } from "../../../utils/formatImagePath";
import { HeaderProps } from "./interfaces/HeaderProps";

const Header = ({ title }: HeaderProps) => {
  const bgImagePath = formatImagePath({ path: "/images/plaid-roses.png" });

  return (
    <div
      className="relative h-64 flex items-center justify-center text-center border-t-2 border-b-2 border-double border-stone-800"
      style={{
        backgroundImage: `url('${bgImagePath}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30" />
      <h1 className="relative z-10 text-6xl font-ebGaramond">{title}</h1>
    </div>
  );
};

export default Header;
