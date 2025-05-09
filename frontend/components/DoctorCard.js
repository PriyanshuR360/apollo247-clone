// In your DoctorCard component (src/components/DoctorCard.js)
export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{doctor.name}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-gray-600 font-medium w-24">Specialty:</span>
            <span className="text-blue-600 font-semibold">{doctor.specialty}</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 font-medium w-24">Experience:</span>
            <span className="text-green-600">{doctor.experience} years</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 font-medium w-24">Rating:</span>
            <div className="flex items-center">
              <span className="text-yellow-500 font-semibold">{doctor.rating}/5</span>
              <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}