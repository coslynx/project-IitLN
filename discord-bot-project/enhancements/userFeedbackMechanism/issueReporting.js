const axios = require('axios');

const submitIssueReport = async (userId, issueDetails) => {
  try {
    const response = await axios.post('https://api.example.com/submitIssueReport', {
      userId,
      issueDetails,
    });

    return response.data;
  } catch (error) {
    console.error('Error submitting issue report:', error);
    throw new Error('Failed to submit issue report. Please try again later.');
  }
};

module.exports = {
  submitIssueReport,
};