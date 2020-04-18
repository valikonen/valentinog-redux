import React from 'react';
import { connect } from 'react-redux';

// A brief recap: the key for connecting a React component with Redux is connect. Connect takes at least one argument.
// Since we want List to get a list of articles it's a matter of connecting state.articles with the component. How? With mapStateToProps. Note that "mapStateToProps" is just a convention, most developers for example use "select".

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}
const ConnectedList = ({ articles }) => {
    return (
        <ul>
            {
                articles.map(a => (
                    <li key={a.id}>{a.title}</li>
                ))
            }
        </ul>
    )
    
}
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
const List = connect(mapStateToProps)(ConnectedList)
export default List;
