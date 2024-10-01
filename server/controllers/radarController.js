const MetersModel = require('../models/Meters');

// Function to get the last 12 months' max values
async function getMaxValues() {
  const now = new Date();
  const promises = [];

  for (let i = 0; i < 12; i++) {
    // Calculate the start and end of the month
    const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0, 23, 59, 59, 999);

    const promise = MetersModel.aggregate([
      { $match: { datetime: { $gte: monthStart, $lte: monthEnd } } },
      { $unwind: '$measurements' },
      {
        $group: {
          _id: { month: { $month: '$datetime' }, year: { $year: '$datetime' } },
          maxPower: { $max: '$measurements.power' },
          maxReactivePower: { $max: '$measurements.reactivepower' },
          maxPowerFactor: { $max: '$measurements.powerfactor' }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]).exec(); // Use exec() to execute the query and return a promise

    promises.push(promise);
  }

  const results = await Promise.all(promises);

  // Process the results to ensure there are values for each month
  const last12Months = results.map((maxValues, index) => {
    const monthStart = new Date(now.getFullYear(), now.getMonth() - index, 1);
    if (maxValues.length > 0) {
      return maxValues[0];
    } else {
      return {
        _id: { month: monthStart.getMonth() + 1, year: monthStart.getFullYear() },
        maxPower: 0,
        maxReactivePower: 0,
        maxPowerFactor: 0
      };
    }
  });

  return last12Months.reverse();
}

// Define the API endpoint
const Radardata = async (req, res) => {
  try {
    const maxValues = await getMaxValues();
    res.json(maxValues);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  Radardata,
};
