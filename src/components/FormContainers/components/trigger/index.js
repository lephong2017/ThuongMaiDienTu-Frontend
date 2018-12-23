import React from 'react';
import Button from './Button'; 

const findTriggerWithAttr=(listTrigger,attri)=>{
    const result = listTrigger.filter(singleTrigger => singleTrigger.attrbTrigger===attri);
    return result[0];
}
export const renderTriggerItem=(listTrigger,attribute,actions) =>{
    const trigger= findTriggerWithAttr(listTrigger,attribute);
    switch (trigger.render.type){
        case "TEXT":
            return <Button attr={trigger.attrbTrigger} render={trigger.render} actions={actions} />;
        default: 
            return <Button attr={trigger.attrbTrigger} render={trigger.render} actions={actions} />;
    }
}