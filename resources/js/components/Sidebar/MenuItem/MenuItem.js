import React from 'react';

const MenuItem = props => {
    
    const styles = props.activePath? "sidebar__item sidebar__item--active" : "sidebar__item";
    return <div className={styles} onClick={props.nextPath}>{props.name}</div>
        
    
}

export default MenuItem;