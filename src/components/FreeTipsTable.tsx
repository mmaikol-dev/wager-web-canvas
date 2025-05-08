
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
            <th className="text-left p-3">Time</th>
            <th className="text-left p-3">League</th>
            <th className="text-left p-3">Fixture</th>
            <th className="text-left p-3">Tip</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tips.map(tip => (
            <tr key={tip.id} className="hover:bg-gray-50">
              <td className="p-3">{tip.time}</td>
              <td className="p-3">{tip.league}</td>
              <td className="p-3">{tip.fixture}</td>
              <td className="p-3">{tip.tip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeTipsTable;
