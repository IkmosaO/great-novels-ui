// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function

import React, { useState, useEffect, useLayoutEffect } from "react";

const UseEffectExample = () => {
const [resourceType, setResourceType] = useState('posts')

useEffect(() => {
    console.log('render')
}, [resourceType])

return (
    <>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
    </>
)

} 

export default UseEffectExample