import React from 'react';

const ConnectionCard = ({ data }) => {
    const { name, tags, picture } = data
    return (
        <div style={{ 
            width: 230, 
            borderRadius: 12, 
            display: 'flex',
            justifyContent: 'space-between',
            border: 'solid 2px #b3b3b3', 
            height: 75
        }}>
            <div style={{ padding: 10 }}>
                <img style={{ width: 50, height: 50, borderRadius: 50 }} src={picture || 'https://img.icons8.com/pastel-glyph/2x/person-male.png'} />
            </div>
            <div style={{width: "100%", padding: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'column'}}>
                <div style={{ paddingTop: 5 }}>{name}</div>
                <div style={{paddingBottom: 10}}>{tags[0]}</div>
            </div>
        </div>
    )
}

export default ConnectionCard;