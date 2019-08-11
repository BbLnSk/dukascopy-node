const input = {
  data: require('./../samples/sample_tick_data.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'm1',
  priceType: 'bid'
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.1457, 1.14542, 1.14569, 293.76],
  [1549238460000, 1.14569, 1.1458, 1.14565, 1.14575, 271.59],
  [1549238520000, 1.14575, 1.14581, 1.14562, 1.14563, 386.57],
  [1549238580000, 1.14561, 1.14564, 1.14551, 1.14554, 230.19],
  [1549238640000, 1.14554, 1.14554, 1.14534, 1.14534, 194.05],
  [1549238700000, 1.14534, 1.1457, 1.14534, 1.14567, 341.33],
  [1549238760000, 1.14567, 1.14568, 1.14563, 1.14564, 128.26],
  [1549238820000, 1.14564, 1.14567, 1.14563, 1.14566, 74.35],
  [1549238880000, 1.14566, 1.14573, 1.14564, 1.14571, 45.52],
  [1549238940000, 1.14572, 1.14577, 1.1457, 1.14576, 57.02],
  [1549239000000, 1.14575, 1.1458, 1.14574, 1.14574, 67.57],
  [1549239060000, 1.14574, 1.14576, 1.14573, 1.14573, 123.32],
  [1549239120000, 1.14573, 1.14574, 1.1457, 1.14574, 32.49],
  [1549239180000, 1.14572, 1.14574, 1.14572, 1.14573, 30.05],
  [1549239240000, 1.14573, 1.14577, 1.14572, 1.14576, 71.66],
  [1549239300000, 1.14576, 1.14577, 1.14575, 1.14576, 30.61],
  [1549239360000, 1.14577, 1.14577, 1.14576, 1.14576, 52.95],
  [1549239420000, 1.14577, 1.14577, 1.14574, 1.14576, 37.17],
  [1549239480000, 1.14577, 1.14587, 1.14576, 1.14585, 74.26],
  [1549239540000, 1.14585, 1.14587, 1.14578, 1.14579, 115.01],
  [1549239600000, 1.14579, 1.14579, 1.14556, 1.14562, 144.27],
  [1549239660000, 1.14561, 1.14566, 1.14561, 1.14565, 99.19],
  [1549239720000, 1.14565, 1.14566, 1.14565, 1.14566, 27.81],
  [1549239780000, 1.14566, 1.14575, 1.14566, 1.14571, 105.54],
  [1549239840000, 1.1457, 1.14582, 1.1457, 1.14581, 147.26],
  [1549239900000, 1.14581, 1.14586, 1.14581, 1.14581, 119.56],
  [1549239960000, 1.14581, 1.14587, 1.14581, 1.14587, 48],
  [1549240020000, 1.14587, 1.14592, 1.14585, 1.14592, 80.53],
  [1549240080000, 1.14591, 1.14595, 1.14589, 1.1459, 71.97],
  [1549240140000, 1.14589, 1.14597, 1.14589, 1.14596, 239.61],
  [1549240200000, 1.14597, 1.14597, 1.14558, 1.14566, 558.83],
  [1549240260000, 1.14566, 1.14566, 1.1456, 1.14565, 82.38],
  [1549240320000, 1.14565, 1.14572, 1.14565, 1.14572, 143.84],
  [1549240380000, 1.14571, 1.14583, 1.1457, 1.14575, 131.29],
  [1549240440000, 1.14574, 1.14578, 1.14574, 1.14578, 14.93],
  [1549240500000, 1.14577, 1.14582, 1.14574, 1.14576, 80.76],
  [1549240560000, 1.14575, 1.14576, 1.14558, 1.14562, 271.63],
  [1549240620000, 1.14562, 1.14571, 1.14562, 1.14571, 112.96],
  [1549240680000, 1.1457, 1.14571, 1.14561, 1.14563, 132.92],
  [1549240740000, 1.14563, 1.14563, 1.14556, 1.14556, 141.82],
  [1549240800000, 1.14557, 1.14558, 1.14546, 1.14548, 139.34],
  [1549240860000, 1.1455, 1.14558, 1.1455, 1.14556, 123.45],
  [1549240920000, 1.14557, 1.14564, 1.14556, 1.14564, 211.79],
  [1549240980000, 1.14564, 1.14571, 1.14564, 1.14567, 97.46],
  [1549241040000, 1.14569, 1.1457, 1.14567, 1.14567, 47.78],
  [1549241100000, 1.14566, 1.14576, 1.14565, 1.14575, 125.08],
  [1549241160000, 1.14575, 1.14577, 1.14569, 1.14572, 106.12],
  [1549241220000, 1.14572, 1.14578, 1.14568, 1.14568, 159.59],
  [1549241280000, 1.14567, 1.14569, 1.14565, 1.14569, 92.56],
  [1549241340000, 1.14568, 1.14573, 1.14568, 1.14573, 71.3],
  [1549241400000, 1.14572, 1.14576, 1.14563, 1.14566, 178.65],
  [1549241460000, 1.14565, 1.14566, 1.14556, 1.14565, 175.24],
  [1549241520000, 1.14566, 1.14567, 1.14561, 1.14565, 262.85],
  [1549241580000, 1.14566, 1.14567, 1.1456, 1.14562, 105.01],
  [1549241640000, 1.14561, 1.14562, 1.14554, 1.14555, 182.43],
  [1549241700000, 1.14554, 1.14554, 1.14542, 1.14542, 368.72],
  [1549241760000, 1.14541, 1.14544, 1.14537, 1.14537, 123.57],
  [1549241820000, 1.14536, 1.14536, 1.14529, 1.14533, 108.1],
  [1549241880000, 1.14533, 1.1455, 1.14533, 1.14545, 183.31],
  [1549241940000, 1.14544, 1.14555, 1.14544, 1.14555, 185.98]
];

export { input, expectedOutput };
