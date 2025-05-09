
interface FreeTip {
  id: number;
  time: string;
  league: string;
  fixture: string;
  tip: string;
}

interface FreeTipsTableProps {
  tips: FreeTip[];
}

const FreeTipsTable = ({ tips }: FreeTipsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
        <thead className="bg-betblue text-white">
          <tr>
            <th className="text-left p-3 text-xs sm:text-sm">Time</th>
            <th className="text-left p-3 text-xs sm:text-sm">League</th>
            <th className="text-left p-3 text-xs sm:text-sm">Fixture</th>
            <th className="text-left p-3 text-xs sm:text-sm">Tip</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tips.map(tip => (
            <tr key={tip.id} className="hover:bg-gray-50">
              <td className="p-2 sm:p-3 text-xs sm:text-sm">{tip.time}</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm">{tip.league}</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm">{tip.fixture}</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm">{tip.tip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeTipsTable;
