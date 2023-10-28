import React from "react";

const TweetImage = ({tweetImage}) => {
    if (tweetImage !== "") {
        return (
            <div className="position-relative mb-2 col-11 float-end">
                <img src={`/images/${tweetImage}`} className="w-10" alt="placeholder"
                     style={{borderRadius: '10px'}}/>
            </div>
        );
    } else {
        return <></>
    }
}

export default TweetImage;