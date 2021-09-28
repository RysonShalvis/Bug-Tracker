import React from 'react';
import { useEffect, useState } from 'react';
import tickets from '../demoTicketsObject';


const Dashboard = (props) => {

    let [highPriority, setHighPriority] = useState([]);
    let [mediumPriority, setMediumPriority] = useState([]);
    let [lowPriority, setLowPriority] = useState([]);
    let [nonePriority, setNonePriority] = useState([]);
    let [openStatus, setOpenStatus] = useState([]);
    let [inProgressStatus, setInProgressStatus] = useState([]);
    let [completedStatus, setCompletedStatus] = useState([]);
    let [addType, setAddType] = useState([]);
    let [fixType, setFixType] = useState([]);
    let [deleteType, setDeleteType] = useState([]);
    

    useEffect(() => {
        
        let highArr = [];
        let mediumArr = [];
        let lowArr = [];
        let noneArr = [];
        let openArr = [];
        let inProgressArr = [];
        let completedArr = [];
        let addArr = [];
        let fixArr = [];
        let deleteArr = [];
        let i;
        for (i = 0; i < props.tickets.length; i++) {
            if (props.tickets[i].priority === 1) {
                highArr.push(props.tickets[i]); 
            } else if (props.tickets[i].priority === 2) {
                mediumArr.push(props.tickets[i]);
                
            } else if (props.tickets[i].priority === 3) {
                lowArr.push(props.tickets[i]);
            } else if (props.tickets[i].priority === 4) {
                noneArr.push(props.tickets[i]);
            }

            if (props.tickets[i].status === 'open') {
                openArr.push(props.tickets[i]);
            } else if (props.tickets[i].status === 'in progress') {
                inProgressArr.push(props.tickets[i]);
            } else if (props.tickets[i].status === 'completed') {
                completedArr.push(props.tickets[i]);
            }


            if (props.tickets[i].type === 'add') {
                addArr.push(props.tickets[i]);
            } else if (props.tickets[i].type === 'fix') {
                fixArr.push(props.tickets[i]);
            } else if (props.tickets[i].type === 'delete') {
                deleteArr.push(props.tickets[i]);
            }


        }
        setHighPriority(highArr);
        setMediumPriority(mediumArr);
        setLowPriority(lowArr);
        setNonePriority(noneArr);
        setOpenStatus(openArr);
        setInProgressStatus(inProgressArr);
        setCompletedStatus(completedArr);
        setAddType(addArr);
        setFixType(fixArr);
        setDeleteType(deleteArr);
        }, []
    )

    const highPriorityGraph = {
        height: `${highPriority.length * 4}0px`
    }
    const mediumPriorityGraph = {
        height: `${mediumPriority.length * 4}0px`
    }
    const lowPriorityGraph = {
        height: `${lowPriority.length * 4}0px`
    }
    const nonePriorityGraph = {
        height: `${nonePriority.length * 4}0px`
    }
    const openStatusGraph = {
        height: `${openStatus.length * 4}0px`
    }
    const inProgressStatusGraph = {
        height: `${inProgressStatus.length * 4}0px`
    }
    const completedStatusGraph = {
        height: `${completedStatus.length * 4}0px`
    }
    const addTypeGraph = {
        height: `${addType.length * 4}0px`
    }
    const fixTypeGraph = {
        height: `${fixType.length * 4}0px`
    }
    const deleteTypeGraph = {
        height: `${deleteType.length * 4}0px`
    }

    
    return (
        <div className="dashboard">
            <div  className="ticket-filter">
                <div className="ticket-name">Tickets by Priority</div>
                <div className="height-indicators">
                    <div className="height-indicators-number">0</div>
                    <div className="height-indicators-number">1</div>
                    <div className="height-indicators-number">2</div>
                    <div className="height-indicators-number">3</div>
                    <div className="height-indicators-number">4</div>
                    <div className="height-indicators-number">5</div>
                    <div className="height-indicators-number">6</div>
                    <div className="height-indicators-number">7</div>
                    <div className="height-indicators-number">8</div>
                </div>
                <div className="ticket-graph">
                    <div className="priority-ticket high" style={highPriorityGraph} ></div>
                    <div className="priority-ticket medium" style={mediumPriorityGraph} ></div>
                    <div className="priority-ticket low" style={lowPriorityGraph} ></div>
                    <div className="priority-ticket none" style={nonePriorityGraph} ></div>
                </div>
                <div className="horizontal-line"></div>
                <div className="vertical-line"></div>
                <div className="ticket-priority-name-ctn">
                <div className="ticket-priortiy-name">High <br/>Priority</div>
                <div className="ticket-priortiy-name">Medium <br/>Priority</div>
                <div className="ticket-priortiy-name">Low <br/>Priority</div>
                <div className="ticket-priortiy-name">No <br/>Priority</div>
                </div>
                
                
            </div>
            <div  className="ticket-filter">
                <div className="ticket-name">Tickets by Status</div>
                <div className="height-indicators">
                    <div className="height-indicators-number">0</div>
                    <div className="height-indicators-number">1</div>
                    <div className="height-indicators-number">2</div>
                    <div className="height-indicators-number">3</div>
                    <div className="height-indicators-number">4</div>
                    <div className="height-indicators-number">5</div>
                    <div className="height-indicators-number">6</div>
                    <div className="height-indicators-number">7</div>
                    <div className="height-indicators-number">8</div>
                </div>
                <div className="ticket-graph">
                    <div style={openStatusGraph} className="priority-ticket open" ></div>
                    <div style={inProgressStatusGraph} className="priority-ticket in-progress" ></div>
                    <div style={completedStatusGraph} className="priority-ticket completed" ></div>
                </div>
                <div className="horizontal-line"></div>
                <div className="vertical-line"></div>
                <div className="ticket-priority-name-ctn">
                <div className="ticket-priortiy-name">Open <br/>Status</div>
                <div className="ticket-priortiy-name">In Progress <br/>Status</div>
                <div className="ticket-priortiy-name">Completed <br/>Status</div>
                </div>
                
                
            </div>
            <div  className="ticket-filter">
                <div className="ticket-name">Tickets by Type</div>
                <div className="height-indicators">
                    <div className="height-indicators-number">0</div>
                    <div className="height-indicators-number">1</div>
                    <div className="height-indicators-number">2</div>
                    <div className="height-indicators-number">3</div>
                    <div className="height-indicators-number">4</div>
                    <div className="height-indicators-number">5</div>
                    <div className="height-indicators-number">6</div>
                    <div className="height-indicators-number">7</div>
                    <div className="height-indicators-number">8</div>
                </div>
                <div className="ticket-graph">
                    <div className="priority-ticket add" style={addTypeGraph} ></div>
                    <div className="priority-ticket fix" style={fixTypeGraph} ></div>
                    <div className="priority-ticket delete" style={deleteTypeGraph} ></div>
                </div>
                <div className="horizontal-line"></div>
                <div className="vertical-line"></div>
                <div className="ticket-priority-name-ctn">
                    <div className="ticket-priortiy-name">Add <br/>Type</div>
                    <div className="ticket-priortiy-name">Fix <br/>Type</div>
                    <div className="ticket-priortiy-name">Delete <br/>Type</div>
                </div>
                
                
            </div>
            <div  className="ticket-filter">
                <div className="ticket-name">Tickets by still user</div>
                <div className="height-indicators">
                    <div className="height-indicators-number">0</div>
                    <div className="height-indicators-number">1</div>
                    <div className="height-indicators-number">2</div>
                    <div className="height-indicators-number">3</div>
                    <div className="height-indicators-number">4</div>
                    <div className="height-indicators-number">5</div>
                    <div className="height-indicators-number">6</div>
                    <div className="height-indicators-number">7</div>
                    <div className="height-indicators-number">8</div>
                </div>
                <div className="ticket-graph">
                    <div className="priority-ticket high" style={highPriorityGraph} ></div>
                    <div className="priority-ticket medium" style={mediumPriorityGraph} ></div>
                    <div className="priority-ticket low" style={lowPriorityGraph} ></div>
                    <div className="priority-ticket none" style={nonePriorityGraph} ></div>
                </div>
                <div className="horizontal-line"></div>
                <div className="vertical-line"></div>
                <div className="ticket-priority-name-ctn">
                <div className="ticket-priortiy-name">High <br/>Priority</div>
                <div className="ticket-priortiy-name">Medium <br/>Priority</div>
                <div className="ticket-priortiy-name">Low <br/>Priority</div>
                <div className="ticket-priortiy-name">No <br/>Priority</div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Dashboard
