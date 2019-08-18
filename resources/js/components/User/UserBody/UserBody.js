import React,{useState} from 'react';
import UserBtnsSection from "./UserBtnsSection/UserBtnsSection";
import UsersInstrumentsList from "./UsersInstrumentsList/UsersInstrumentsList";


const UserBody = ({instruments, freeUpInstrument, openModal}) => {
    
    return <div className="user-body__container">
           
        <UsersInstrumentsList instruments={instruments} freeUpInstrument={freeUpInstrument}/>
        <UserBtnsSection openModal={openModal}/>
    </div>
}

export default UserBody;