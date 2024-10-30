import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-neutral-900">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-bold">📚</div>
        <div className="hidden md:flex space-x-6">
          <Link href={`/`}>Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
