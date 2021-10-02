import React from 'react';
import Dashboard from './Dashboard';
import CreateTicket from './CreateTicket';
import { useState, useEffect } from 'react';

const CurrentTab = (props) => {

    
    const [currentTab, setCurrentTab] = useState('');

    
        if (props.nav === 'create ticket') {
            console.log('create ticket cicked')
            return <CreateTicket />
        } else if (props.nav === 'dashboard') {
            return <Dashboard createTicketNav={props.createTicketNav} tickets={props.tickets} user={props.user}/>
        }
}

export default CurrentTab
