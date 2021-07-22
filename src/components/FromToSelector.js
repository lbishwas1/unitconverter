import React from 'react';

import Style from './Landing.module.css'

export default function FromToSelector(props) {
    return (
        <div className={Style.flex}>
            <div>
                <select
                    className={ " browser-default custom-select"}
                    onChange={props.fromUnitHandler}
                    disabled={props.disableFromTo} 
                >
                    <option defaultChecked>Choose Unit From</option>
                    {
                        props.chosenUnits.map(unit =>
                            <option key={unit.name} value={unit.value} >{unit.name}</option>
                        )
                    }
                </select>
            </div>

            <div>
                <select
                    className={" browser-default custom-select"}
                    onChange={props.toUnitHandler}
                    disabled={props.disableFromTo} 
                >
                    <option defaultChecked>Choose Unit To</option>
                    {
                        props.chosenUnits.map(unit => 
                            <option key={unit.name} value={unit.value}>{unit.name}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}
