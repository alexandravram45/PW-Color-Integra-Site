import React from 'react';
import CardProduct from './CardProduct';

 const Products = ({ data }) => {
    const postsRender = [];

    for (let i = 0; i < data.length; i += 3) {
        postsRender.push(<div key={`postContainer${i / 3}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            {data
                .slice(i, i + 3)
                .map((val, index) => (<CardProduct content={val.content} title={val.title} key={`cardPost${index}`} />))
            }
        </div>)
    }

    return (
        <div className="posts">
            <h1>Posts</h1>
            {postsRender}
        </div>
    );
}

export default Products