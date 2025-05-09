// In your Filters component (src/components/Filters.js)
export default function Filters({ filters, setFilters }) {
  const specialties = ['All', 'General Physician', 'Pediatrician', 'Dentist', 'Dermatologist'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Specialty</h3>
          <div className="flex flex-wrap gap-2">
            {specialties.map(specialty => (
              <button
                key={specialty}
                onClick={() => setFilters({ ...filters, specialty, page: 1 })}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filters.specialty === specialty
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}