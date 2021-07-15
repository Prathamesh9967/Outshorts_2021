import { Container } from '@material-ui/core';
import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import './Newscontent.css'

const Newscontent = ({ newsArray , newsResults , loadmore , setloadmore }) => {
    return <Container maxWidth='md'> 
        <div className='content'>

        {
        newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))
        }

        {loadmore <= newsResults && (
            <>
                <hr />
                <button className='loadMore' onClick={() => setloadmore(loadmore + 20)}>Load More</button>
            </>
        )}

        </div>    
        </Container>;
};

export default Newscontent
