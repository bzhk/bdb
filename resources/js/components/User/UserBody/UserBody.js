import React from 'react';
import UserBtnsSection from "./UserBtnsSection/UserBtnsSection";
import UsersInstrumentsList from "./UsersInstrumentsList/UsersInstrumentsList";

const UserBody = ({instruments, freeUpInstrument}) => {
    return <div className="user-body__container">
       
        <UsersInstrumentsList instruments={instruments} freeUpInstrument={freeUpInstrument}/>
        <UserBtnsSection />
    </div>
}

export default UserBody;