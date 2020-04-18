import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        addMyArticle: article => dispatch(addArticle(article))
    }
}
const ConnectedForm = (props) => {

    console.log('props: ', props)

    const [article, setArticle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // addMyArticle({id: Date.now(), title: article});
        setArticle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setArticle(e.target.value)} value={article} />
            <button type="submit">Add</button>
        </form>
    );
}
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
const Form = connect(null, mapDispatchToProps)(ConnectedForm)
export default Form;
