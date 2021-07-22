import React from 'react';

export default function FromToInput(props) {

    return (
        <div>
            {/* from input */}
            <div>
                <div>
                    <span className="input-group-text" id="inputGroup-sizing-default">From</span>
                </div>
                <input type="number" onChange={props.fromChgHdl}
                    className={" form-control"} value={props.fromValue}
                    disabled={props.disableFromInput} />
                        

            {/* to input */}
         
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">To</span>
                </div>
                <input type="number" className="form-control" value={props.toValue} disabled />
            </div>
        </div>
        
    )
}
