import React, { useEffect } from 'react';
import { getPosts } from '../actions/index';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        posts: state.posts.slice(0, 10)
    }
}
const Posts = (props) => {
    useEffect(() => {
        props.getPosts()
    }, []);

    return (
        <ul>
            {
                props.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    );
}

export default connect(mapStateToProps, { getPosts })(Posts);
