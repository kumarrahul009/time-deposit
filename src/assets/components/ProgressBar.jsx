export default function ProgressBar({ step }) {
  return (
    <div className="flex items-center space-x-6 mb-6">
      {[1, 2, 3, 4].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`h-8 w-8 flex items-center justify-center rounded-full 
              ${
                s === step
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
          >
            {s}
          </div>
          {s < 4 && <div className="w-12 h-1 bg-gray-200 mx-2"></div>}
        </div>
      ))}
    </div>
  );
}
