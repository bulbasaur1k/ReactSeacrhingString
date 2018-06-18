import React from "react"
import './style.css'

export default class Results extends React.Component {
    state = {

    }
    
    
    render() {
        let searchStr = this.props.searchingString
        function filterTitleAndBody(item) {
            if (~item.title.indexOf(searchStr)) {
                return true;
            }
            if((~item.title.indexOf(searchStr))){
                return true;
            }
            return false;
        }
        let posts = this.props.arrayPosts.filter(filterTitleAndBody);
        return (
            <div>
                <h1>{this.props.searchingString}</h1>
                {posts.map(post => (
                    <div className="post">
                        <div className="post-body">
                            <div className="post-header" key={post.id}>{post.title}</div>
                            <div className="post-content" key={post.id}>{post.body}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}