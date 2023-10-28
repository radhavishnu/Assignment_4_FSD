import React from 'react';
import Tweet from "../tweets/tweets.js";
import './index.css'
import TweetStats from "../tweets/tweetstats.js";

const HomeComponent= () => {
    return (
        <div className="col-12">
            <Tweet
                userAvatar="SpaceX.jpg"
                userName="SpaceX"
                userHandle="SpaceX"
                tweetText="Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight arqund the Moon spacex.com/updates"
                tweetImage="homepost.png"
                timeAgo="23h"
            />

            <div style={{marginTop: '100px'}}>
                <TweetStats likes="11.1k" retuits="1,168" comments="595"/>
            </div>

            <Tweet
                userAvatar="Muskji.jpeg"
                userName="Elon Musk"
                userHandle="eel_on_musk"
                tweetText="We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere."
                tweetImage=""
                timeAgo="15h"
            />
            <div className="col-11 float-end bordered-div">
                <Tweet
                    userAvatar="SpaceX.jpg"
                    userName="SpaceX"
                    userHandle="SpaceX"
                    tweetText="Starlink for RVs now has over 100,000 customers! Access high speed, low latency internet on an as-needed basis anywhere in the world where Starlink provides active coverage."
                    tweetImage=""
                    timeAgo="16h"
                />
            </div>

            <div style={{marginTop: '100px'}}>
                <TweetStats likes="19.2k" retuits="1,601" comments="5346"/>
            </div>

            <div style={{marginBottom: '200px'}}>
                &nbsp;
            </div>
        </div>
    );
};
export default HomeComponent;
