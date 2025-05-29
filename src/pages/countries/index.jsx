import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchCountries = async () => {
      try {
       
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const data = [
          { id: "nepal", name: "Nepal", description: "nepal is beautiful" },
          { id: "japan", name: "Japan", description: "japan is beautiful" },
          { id: "bhutan", name: "bhutan", description: "bhutan is beautiful" }
        ];
        
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div>Loading countries...</div>;
  }

  return (
    <div>
      <h2>Explore Countries</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {countries.map(country => (
          <Link 
            key={country.id} 
            to={`/countries/${country.id}`}
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'block'
            }}
          >
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.02)'
              }
            }}>
              <h3>{country.name}</h3>
              <i><p>{country.description}</p></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries; 