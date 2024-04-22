
const gitUser = process.env.GIT_USER;
const gitRepo = process.env.GIT_REPO;
const gitPath = process.env.GIT_PATH;
const commitNumber = process.env.COMMIT_NUMBER;

const moment = require('moment');

async function pushCommits() {
  
    const axiosInstance = require('./axiosInstance');
    
    for (let i = 0; i < commitNumber; i++) {
      let response = await axiosInstance.get(`/repos/${gitUser}/${gitRepo}/contents/${gitPath}`);
      let sha = response.data.sha;
      
      let attempts = 0
      const totalAttempts = 3
      let success = false
      
      while (attempts++ < totalAttempts && !success) {
        try {
          let currentTime = moment();
          
          console.log(`Executing commit ${i+1} from ${commitNumber} at ${currentTime.format('YYYY-MM-DD HH:mm:ss')}`);
      
          let putResponse = await axiosInstance.put(`/repos/${gitUser}/${gitRepo}/contents/${gitPath}`, {
            content: Buffer.from(`Commit at ${currentTime.format('YYYY-MM-DD HH:mm:ss')}`).toString('base64'),
            message: `Commit ${(i + 1)} of the day, at ${currentTime.format('YYYY-MM-DD HH:mm:ss')}`,
            sha
          });
    
          console.log('Response from PUT: ', putResponse.data);
      
          console.log(`Commit at ${currentTime.format('YYYY-MM-DD HH:mm:ss')}`);
          
          success = true
        } catch (e) {
          console.error(`Error while pushing commits: ${e}`);
        } 
      }
    }
  
}

module.exports = pushCommits;
