
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface PricingPlanProps {
  title: string;
  icon?: React.ReactNode;
  description: string;
  price: string;
  rating: number;
  buyLink: string;
}

const PricingPlan = ({ title, icon, description, price, rating, buyLink }: PricingPlanProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-white">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link to={buyLink} className="bg-betblue text-white font-medium py-2 px-6 rounded-md inline-block hover:bg-betblue-light transition-colors">
        {price}
      </Link>
    </div>
  );
};

export default PricingPlan;
