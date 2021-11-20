import React from 'react'

function page404({ location }) {
    return (
    <div>
        <h1>The address below does not exist on your-site</h1>
        <h2>https://your-site.com<code>{location.pathname}</code></h2>
    </div>
    )
}

export default page404;
