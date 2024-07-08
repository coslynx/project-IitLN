const axios = require('axios');

const feedbackSystem = async (userFeedback) => {
  try {
    // Code to submit user feedback
    const response = await axios.post('https://api.example.com/feedback', { feedback: userFeedback });
    
    if (response.status === 200) {
      return "Feedback submitted successfully!";
    } else {
      throw new Error("Failed to submit feedback");
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  feedbackSystem,
};