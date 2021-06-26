import React, {useState, useEffect} from 'react';


const Resource = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            console.log("resourceType changed");
            fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
                .then(response => response.json())
                .then(json => {console.log(json); setItems(json)});
            return () => {}
        },[resourceType]
    )

    return(
        <React.Fragment>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick = {() => setResourceType('users')}>Users</button>
                <button onClick = {() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {
                items.map(
                    item => {
                        return <pre>{JSON.stringify(item)}</pre>
                    }
                )
            }
        </React.Fragment>
    )
}

export default Resource;