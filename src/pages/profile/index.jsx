import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return null;
  }

  return (
    <div>
      <h2>My Profile</h2>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '2rem',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> dawa yoezer</p>
          <p><strong>Email:</strong> dawa@gamil.com</p>
          <p><strong>Member Since:</strong> January 2024</p>
        </div>
        
        <div>
          <h3>Travel History</h3>
          <ul>
            <li>bhutan - January 2024</li>
            <li>Japan- December 2023</li>
            <li>nepal - October 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile; 