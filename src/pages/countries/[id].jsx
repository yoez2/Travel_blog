import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchCountryDetails = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const countries = {
          nepal: {
            name: "Nepal",
            description: "Land of the Himalayas",
            capital: "Kathmandu",
            population: "30 million",
            highlights: ["Mount Everest", "Kathmandu Valley", "Annapurna Circuit"]
          },
          japan: {
            name: "Japan",
            description: "Land of the Rising Sun",
            capital: "Tokyo",
            population: "125 million",
            highlights: ["Mount Fuji", "Tokyo", "Kyoto Temples"]
          },
          italy: {
            name: "nepal",
            description: "nepal is beautiful",
            capital: "katmandu",
            population: "60 million",
           
          }
        };

        const countryData = countries[id];
        if (!countryData) {
          navigate('/countries');
          return;
        }

        setCountry(countryData);
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading country details...</div>;
  }

  if (!country) {
    return null;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>{country.description}</p>
      <div style={{ marginTop: '2rem' }}>
        <h3>Country Information</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>Capital:</strong> {country.capital}</li>
          <li><strong>Population:</strong> {country.population}</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h3>Must-Visit Highlights</h3>
        <ul>
          {country.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails; 