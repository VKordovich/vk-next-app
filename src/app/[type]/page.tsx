import React from 'react';

export default function Type({params: {type}}: MenuItem): React.JSX.Element {
    return (<>Type {type}</>)
}

interface MenuItem {
    params: {
        type: string
    }
}
