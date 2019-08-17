import React from 'react';

const UserHeader = ({userData}) => {
    const {id, name, surname} = userData;
    return <div className="user-header__container">
      {id}: {name} {surname} 
    </div>
}

export default UserHeader;