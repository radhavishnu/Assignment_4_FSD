import React from "react";
import './tweet-stats.css'

const TweetStats = ({likes, retuits, comments}) => {
    return (
        <div className="row-12">
            <i className="col-3 float-end bi bi-share position-relative light"></i>
            <i className="col-3 float-end bi bi-suit-heart position-relative light"> {likes}</i>
            <i className="col-3 float-end bi bi-repeat position-relative light"> {retuits}</i>
            <i className="col-3 float-end bi bi-chat position-relative light"> {comments}</i>
        </div>
    );
};

export default TweetStats;