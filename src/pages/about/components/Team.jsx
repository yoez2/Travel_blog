const Team = () => {
  const teamMembers = [
    { name: 'dawa yoezer', role: 'Traveler', bio: 'love to travel and enjoy the nature' },
    { name: 'dechen pem', role: 'Photographer', bio: 'Capturing the beauty of nature' },
    { name: 'pratap sharam', role: 'vlogger', bio: 'love to travel and enjoy the nature' }
  ];

  return (
    <div>
      <h3>Our Team</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4>{member.name}</h4>
            <p style={{ color: '#666' }}>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 