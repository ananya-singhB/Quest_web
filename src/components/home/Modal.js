import React, { useEffect } from "react";

const Modals = ({modalContent, closeModal}) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 500);
    });

    return(
        <div className="ques-modal" id="content">
            <p>{modalContent}</p>
        </div>
    )
}

export default Modals;