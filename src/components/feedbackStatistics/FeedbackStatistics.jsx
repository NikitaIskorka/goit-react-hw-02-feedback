import PropTypes from 'prop-types'

const FeedbackStatistics = ({ good, neutral, bad, total, percent }) => {
    return (
        <>
            <p>Good : {good}</p>
            <p>Neutral : {neutral} </p>
            <p>Bad : {bad}</p>
            <p>Total:{ total}</p>
            <p>Positive Feedback : {percent} %</p>
        
        </>
    )
}

FeedbackStatistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percent:PropTypes.number,
}

 export default FeedbackStatistics