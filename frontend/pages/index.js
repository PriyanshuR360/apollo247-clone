import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function FindDoctors() {
  const [specialty, setSpecialty] = useState('All');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const doctors = [
    {
      id: 1,
      name: "Dr. A.K. Singh",
      specialty: "General Physician",
      experience: 15,
      rating: 4.7
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Pediatrician",
      experience: 8,
      rating: 4.5
    },
    {
      id: 3,
      name: "Dr. Rohan Gupta",
      specialty: "Dentist",
      experience: 12,
      rating: 4.9
    },
    {
      id: 4,
      name: "Dr. Neha Patel",
      specialty: "Dermatologist",
      experience: 7,
      rating: 4.3
    },
    {
      id: 5,
      name: "Dr. Sanjay Verma",
      specialty: "General Physician",
      experience: 20,
      rating: 4.8
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    return (specialty === 'All' || doctor.specialty === specialty) &&
           (!experienceFilter || doctor.experience >= parseInt(experienceFilter)) &&
           (!ratingFilter || doctor.rating >= parseFloat(ratingFilter));
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Find Doctors | Apollo Clinic</title>
      </Head>

      {/* Logo Section - Only this part is modified */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-blue-800">Apollo 247</h1>
          </div>
        </div>
      </div>

      {/* Rest of your existing code remains exactly the same */}
      <h1 className="text-3xl font-bold text-blue-800 mb-8">Find Doctors</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Filters</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Specialty</h3>
            <div className="flex flex-wrap gap-3">
              {['All', 'General Physician', 'Pediatrician', 'Dentist', 'Dermatologist'].map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSpecialty(spec)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    specialty === spec 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium text-lg">Minimum Experience (years)</label>
              <input
                type="number"
                min="0"
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 text-gray-800 font-medium text-lg"
                placeholder="0"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium text-lg">Minimum Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 text-gray-800 font-medium text-lg"
                placeholder="0.0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{doctor.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium w-40 text-lg">Specialty:</span>
                  <span className="text-blue-600 font-semibold text-lg">{doctor.specialty}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium w-40 text-lg">Experience:</span>
                  <span className="text-green-600 font-bold text-xl">{doctor.experience} years</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium w-40 text-lg">Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-600 font-bold text-xl mr-2">{doctor.rating.toFixed(1)}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500 text-xl">No doctors found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}