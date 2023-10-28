import React from "react";
import postArray from "./post.json"
import PostSummaryItem from "./post-summary-item";
const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postArray.map((post) => <PostSummaryItem  post={post}/>)
            }
        </ul>
    )
        }
export default PostSummaryList;