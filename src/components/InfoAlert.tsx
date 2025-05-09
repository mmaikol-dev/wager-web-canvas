
import { Info } from "lucide-react";

interface InfoAlertProps {
  message: string;
  className?: string;
}

const InfoAlert = ({ message, className = "" }: InfoAlertProps) => {
  return (
    <div className={`bg-betblue-light/30 p-4 rounded-md flex items-start ${className}`}>
      <Info className="text-betblue flex-shrink-0 mr-3 mt-0.5 h-5 w-5" />
      <p className="text-gray-700 text-sm">{message}</p>
    </div>
  );
};

export default InfoAlert;
