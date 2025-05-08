
interface Match {
  id: number;
  fixture: string;
  time: string;
}

interface MatchesListProps {
  matches: Match[];
}

const MatchesList = ({ matches }: MatchesListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="grid grid-cols-2 bg-gray-100 px-4 py-2 font-semibold text-gray-700">
        <div>Fixture</div>
        <div className="text-right">Time</div>
      </div>
      <div className="divide-y divide-gray-200">
        {matches.map(match => (
          <div key={match.id} className="grid grid-cols-2 px-4 py-3 hover:bg-gray-50">
            <div className="text-gray-800">{match.fixture}</div>
            <div className="text-right text-gray-800">{match.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesList;
