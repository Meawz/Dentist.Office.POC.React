import React from 'react';

const Article = ({ title, content, externalLink }) => {
    const handleClick = () => {
        if (externalLink) {
            window.open(externalLink, '_blank');
        } else {

        }
    };

    return (
        <div className='article' onClick={handleClick} style={{ cursor: 'pointer'}}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Article;