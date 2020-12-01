import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import "./Navigator.scss";

const PreviousPage = (props) => {
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(50%,-50%)"
        }}>
            <NavigateBeforeIcon
                fontSize="large"
                onClick={props.handlePrevious}
                className="navigator"
            />
        </div>
    );
}

export default PreviousPage;