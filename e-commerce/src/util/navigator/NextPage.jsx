import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "./Navigator.scss";

const NextPage = (props) => {
    return (
        <div className="next-navigator-div">
            <NavigateNextIcon
                fontSize="large"
                onClick={props.handleNext}
                className="navigator"
            />
        </div>
    );
}

export default NextPage;