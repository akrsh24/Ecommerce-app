import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import "./Navigator.scss";

const PreviousPage = (props) => {
    return (
        <div className="previous-navigator-div">
            <NavigateBeforeIcon
                fontSize="large"
                onClick={props.handlePrevious}
                className="navigator"
            />
        </div>
    );
}

export default PreviousPage;