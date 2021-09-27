import React from 'react';
import { useEffect, useState } from 'react';
import tickets from '../demoTicketsObject';


const Dashboard = (props) => {

    let [highPriority, setHighPriority] = useState([]);
    let [mediumPriority, setMediumPriority] = useState([]);
    let [lowPriority, setLowPriority] = useState([]);
    let [nonePriority, setNonePriority] = useState([]);
    

    useEffect(() => {
        //console.log(props.tickets)
        let i;
        for (i = 0; i < props.tickets.length; i++) {
            //console.log(props.tickets[i].priority);
            if (props.tickets[i].priority === 1) {
                setHighPriority([...highPriority,props.tickets[i]]);
            } else if (props.tickets[i].priority === 2) {
                setMediumPriority([...mediumPriority,props.tickets[i]]);
            } else if (props.tickets[i].priority === 3) {
                console.log(i);
                setLowPriority([...lowPriority,props.tickets[i]]);;
            } else if (props.tickets[i].priority === 4) {
                setNonePriority([...nonePriority,props.tickets[i]]);
            }
        }
        //console.log(mediumPriority)
        }, []
    )

    const highPriorityGraph = {
        position: 'relative',
        width: '100px',
        height: `${highPriority.length + 1}0px`,
        backgroundColor: 'red',
        
    }
    const mediumPriorityGraph = {
        position: 'relative',
        width: '100px',
        height: `${mediumPriority.length + 1}0px`,
        backgroundColor: 'red',
        
    }
    const lowPriorityGraph = {
        position: 'relative',
        width: '100px',
        height: `${lowPriority.length + 1}0px`,
        backgroundColor: 'red',
        
    }
    const nonePriorityGraph = {
        position: 'relative',
        width: '100px',
        height: `${nonePriority.length + 1 }0px`,
        backgroundColor: 'red',
        
    }

    
    return (
        <div className="dashboard">
            <div  className="ticket-filter">
                <div className="priority-ticket high" style={highPriorityGraph} ></div>
                <div className="priority-ticket medium" style={mediumPriorityGraph} ></div>
                <div className="priority-ticket low" style={lowPriorityGraph} ></div>
                <div className="priority-ticket none" style={nonePriorityGraph} ></div>
                
            </div>
            <div className="ticket-filter">

            </div>
            <div className="ticket-filter">
                
            </div>
            <div className="ticket-filter">
                
            </div>
        </div>
    )
}

export default Dashboard
