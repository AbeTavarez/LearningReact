import React, {Fragment, useState} from "react";

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const onTitleClick = index => {
        console.log('title clicked', index);
    }


    const renderItems = items.map( (item, idx) => (
        <Fragment key={item.title}>
            <div 
                className="title active"
                onClick={() => onTitleClick(idx)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </Fragment>
    ));

    return <div className="ui styled accordion">{renderItems}</div>
}

export default Accordion;