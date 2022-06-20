// ==============================================

export default function App() {
  return (
    <div className='card shadow'>
      <div className='A'>
        <h2>Join our community</h2>

        <h3>30-day, hassle-free money back guarantee</h3>

        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className='B'>
        <h2>Monthly Subscription</h2>

        <h4>&#36;29</h4>

        <h3>Full access for less than &#36;1 a day</h3>

        <div className='button shadow' onClick={() => alert('TODO: handle')}>
          Sign Up
        </div>
      </div>
      <div className='C'>
        <h2>Why Us</h2>

        <ul>
          <li>Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  );
}

// ==============================================
