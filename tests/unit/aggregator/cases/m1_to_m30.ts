const input = {
  data: require('./../samples/sample_m1_data.json'),
  fromTimeframe: 'm1',
  toTimeframe: 'm30',
  priceType: 'bid'
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.14597, 1.14534, 1.14596, 3741.47],
  [1549240200000, 1.14597, 1.14597, 1.14529, 1.14555, 4719.69],
  [1549242000000, 1.14555, 1.14571, 1.1454, 1.14552, 3829.15],
  [1549243800000, 1.14552, 1.1459, 1.14546, 1.14581, 3146.97],
  [1549245600000, 1.14582, 1.14603, 1.14564, 1.1458, 3275.06],
  [1549247400000, 1.1458, 1.14587, 1.14529, 1.14534, 3233.65],
  [1549249200000, 1.14535, 1.14545, 1.14501, 1.14505, 3749.08],
  [1549251000000, 1.14505, 1.14521, 1.14461, 1.14484, 3735.52],
  [1549252800000, 1.14485, 1.14491, 1.14445, 1.14449, 4155.78],
  [1549254600000, 1.14447, 1.14457, 1.14412, 1.14424, 3824.85],
  [1549256400000, 1.14424, 1.14461, 1.14424, 1.14441, 3471.37],
  [1549258200000, 1.14441, 1.14455, 1.14427, 1.14434, 2702.63],
  [1549260000000, 1.14436, 1.14444, 1.14417, 1.14419, 3040.44],
  [1549261800000, 1.14419, 1.14443, 1.14395, 1.14442, 5054.44],
  [1549263600000, 1.14441, 1.14452, 1.14409, 1.14428, 7343.22],
  [1549265400000, 1.14428, 1.14453, 1.14379, 1.14424, 10363],
  [1549267200000, 1.14425, 1.14533, 1.14386, 1.14448, 14986.6],
  [1549269000000, 1.14448, 1.14528, 1.1444, 1.14508, 12685.13],
  [1549270800000, 1.14509, 1.14534, 1.14446, 1.1445, 13532.93],
  [1549272600000, 1.1445, 1.14503, 1.1444, 1.14453, 12140.6],
  [1549274400000, 1.14452, 1.14455, 1.14406, 1.14423, 13249.59],
  [1549276200000, 1.14423, 1.14482, 1.14423, 1.14465, 11500.3],
  [1549278000000, 1.14466, 1.14517, 1.14463, 1.14464, 9931.03],
  [1549279800000, 1.14465, 1.14542, 1.14449, 1.14518, 11049.77],
  [1549281600000, 1.14518, 1.14526, 1.14488, 1.1449, 9231.79],
  [1549283400000, 1.1449, 1.14507, 1.14413, 1.14477, 12385.42],
  [1549285200000, 1.14475, 1.14494, 1.14429, 1.14484, 10567.02],
  [1549287000000, 1.14483, 1.14511, 1.14462, 1.14488, 11302.18],
  [1549288800000, 1.14488, 1.14504, 1.14331, 1.14386, 13805.96],
  [1549290600000, 1.14386, 1.14398, 1.14248, 1.14262, 13455.43],
  [1549292400000, 1.14263, 1.14375, 1.14262, 1.14327, 15463.89],
  [1549294200000, 1.14327, 1.14367, 1.14254, 1.14287, 12997.04],
  [1549296000000, 1.14286, 1.14322, 1.14244, 1.14293, 14559.04],
  [1549297800000, 1.14293, 1.14378, 1.14256, 1.14376, 9960.35],
  [1549299600000, 1.14376, 1.14399, 1.14321, 1.14336, 9545.15],
  [1549301400000, 1.14337, 1.14359, 1.14296, 1.14312, 8822.49],
  [1549303200000, 1.14312, 1.14343, 1.14264, 1.14335, 7833.52],
  [1549305000000, 1.14335, 1.14347, 1.14289, 1.14322, 8251.15],
  [1549306800000, 1.14321, 1.14357, 1.14305, 1.14331, 6995.02],
  [1549308600000, 1.14332, 1.1434, 1.14306, 1.14312, 6010.21],
  [1549310400000, 1.14311, 1.14344, 1.14311, 1.14338, 6786.05],
  [1549312200000, 1.14338, 1.1435, 1.14322, 1.14343, 6950.39],
  [1549314000000, 1.14344, 1.1436, 1.14335, 1.14353, 2335.41],
  [1549315800000, 1.14353, 1.14372, 1.14343, 1.14353, 2424.27],
  [1549317600000, 1.14353, 1.14375, 1.14348, 1.14361, 1512.16],
  [1549319400000, 1.1436, 1.14366, 1.14343, 1.1435, 1650.99],
  [1549321200000, 1.14352, 1.14367, 1.14344, 1.14344, 3210.62],
  [1549323000000, 1.14344, 1.14385, 1.14344, 1.14349, 2624.16]
];

export { input, expectedOutput };
