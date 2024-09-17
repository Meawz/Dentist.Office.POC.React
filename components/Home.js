import React from 'react';
import Article from './Article';

const Home = () => {
  const articles = [
    {
      title: 'Benefits of dental implants',
      content: 'Learn the benefits of dental implants.',
      externalLink: 'https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know',
    },
    {
      title: 'State of toothpaste',
      content: 'Explore different toothpaste opinions and why one dentints does not recommend.',
      externalLink: 'https://en.wikipedia.org/wiki/Toothpaste',
    },
    {
      title: 'Laughing Gas',
      content: 'What to expect from Dental Nitrous Oxide.',
      externalLink: 'https://en.wikipedia.org/wiki/Nitrous_oxide',
    },
  ];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Take a look at those useful articles.</p>
      <div className="articles-container">
        {articles.map((article, index) => (
          <Article key={index} title={article.title} content={article.content} externalLink={article.externalLink} />
        ))}
      </div>
    </div>
  );
};

export default Home;