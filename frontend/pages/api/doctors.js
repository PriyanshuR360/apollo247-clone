// frontend/pages/api/doctors.js
import axios from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // Handle GET request for doctor listings
      const { specialty, page = 1, limit = 10 } = req.query;
      
      const response = await axios.get(`${BACKEND_URL}/api/doctors`, {
        params: {
          specialty: specialty !== 'All' ? specialty : undefined,
          page,
          limit
        }
      });
      
      return res.status(200).json(response.data);
    }

    // Handle POST request for adding new doctors
    if (req.method === 'POST') {
      const response = await axios.post(`${BACKEND_URL}/api/doctors`, req.body);
      return res.status(201).json(response.data);
    }

    // Handle unsupported methods
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });

  } catch (error) {
    console.error('API route error:', error);
    return res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || 'Internal server error'
    });
  }
}