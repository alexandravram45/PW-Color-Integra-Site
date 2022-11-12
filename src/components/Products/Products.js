import React from 'react';
import CardProduct from './CardProduct';

 export default function Products({ data }) {
    const postsRender = [];

    for (let i = 0; i < data.length; i += 3) {
        postsRender.push(<div key={`postContainer${i / 3}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            {data
                .slice(i, i + 3)
                .map((val, index) => (<CardProduct title={val.title} price={val.price} image={val.image} category={val.category} content={val.content} key={`cardProduct${index}`} />))
            }
        </div>)
    }

    return (
        <div className="posts">
            {postsRender}
        </div>
    );
}