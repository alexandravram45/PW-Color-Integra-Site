import React from 'react';
import CardProduct from './CardProduct';

 export default function Products({ data }) {
    const postsRender = [];

    for (let i = 0; i < data.length; i += 4) {
        postsRender.push(<div key={`postContainer${i / 4}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            {data
                .slice(i, i + 4)
                .map((val, index) => (<CardProduct key={index} product={val} />))
            }
        </div>)
    }

    return (
        <div className="posts">
            {postsRender}
        </div>
    );
}