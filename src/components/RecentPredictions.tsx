
interface Prediction {
  id: number;
  date: string;
  league: string;
  fixture: string;
  prediction: string;
  result: string;
}

interface RecentPredictionsProps {
  predictions: Prediction[];
}

const RecentPredictions = ({ predictions }: RecentPredictionsProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
        <thead className="bg-betblue text-white">
          <tr>
            <th className="text-left p-3">Date</th>
            <th className="text-left p-3">League</th>
            <th className="text-left p-3">Fixture</th>
            <th className="text-left p-3">Prediction</th>
            <th className="text-left p-3">Result</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {predictions.map(prediction => (
            <tr key={prediction.id} className="hover:bg-gray-50">
              <td className="p-3">{prediction.date}</td>
              <td className="p-3">{prediction.league}</td>
              <td className="p-3">{prediction.fixture}</td>
              <td className="p-3">{prediction.prediction}</td>
              <td className="p-3">{prediction.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentPredictions;
