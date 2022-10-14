import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <span key={option}>
           <button type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}</button>
          
          </span>
        );
      })}
    </>
  );
};
  
    
export default Feedback;

Feedback.propTypes = {
  choiceGoodq: PropTypes.func,
  choiceNeutralq: PropTypes.func,
  choiceBadq: PropTypes.func,
  
}