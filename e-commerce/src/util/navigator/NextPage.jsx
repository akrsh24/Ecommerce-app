import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "./Navigator.scss";

const NextPage = (props) => {
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            right: "0%",
            transform: "translate(-50%,-50%)"
        }}>
            <NavigateNextIcon
                fontSize="large"
                onClick={props.handleNext}
                className="navigator"
            />
        </div>
    );
}

export default NextPage;