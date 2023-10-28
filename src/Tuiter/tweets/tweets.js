import React from 'react';
import TweetImage from "./tweet-image.js";

const Tweet = ({ userAvatar, userName, userHandle, tweetText, tweetImage, timeAgo }) => {
    return (
        <div className="tweet">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle"
                         height={48}
                         src={`/images/${userAvatar}`}
                         alt={userAvatar}
                    />
                </div>
                <div className="col-11">
                    <div className="col-1 fw-bold float-end">...</div>

                    <div className="col-10" style={{ textAlign: 'left' }}>
                        <span className="fw-bolder">{userName}</span>
                        <span className="fw-light">@{userHandle} </span>
                        <span className="fw-light">. {timeAgo}</span>
                    </div>
                    <div style={{ textAlign: 'left' }}>{tweetText}</div>
                </div>
            </div>
            <TweetImage tweetImage={tweetImage}/>
        </div>
    );
};

export default Tweet;
