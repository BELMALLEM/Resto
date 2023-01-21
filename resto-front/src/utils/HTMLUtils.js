import React from "react";

const alertMessage = (message, success = false) => {
    return (
        <div
            className={success ? 'alert alert-success' : 'alert alert-danger'}
            roler='alert'>
            {message}
        </div>
    );
}

const HTMLUtils = {
    alertMessage,
}

export default HTMLUtils;