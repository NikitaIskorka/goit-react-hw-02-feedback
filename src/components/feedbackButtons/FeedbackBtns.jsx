import PropTypes from 'prop-types';

const FeedbackBtns = ({ options, onLeaveFeedback }) => {

    const feedbackOptions = Object.keys(options)
   
    return (
        <div className='button-container'>
            {feedbackOptions.map(option => {
                return (
                    <button key={option} className='feedback-btn'
                    onClick={()=>onLeaveFeedback(option)}
                    >{option}</button>
                )
            })}
       </div>
        
    )
}
FeedbackBtns.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback:PropTypes.func,
}

export default FeedbackBtns