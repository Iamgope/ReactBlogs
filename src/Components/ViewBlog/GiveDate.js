import React from 'react';
import classes from './GiveDate.module.css'
const GiveDate=(props)=>{
    //const date=new Date(props.date);
    const month=props.date.toLocaleString('en-US',{month:'short'});
    const year = props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    return(
        <React.Fragment className={classes.Date}>
      <div className={classes['date']}>
            <div className={classes.date__day}>{day}</div>
            <div className={classes.date__month}>{month}</div>
            <div className={classes.date__year}>{year}</div>
    </div>
        </React.Fragment>
        
    )
}
export default GiveDate