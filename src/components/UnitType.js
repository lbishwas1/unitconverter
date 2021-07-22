import React from 'react';

const UnitType = (props) => {
    // props.unitHandler();
    return (
        <div>
            <div>
                <select
                    onChange={props.unitHandler}
                >
                    <option defaultChecked value={0}>Choose Unit Type</option>
                    {
                        props.units.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default UnitType;