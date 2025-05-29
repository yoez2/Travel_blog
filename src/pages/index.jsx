const Home = () => {
  return (
    <div>
      <h1>Welcome to Travel Blog</h1>
      <p>Discover amazing destinations around the world!</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Featured Destinations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>bhutan</h3>
            <p>bhutan is beautiful</p>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Japan</h3>
            <p>japan is beautiful</p>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>nepal</h3>
            <p>nepal is beautiful</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 