// Tallying up Frequencies (Counting items)
// Counting how many times things appear in a collection (e.g., counting inventory tags, log levels, or survey results).

const logLevels = ['info', 'error', 'info', 'warning', 'error', 'error'];

const logCounts = logLevels.reduce((acc, level) => {
    acc[level] = (acc[level] || 0) + 1;
    return acc;
}, {});

console.log(logCounts); 