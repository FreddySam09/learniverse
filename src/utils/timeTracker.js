export const updateTimeSpent = (subject, timeSpent) => {
    const currentTime = new Date();
    const storedData = JSON.parse(localStorage.getItem('subjectData')) || initialData;
    const subjectData = storedData.subjects[subject];
  
    const timeNow = currentTime.getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;
    const oneMonth = 30 * oneDay;
  
    // Update time for last day
    if (timeNow - subjectData.lastUpdated < oneDay) {
      subjectData.timeSpent.lastDay += timeSpent;
    }
  
    // Update time for past week
    if (timeNow - subjectData.lastUpdated < oneWeek) {
      subjectData.timeSpent.pastWeek += timeSpent;
    }
  
    // Update time for past month
    if (timeNow - subjectData.lastUpdated < oneMonth) {
      subjectData.timeSpent.pastMonth += timeSpent;
    }
  
    // Update all-time
    subjectData.timeSpent.allTime += timeSpent;
  
    // Update last updated timestamp
    subjectData.lastUpdated = timeNow;
  
    // Save the updated data back to localStorage
    localStorage.setItem('subjectData', JSON.stringify(storedData));
  };
  
  const initialData = {
    subjects: {
      chemistry: { timeSpent: { lastDay: 0, pastWeek: 0, pastMonth: 0, allTime: 0 }, points: 0 },
      physics: { timeSpent: { lastDay: 0, pastWeek: 0, pastMonth: 0, allTime: 0 }, points: 0 },
      biology: { timeSpent: { lastDay: 0, pastWeek: 0, pastMonth: 0, allTime: 0 }, points: 0 },
    },
  };
  