import React from 'react';
const UserBtnsSection = ({openModal}) => 
{
return <div className="user-btns-section__container">
    <button className="btn btn-info" onClick={openModal}>Dodaj instrument</button>
</div>;
}
export default UserBtnsSection;