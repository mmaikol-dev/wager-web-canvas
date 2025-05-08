
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-betblue">Bet</span>
            <span className="text-black">Predict</span>
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-betblue font-medium">
            Home
          </Link>
          <Link to="/find-tip" className="text-gray-800 hover:text-betblue font-medium">
            FindMyTip
          </Link>
          <Link to="/rollover" className="text-gray-800 hover:text-betblue font-medium">
            Rollover
          </Link>
          <Link to="/pro-plan" className="text-gray-800 hover:text-betblue font-medium">
            Pro Plan
          </Link>
          <Link to="/vip-plan" className="text-gray-800 hover:text-betblue font-medium">
            VIP Plan
          </Link>
          <Link to="/jackpot" className="text-gray-800 hover:text-betblue font-medium">
            Jackpot
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
