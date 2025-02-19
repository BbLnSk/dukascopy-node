const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 0,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'volumes' field is required!"]
};

export { config, expectedOutput };
