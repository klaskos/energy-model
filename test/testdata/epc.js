import {MathHelper} from "util/math";


//=======   RESULTS   =========

// TRANSMISSION HEAT TRANSFER
export let heatTransferCoeffiecient = 415.5130;

export let transmissionHeatTransfer = [
    { heating: 16710.06569, cooling: 22384.52220 },
    { heating: 11841.00699, cooling: 16299.59826 },
    { heating: 7528.42164, cooling: 11822.11129 },
    { heating: 3785.00556, cooling: 8310.79311 },
    { heating: 125.66011, cooling: 4619.25880 },
    { heating: -4087.85014, cooling: 485.86831 },
    { heating: -5632.46154, cooling: -480.85837 },
    { heating: -6176.80019, cooling: -1273.67804 },
    { heating: -1646.92733, cooling: 2775.27206 },
    { heating: 5144.26519, cooling: 9571.15600 },
    { heating: 8984.60145, cooling: 13271.94463 },
    { heating: 13187.46418, cooling: 18306.90977 }
];


// VENTILATION HEAT TRANSFER
export let ventilationCoefficientDetailed = [
    {
        heating: {
            weekday: [67.8963, 68.5572, 69.2244, 67.8356, 66.8459, 65.5110, 70.1922, 68.5275, 251.7166, 260.0262, 264.5717, 261.0197, 262.3218, 262.0435, 259.3225, 263.5345, 258.5620, 254.1552, 71.3052, 72.1426, 72.4977, 71.1538, 71.1566, 69.1206],
            weekend: [67.8963, 68.5572, 69.2244, 67.8356, 66.8459, 65.5110, 70.1922, 68.5275, 70.2766, 78.5862, 83.1317, 79.5797, 80.8818, 80.6035, 77.8825, 82.0945, 77.1220, 72.7152, 71.3052, 72.1426, 72.4977, 71.1538, 71.1566, 69.1206],
            average: 126.7700
        },
        cooling: {
            weekday: [70.9211, 71.4051, 71.9454, 72.2866, 72.7075, 72.8929, 73.3123, 73.2689, 251.9319, 260.2838, 264.8563, 261.2958, 262.6097, 262.3349, 259.6046, 263.8373, 258.8367, 254.4041, 72.3554, 73.1977, 73.5457, 72.1654, 72.1560, 70.3228],
            weekend: [70.9211, 71.4051, 71.9454, 72.2866, 72.7075, 72.8929, 73.3123, 73.2689, 70.4919, 78.8438, 83.4163, 79.8558, 81.1697, 80.8949, 78.1646, 82.3973, 77.3967, 72.9641, 72.3554, 73.1977, 73.5457, 72.1654, 72.1560, 70.3228],
            average: 128.5715
        }
    },
    {
        heating: {
            weekday: [86.4514, 74.1166, 78.6844, 72.9486, 75.4620, 77.1032, 76.6878, 72.8957, 271.0200, 269.5825, 272.8336, 274.0868, 272.4401, 271.2491, 270.5719, 274.3491, 274.9711, 269.4484, 80.6865, 76.5976, 75.0077, 75.1369, 77.4236, 79.4333],
            weekend: [86.4514, 74.1166, 78.6844, 72.9486, 75.4620, 77.1032, 76.6878, 72.8957, 89.5800, 88.1425, 91.3936, 92.6468, 91.0001, 89.8091, 89.1319, 92.9091, 93.5311, 88.0084, 80.6865, 76.5976, 75.0077, 75.1369, 77.4236, 79.4333],
            average: 136.6995
        },
        cooling: {
            weekday: [87.8344, 75.2230, 79.8724, 74.0063, 76.5645, 78.2335, 77.8021, 73.9387, 271.3389, 269.9072, 273.1865, 274.4594, 272.8180, 271.6326, 270.9607, 274.7588, 275.3815, 269.8150, 82.1122, 77.8907, 76.2243, 76.3340, 78.6520, 80.6924],
            weekend: [87.8344, 75.2230, 79.8724, 74.0063, 76.5645, 78.2335, 77.8021, 73.9387, 89.8989, 88.4672, 91.7465, 93.0194, 91.3780, 90.1926, 89.5207, 93.3188, 93.9415, 88.3750, 82.1122, 77.8907, 76.2243, 76.3340, 78.6520, 80.6924],
            average: 137.5516
        }
    },
    {
        heating: {
            weekday: [67.6490, 63.1369, 69.6730, 64.6562, 66.5917, 64.7698, 64.3159, 68.4033, 259.7449, 267.8141, 270.0364, 266.3511, 271.1594, 264.1514, 271.9452, 272.3548, 273.2276, 269.6269, 78.5827, 77.3363, 71.6747, 72.9915, 74.6201, 75.5648],
            weekend: [67.6490, 63.1369, 69.6730, 64.6562, 66.5917, 64.7698, 64.3159, 68.4033, 78.3049, 86.3741, 88.5964, 84.9111, 89.7194, 82.7114, 90.5052, 90.9148, 91.7876, 88.1869, 78.5827, 77.3363, 71.6747, 72.9915, 74.6201, 75.5648],
            average: 133.2561
        },
        cooling: {
            weekday: [68.8238, 64.1724, 70.8415, 65.6880, 67.6560, 65.7820, 65.3119, 69.5131, 260.0563, 268.1877, 270.4508, 266.7673, 271.6314, 264.6020, 272.4857, 272.9138, 273.7865, 270.1293, 80.1906, 79.2059, 73.1799, 74.4517, 76.0487, 76.9723],
            weekend: [68.8238, 64.1724, 70.8415, 65.6880, 67.6560, 65.7820, 65.3119, 69.5131, 78.6163, 86.7477, 89.0108, 85.3273, 90.1914, 83.1620, 91.0457, 91.4738, 92.3465, 88.6893, 80.1906, 79.2059, 73.1799, 74.4517, 76.0487, 76.9723],
            average: 134.1923
        }
    },
    {
        heating: {
            weekday: [60.1738, 55.0821, 50.8227, 51.2657, 51.0852, 49.2242, 49.5765, 56.3520, 245.7971, 250.7740, 253.6930, 251.0453, 253.1605, 258.2093, 264.7315, 259.6532, 258.2112, 253.8168, 67.0168, 59.3538, 60.9177, 54.0185, 56.0541, 56.9500],
            weekend: [60.1738, 55.0821, 50.8227, 51.2657, 51.0852, 49.2242, 49.5765, 56.3520, 64.3571, 69.3340, 72.2530, 69.6053, 71.7205, 76.7693, 83.2915, 78.2132, 76.7712, 72.3768, 67.0168, 59.3538, 60.9177, 54.0185, 56.0541, 56.9500],
            average: 113.4244
        },
        cooling: {
            weekday: [61.2491, 56.0595, 56.0775, 56.8719, 57.6239, 58.2221, 57.4031, 57.3717, 246.0913, 251.1483, 254.1722, 251.4446, 253.2752, 258.0755, 264.4488, 259.4004, 258.0733, 254.1058, 67.5402, 60.1096, 61.9834, 55.0929, 57.1045, 57.9868],
            weekend: [61.2491, 56.0595, 56.0775, 56.8719, 57.6239, 58.2221, 57.4031, 57.3717, 64.6513, 69.7083, 72.7322, 70.0046, 71.8352, 76.6355, 83.0088, 77.9604, 76.6333, 72.6658, 67.5402, 60.1096, 61.9834, 55.0929, 57.1045, 57.9868],
            average: 115.2555
        }
    },
    {
        heating: {
            weekday: [49.8467, 49.9257, 50.2076, 50.0353, 48.4516, 50.0343, 53.7342, 59.4940, 239.5443, 237.7537, 240.8574, 245.3163, 240.8175, 239.1207, 238.6013, 242.0595, 251.4946, 254.0738, 61.0373, 56.4327, 53.4103, 51.8561, 54.2686, 54.3310],
            weekend: [49.8467, 49.9257, 50.2076, 50.0353, 48.4516, 50.0343, 53.7342, 59.4940, 58.1043, 56.3137, 59.4174, 63.8763, 59.3775, 57.6807, 57.1613, 60.6195, 70.0546, 72.6338, 61.0373, 56.4327, 53.4103, 51.8561, 54.2686, 54.3310],
            average: 112.6863
        },
        cooling: {
            weekday: [50.5699, 50.7215, 51.1468, 51.3500, 51.6370, 51.6153, 54.7064, 60.2363, 239.9324, 237.7920, 240.4440, 244.9049, 240.4872, 238.7974, 238.3082, 241.7377, 251.0682, 253.5675, 60.8976, 56.5652, 53.7056, 52.2685, 54.8363, 55.0131],
            weekend: [50.5699, 50.7215, 51.1468, 51.3500, 51.6370, 51.6153, 54.7064, 60.2363, 58.4924, 56.3520, 59.0040, 63.4649, 59.0472, 57.3574, 56.8682, 60.2977, 69.6282, 72.1275, 60.8976, 56.5652, 53.7056, 52.2685, 54.8363, 55.0131],
            average: 113.0865
        }
    },
    {
        heating: {
            weekday: [52.4539, 49.4705, 49.6105, 48.9281, 49.4118, 56.5848, 56.6989, 63.3759, 244.0588, 248.0488, 246.7729, 253.4584, 254.3086, 254.7173, 263.5563, 266.3217, 255.2776, 250.6375, 66.3378, 53.9812, 54.2517, 53.7313, 54.3216, 58.7808],
            weekend: [52.4539, 49.4705, 49.6105, 48.9281, 49.4118, 56.5848, 56.6989, 63.3759, 62.6188, 66.6088, 65.3329, 72.0184, 72.8686, 73.2773, 82.1163, 84.8817, 73.8376, 69.1975, 66.3378, 53.9812, 54.2517, 53.7313, 54.3216, 58.7808],
            average: 117.5524
        },
        cooling: {
            weekday: [52.6489, 49.7397, 49.9444, 49.3008, 49.8596, 57.0979, 57.0116, 63.3728, 243.6516, 247.6929, 246.4635, 253.1213, 253.9802, 254.3939, 263.1794, 265.9248, 254.9424, 250.3201, 65.2076, 53.5410, 54.0259, 53.6423, 54.3305, 58.8795],
            weekend: [52.6489, 49.7397, 49.9444, 49.3008, 49.8596, 57.0979, 57.0116, 63.3728, 62.2116, 66.2529, 65.0235, 71.6813, 72.5402, 72.9539, 81.7394, 84.4848, 73.5024, 68.8801, 65.2076, 53.5410, 54.0259, 53.6423, 54.3305, 58.8795],
            average: 117.4347
        }
    },
    {
        heating: {
            weekday: [43.6398, 42.9709, 45.2878, 43.0023, 44.8073, 47.4416, 50.0186, 55.7487, 237.6167, 239.5854, 236.7191, 241.0975, 244.0937, 242.3873, 241.8102, 246.2325, 240.8931, 240.8916, 62.3095, 63.3644, 52.7165, 44.3933, 46.3213, 46.8741],
            weekend: [43.6398, 42.9709, 45.2878, 43.0023, 44.8073, 47.4416, 50.0186, 55.7487, 56.1767, 58.1454, 55.2791, 59.6575, 62.6537, 60.9473, 60.3702, 64.7925, 59.4531, 59.4516, 62.3095, 63.3644, 52.7165, 44.3933, 46.3213, 46.8741],
            average: 104.7889
        },
        cooling: {
            weekday: [43.5812, 42.9671, 45.3454, 43.0935, 44.9240, 47.5782, 50.0824, 55.5426, 237.3161, 239.3080, 236.4849, 240.8475, 243.8356, 242.1426, 241.5724, 245.9699, 240.6553, 240.6468, 61.1862, 62.5789, 52.2751, 42.7931, 46.1139, 46.7268],
            weekend: [43.5812, 42.9671, 45.3454, 43.0935, 44.9240, 47.5782, 50.0824, 55.5426, 55.8761, 57.8680, 55.0449, 59.4075, 62.3956, 60.7026, 60.1324, 64.5299, 59.2153, 59.2068, 61.1862, 62.5789, 52.2751, 42.7931, 46.1139, 46.7268],
            average: 104.5115
        }
    },
    {
        heating: {
            weekday: [44.2033, 43.9111, 45.3619, 44.8495, 47.9423, 48.6503, 46.8675, 53.4207, 234.5633, 237.4437, 236.0259, 237.7876, 239.0083, 245.6027, 246.0318, 249.7868, 253.7894, 251.5320, 68.9816, 60.7671, 62.6178, 54.4246, 48.6612, 47.9126],
            weekend: [44.2033, 43.9111, 45.3619, 44.8495, 47.9423, 48.6503, 46.8675, 53.4207, 53.1233, 56.0037, 54.5859, 56.3476, 57.5683, 64.1627, 64.5918, 68.3468, 72.3494, 70.0920, 68.9816, 60.7671, 62.6178, 54.4246, 48.6612, 47.9126],
            average: 111.7463
        },
        cooling: {
            weekday: [44.0634, 43.7909, 45.2702, 44.8030, 47.9198, 48.6447, 46.8209, 53.1724, 234.2868, 237.1874, 235.7998, 237.5607, 238.7806, 245.3421, 245.7689, 249.5034, 253.4740, 251.2158, 67.6320, 59.9603, 61.9481, 53.9974, 48.3612, 47.6867],
            weekend: [44.0634, 43.7909, 45.2702, 44.8030, 47.9198, 48.6447, 46.8209, 53.1724, 52.8468, 55.7474, 54.3598, 56.1207, 57.3406, 63.9021, 64.3289, 68.0634, 72.0340, 69.7758, 67.6320, 59.9603, 61.9481, 53.9974, 48.3612, 47.6867],
            average: 111.4483
        }
    },
    {
        heating: {
            weekday: [37.9124, 42.9609, 42.8234, 44.6329, 46.5095, 44.1929, 41.7905, 53.6793, 237.9309, 242.4043, 239.3439, 242.0647, 240.1273, 248.7594, 243.2852, 245.0820, 236.8312, 239.5196, 47.6210, 48.1415, 43.7215, 44.3987, 41.7661, 39.6565],
            weekend: [37.9124, 42.9609, 42.8234, 44.6329, 46.5095, 44.1929, 41.7905, 53.6793, 56.4909, 60.9643, 57.9039, 60.6247, 58.6873, 67.3194, 61.8452, 63.6420, 55.3912, 58.0796, 47.6210, 48.1415, 43.7215, 44.3987, 41.7661, 39.6565],
            average: 103.7848
        },
        cooling: {
            weekday: [44.1845, 44.9283, 45.3411, 45.7353, 46.9329, 46.3126, 45.7023, 53.9553, 237.9847, 242.0352, 238.9947, 241.7309, 239.8262, 248.3885, 242.9667, 244.7384, 236.5419, 239.1619, 47.4971, 48.1073, 43.7552, 44.4977, 42.5321, 43.3365],
            weekend: [44.1845, 44.9283, 45.3411, 45.7353, 46.9329, 46.3126, 45.7023, 53.9553, 56.5447, 60.5952, 57.5547, 60.2909, 58.3862, 66.9485, 61.5267, 63.2984, 55.1019, 57.7219, 47.4971, 48.1073, 43.7552, 44.4977, 42.5321, 43.3365],
            average: 104.6195
        }
    },
    {
        heating: {
            weekday: [56.1228, 60.1816, 57.5539, 58.0662, 54.4310, 55.8364, 55.0183, 59.6560, 248.3702, 255.4970, 254.0906, 261.4035, 258.7241, 254.2707, 258.0834, 261.5511, 257.8340, 240.9159, 59.3885, 58.1337, 58.3454, 58.2876, 57.0042, 58.3870],
            weekend: [56.1228, 60.1816, 57.5539, 58.0662, 54.4310, 55.8364, 55.0183, 59.6560, 66.9302, 74.0570, 72.6506, 79.9635, 77.2841, 72.8307, 76.6434, 80.1111, 76.3940, 59.4759, 59.3885, 58.1337, 58.3454, 58.2876, 57.0042, 58.3870],
            average: 117.9330
        },
        cooling: {
            weekday: [57.0930, 61.2382, 58.5200, 59.0190, 57.6198, 58.1983, 58.6082, 60.6682, 248.6562, 255.8602, 254.4979, 261.9214, 259.2816, 254.8874, 258.5447, 262.0777, 258.4277, 241.2315, 60.2951, 59.3176, 59.5459, 59.4061, 58.0504, 59.4287],
            weekend: [57.0930, 61.2382, 58.5200, 59.0190, 57.6198, 58.1983, 58.6082, 60.6682, 67.2162, 74.4202, 73.0579, 80.4814, 77.8416, 73.4474, 77.1047, 80.6377, 76.9877, 59.7915, 60.2951, 59.3176, 59.5459, 59.4061, 58.0504, 59.4287],
            average: 118.9847
        }
    },
    {
        heating: {
            weekday: [61.8515, 64.7760, 57.6337, 61.1317, 60.6925, 56.3221, 60.4498, 59.5188, 253.7210, 253.7178, 254.2163, 255.8443, 259.0431, 260.4875, 261.9225, 253.2850, 250.2595, 243.4110, 63.6175, 66.6685, 62.6294, 61.4223, 64.5161, 60.4911],
            weekend: [61.8515, 64.7760, 57.6337, 61.1317, 60.6925, 56.3221, 60.4498, 59.5188, 72.2810, 72.2778, 72.7763, 74.4043, 77.6031, 79.0475, 80.4825, 71.8450, 68.8195, 61.9710, 63.6175, 66.6685, 62.6294, 61.4223, 64.5161, 60.4911],
            average: 121.8245
        },
        cooling: {
            weekday: [62.8100, 65.7798, 62.4700, 63.2763, 63.9223, 64.0491, 64.6710, 64.1850, 253.9855, 254.0000, 254.5233, 256.1808, 259.4224, 260.9054, 262.3666, 253.6657, 250.5942, 243.6714, 64.8043, 67.8729, 63.6925, 62.4214, 65.5691, 61.4255],
            weekend: [62.8100, 65.7798, 62.4700, 63.2763, 63.9223, 64.0491, 64.6710, 64.1850, 72.5455, 72.5600, 73.0833, 74.7408, 77.9824, 79.4654, 80.9266, 72.2257, 69.1542, 62.2314, 64.8043, 67.8729, 63.6925, 62.4214, 65.5691, 61.4255],
            average: 123.4343
        }
    },
    {
        heating: {
            weekday: [73.3454, 71.4732, 71.3800, 71.2676, 73.3300, 73.0972, 74.1121, 74.6793, 259.9892, 264.4135, 266.4212, 265.6291, 264.3579, 258.9718, 260.4382, 255.5713, 251.5588, 248.4176, 70.8682, 73.1464, 70.3838, 72.0580, 68.4887, 73.3657],
            weekend: [73.3454, 71.4732, 71.3800, 71.2676, 73.3300, 73.0972, 74.1121, 74.6793, 78.5492, 82.9735, 84.9812, 84.1891, 82.9179, 77.5318, 78.9982, 74.1313, 70.1188, 66.9776, 70.8682, 73.1464, 70.3838, 72.0580, 68.4887, 73.3657],
            average: 125.8947
        },
        cooling: {
            weekday: [74.4473, 72.5217, 72.4129, 72.2895, 74.3857, 74.1445, 75.1754, 75.7500, 260.2576, 264.7136, 266.7443, 265.9611, 264.6943, 259.2898, 260.7698, 255.8743, 251.8317, 248.6638, 72.0216, 74.3296, 71.4794, 73.1737, 69.5151, 74.4893],
            weekend: [74.4473, 72.5217, 72.4129, 72.2895, 74.3857, 74.1445, 75.1754, 75.7500, 78.8176, 83.2736, 85.3043, 84.5211, 83.2543, 77.8498, 79.3298, 74.4343, 70.3917, 67.2238, 72.0216, 74.3296, 71.4794, 73.1737, 69.5151, 74.4893],
            average: 126.6519
        }
    }
];

export let ventilationHeatTransfer = [
    { heating: 5098.11810, cooling: 6926.40722 },
    { heating: 3895.56940, cooling: 5395.82691 },
    { heating: 2414.38362, cooling: 3818.01967 },
    { heating: 1033.20923, cooling: 2305.25763 },
    { heating: 34.07879, cooling: 1257.18336 },
    { heating: -1156.48953, cooling: 137.31892 },
    { heating: -1420.45934, cooling: -120.94748 },
    { heating: -1661.16215, cooling: -341.62398 },
    { heating: -411.36152, cooling: 698.76864 },
    { heating: 1460.07131, cooling: 2740.75986 },
    { heating: 2634.20147, cooling: 3942.62978 },
    { heating: 3995.62078, cooling: 5580.10206 }
];


// TOTAL HEAT TRANSFER
export let totalHeatTransfer = transmissionHeatTransfer.map((v, idx) => ({
    heating: v.heating + ventilationHeatTransfer[idx].heating,
    cooling: v.cooling + ventilationHeatTransfer[idx].cooling
}));


// INTERNAL GAINS
let internalGainsDetailed = [
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    },
    {
        weekday: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 8429, 1050, 1050, 1050, 1050, 1050, 1050],
        weekend: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
    }
];

export let internalGains = [
    {occupancy_rate: 541, appliance_rate: 1230, lighting_rate: 1460, total_rate: 3232, occupancy: 1450, appliance: 3295, lighting: 3911, total: 8656, detailed: internalGainsDetailed[0]},
    {occupancy_rate: 544, appliance_rate: 1236, lighting_rate: 1466, total_rate: 3246, occupancy: 1316, appliance: 2990, lighting: 3547, total: 7853, detailed: internalGainsDetailed[1]},
    {occupancy_rate: 559, appliance_rate: 1271, lighting_rate: 1501, total_rate: 3331, occupancy: 1498, appliance: 3404, lighting: 4020, total: 8922, detailed: internalGainsDetailed[2]},
    {occupancy_rate: 517, appliance_rate: 1176, lighting_rate: 1406, total_rate: 3100, occupancy: 1341, appliance: 3048, lighting: 3645, total: 8034, detailed: internalGainsDetailed[3]},
    {occupancy_rate: 559, appliance_rate: 1271, lighting_rate: 1501, total_rate: 3331, occupancy: 1498, appliance: 3404, lighting: 4020, total: 8922, detailed: internalGainsDetailed[4]},
    {occupancy_rate: 554, appliance_rate: 1260, lighting_rate: 1490, total_rate: 3305, occupancy: 1437, appliance: 3266, lighting: 3862, total: 8565, detailed: internalGainsDetailed[5]},
    {occupancy_rate: 523, appliance_rate: 1190, lighting_rate: 1420, total_rate: 3133, occupancy: 1402, appliance: 3186, lighting: 3802, total: 8390, detailed: internalGainsDetailed[6]},
    {occupancy_rate: 559, appliance_rate: 1271, lighting_rate: 1501, total_rate: 3331, occupancy: 1498, appliance: 3404, lighting: 4020, total: 8922, detailed: internalGainsDetailed[7]},
    {occupancy_rate: 536, appliance_rate: 1218, lighting_rate: 1448, total_rate: 3202, occupancy: 1389, appliance: 3157, lighting: 3754, total: 8300, detailed: internalGainsDetailed[8]},
    {occupancy_rate: 541, appliance_rate: 1230, lighting_rate: 1460, total_rate: 3232, occupancy: 1450, appliance: 3295, lighting: 3911, total: 8656, detailed: internalGainsDetailed[9]},
    {occupancy_rate: 554, appliance_rate: 1260, lighting_rate: 1490, total_rate: 3305, occupancy: 1437, appliance: 3266, lighting: 3862, total: 8565, detailed: internalGainsDetailed[10]},
    {occupancy_rate: 523, appliance_rate: 1190, lighting_rate: 1420, total_rate: 3133, occupancy: 1402, appliance: 3186, lighting: 3802, total: 8390, detailed: internalGainsDetailed[11]}
];


// SOLAR GAINS
let solarGainsDetailed = [
    [0, 0, 0, 0, 0, 0, 0, 276.41668, 2343.30686, 6632.96128, 10226.37818, 13952.80763, 14896.36534, 13972.55168, 12181.03903, 8826.62903, 4893.40665, 1243.87508, 5.19580, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 337.48963, 3062.82004, 7033.40586, 10852.52797, 13253.58370, 14702.14612, 14448.01236, 12754.46500, 10112.49046, 6023.98658, 2013.75589, 138.24876, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 109.97548, 1646.55595, 4946.58939, 9065.67097, 11857.35621, 14239.90191, 15510.38786, 15398.10521, 13807.69058, 11895.80918, 7741.35086, 3809.91975, 795.97637, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2.55949, 664.18845, 3011.88347, 6078.15617, 9454.12753, 12446.81481, 14592.30988, 14522.56369, 14225.66249, 12784.02802, 10067.12613, 7274.07931, 3955.69654, 1088.42443, 37.11265, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 111.09434, 1212.82505, 3731.68602, 6954.50577, 9895.52524, 11754.86516, 13418.57067, 13461.38263, 12475.62357, 11125.14992, 9601.80264, 6814.14755, 3991.80936, 1418.75603, 205.93097, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 177.06427, 1345.38578, 3758.20174, 6575.08744, 9087.28135, 10923.50341, 12390.46323, 12567.52750, 12137.22601, 10397.85962, 9174.55235, 6740.04475, 4412.98642, 1819.57499, 363.20876, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 92.47462, 1132.01691, 3554.42682, 6530.09006, 9134.79189, 11101.73771, 12734.92455, 12161.47561, 12333.13827, 11395.10547, 9778.92546, 7385.74604, 4415.39743, 1774.02463, 377.33897, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3.11551, 729.65278, 3151.02828, 6596.78394, 9849.37789, 12466.40750, 13247.15467, 14452.23450, 14680.91304, 12346.77186, 10922.36003, 7781.92449, 4538.67707, 1401.98015, 155.77557, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 296.83987, 2643.80236, 6286.83711, 9511.98301, 11534.34918, 13280.69282, 13178.91915, 12724.79271, 11707.82703, 9799.57073, 6507.34673, 2944.49729, 444.87430, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 54.62558, 1724.97342, 5411.34660, 9461.32131, 12718.37157, 15121.04360, 14845.35512, 14509.06639, 12613.38803, 8951.76706, 4832.65686, 1243.58549, 23.04517, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1054.41208, 4540.77461, 8440.61122, 12306.43455, 14470.53031, 14812.78907, 14080.44036, 12156.56348, 7916.59393, 3714.88934, 681.32877, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 423.16139, 2924.85641, 7234.30565, 11072.35749, 13911.70461, 14500.40322, 13460.04013, 10955.05628, 7417.38325, 3308.55197, 611.72034, 0, 0, 0, 0, 0, 0]
];


export let solarGains = [
    {
        detailed: solarGainsDetailed[0],
        walls: [{ id: 'wall1', gain: 241.58553 }, { id: 'wall2', gain: 25.04568 }, { id: 'wall3', gain: -22.94562 }, { id: 'wall4', gain: 47.97547 }, { id: 'roof', gain: 80.41338 }],
        windows: [{ id: 'win1', gain: 5979.72732 }, { id: 'win2', gain: 1197.85501 }, { id: 'win3', gain: 784.92230 }, { id: 'win4', gain: 1648.14508 }],
        total: 9982.72415
    },
    {
        detailed: solarGainsDetailed[1],
        walls: [{ id: 'wall1', gain: 213.00391 }, { id: 'wall2', gain: 37.50680 }, { id: 'wall3', gain: -13.83079 }, { id: 'wall4', gain: 53.76437 }, { id: 'roof', gain: 129.23398 }],
        windows: [{ id: 'win1', gain: 5273.89493 }, { id: 'win2', gain: 1359.28548 }, { id: 'win3', gain: 817.54209 }, { id: 'win4', gain: 1678.67881 }],
        total: 9549.07958
    },
    {
        detailed: solarGainsDetailed[2],
        walls: [{ id: 'wall1', gain: 243.32896 }, { id: 'wall2', gain: 73.17141 }, { id: 'wall3', gain: 21.88706 }, { id: 'wall4', gain: 109.10915 }, { id: 'roof', gain: 299.35843 }],
        windows: [{ id: 'win1', gain: 5585.98055 }, { id: 'win2', gain: 1959.71715 }, { id: 'win3', gain: 1443.56029 }, { id: 'win4', gain: 2631.98932 }],
        total: 12368.10233
    },
    {
        detailed: solarGainsDetailed[3],
        walls: [{ id: 'wall1', gain: 196.78918 }, { id: 'wall2', gain: 100.63315 }, { id: 'wall3', gain: 56.85913 }, { id: 'wall4', gain: 130.94669 }, { id: 'roof', gain: 417.75598 }],
        windows: [{ id: 'win1', gain: 4235.45424 }, { id: 'win2', gain: 2215.18717 }, { id: 'win3', gain: 1807.27294 }, { id: 'win4', gain: 2741.21268 }],
        total: 11902.11117
    },
    {
        detailed: solarGainsDetailed[4],
        walls: [{ id: 'wall1', gain: 168.61031 }, { id: 'wall2', gain: 126.28929 }, { id: 'wall3', gain: 107.39215 }, { id: 'wall4', gain: 146.34995 }, { id: 'roof', gain: 510.85365 }],
        windows: [{ id: 'win1', gain: 3338.64494 }, { id: 'win2', gain: 2382.08908 }, { id: 'win3', gain: 2368.88016 }, { id: 'win4', gain: 2699.87259 }],
        total: 11848.98212
    },
    {
        detailed: solarGainsDetailed[5],
        walls: [{ id: 'wall1', gain: 145.29316 }, { id: 'wall2', gain: 129.68099 }, { id: 'wall3', gain: 129.42948 }, { id: 'wall4', gain: 150.89121 }, { id: 'roof', gain: 540.60478 }],
        windows: [{ id: 'win1', gain: 2691.67697 }, { id: 'win2', gain: 2222.15706 }, { id: 'win3', gain: 2459.09023 }, { id: 'win4', gain: 2533.13261 }],
        total: 11001.95650
    },
    {
        detailed: solarGainsDetailed[6],
        walls: [{ id: 'wall1', gain: 197.06931 }, { id: 'wall2', gain: 164.95981 }, { id: 'wall3', gain: 156.22602 }, { id: 'wall4', gain: 186.85074 }, { id: 'roof', gain: 659.64444 }],
        windows: [{ id: 'win1', gain: 2920.52161 }, { id: 'win2', gain: 2311.06331 }, { id: 'win3', gain: 2419.47257 }, { id: 'win4', gain: 2579.61236 }],
        total: 11595.42017
    }, 
    {
        detailed: solarGainsDetailed[7],
        walls: [{ id: 'wall1', gain: 251.36588 }, { id: 'wall2', gain: 150.07746 }, { id: 'wall3', gain: 121.44285 }, { id: 'wall4', gain: 181.67738 }, { id: 'roof', gain: 600.21042 }],
        windows: [{ id: 'win1', gain: 3938.65461 }, { id: 'win2', gain: 2337.18575 }, { id: 'win3', gain: 2192.99635 }, { id: 'win4', gain: 2761.76525 }],
        total: 12535.37595
    },
    {
        detailed: solarGainsDetailed[8],
        walls: [{ id: 'wall1', gain: 250.31432 }, { id: 'wall2', gain: 102.23438 }, { id: 'wall3', gain: 53.41033 }, { id: 'wall4', gain: 128.57114 }, { id: 'roof', gain: 378.51999 }],
        windows: [{ id: 'win1', gain: 4350.16751 }, { id: 'win2', gain: 1888.45101 }, { id: 'win3', gain: 1467.43422 }, { id: 'win4', gain: 2274.02900 }],
        total: 10893.13189
    },
    {
        detailed: solarGainsDetailed[9],
        walls: [{ id: 'wall1', gain: 255.56074 }, { id: 'wall2', gain: 56.41015 }, { id: 'wall3', gain: 4.81947 }, { id: 'wall4', gain: 85.03245 }, { id: 'roof', gain: 239.15879 }],
        windows: [{ id: 'win1', gain: 5864.52417 }, { id: 'win2', gain: 1621.99164 }, { id: 'win3', gain: 1026.86559 }, { id: 'win4', gain: 2174.21396 }],
        total: 11328.57696
    },
    {
        detailed: solarGainsDetailed[10],
        walls: [{ id: 'wall1', gain: 243.10406 }, { id: 'wall2', gain: 34.16717 }, { id: 'wall3', gain: -8.98112 }, { id: 'wall4', gain: 55.57391 }, { id: 'roof', gain: 119.88275 }],
        windows: [{ id: 'win1', gain: 5860.74948 }, { id: 'win2', gain: 1280.48300 }, { id: 'win3', gain: 882.75245 }, { id: 'win4', gain: 1703.20801 }],
        total: 10170.93971
    },
    {
        detailed: solarGainsDetailed[11],
        walls: [{ id: 'wall1', gain: 237.25779 }, { id: 'wall2', gain: 22.66416 }, { id: 'wall3', gain: -22.80113 }, { id: 'wall4', gain: 40.23393 }, { id: 'roof', gain: 66.34108 }],
        windows: [{ id: 'win1', gain: 5905.68504 }, { id: 'win2', gain: 1125.91637 }, { id: 'win3', gain: 726.32603 }, { id: 'win4', gain: 1475.83748 }],
        total: 9577.46075
    }
];


// TOTAL GAINS
// these are the hourly gains (solar + internal)
export let totalGainsDetailed = internalGainsDetailed.map((intGains, idx) => ({
    weekday: MathHelper.arrayAdd(intGains.weekday, solarGainsDetailed[idx]),
    weekend: MathHelper.arrayAdd(intGains.weekend, solarGainsDetailed[idx])
}));

export let totalGains = internalGains.map((intGains, idx) => intGains.total + solarGains[idx].total);


// INDOOR CONDITIONS
export let averageIndoorConditions = {
    heating: [18.9741, 19.7124, 20.5312, 20.7238, 20.9464, 21, 21, 21, 21, 20.6535, 20.288, 19.5393],
    cooling: [24.0729, 24.1479, 24.3892, 24.926, 24.9841, 25.2467, 25.6289, 25.4057, 25.106, 24.6313, 24.2688, 24.1394]
};


// DYNAMIC PARAMETERS
export let buildingHeatCapacity =  87360000;

export let dynamicParameters = [
    {
        heating: {
            buildingTimeConstant: 44.74909,
            dimensionlessNumericalParameter: 3.98327,
            heatBalanceRatio: 0.85467,
            utilizationFactor: 0.85676
        },
        cooling: {
            buildingTimeConstant: 44.60091,
            dimensionlessNumericalParameter: 3.97339,
            heatBalanceRatio: 0.63590,
            utilizationFactor: 0.59308
        }
    },
    {
        heating: {
            buildingTimeConstant: 43.94444,
            dimensionlessNumericalParameter: 3.92963,
            heatBalanceRatio: 1.10582,
            utilizationFactor: 0.75523
        },
        cooling: {
            buildingTimeConstant: 43.87673,
            dimensionlessNumericalParameter: 3.92512,
            heatBalanceRatio: 0.80209,
            utilizationFactor: 0.70126
        }
    },
    {
        heating: {
            buildingTimeConstant: 44.22018,
            dimensionlessNumericalParameter: 3.94801,
            heatBalanceRatio: 2.14123,
            utilizationFactor: 0.45441
        },
        cooling: {
            buildingTimeConstant: 44.14486,
            dimensionlessNumericalParameter: 3.94299,
            heatBalanceRatio: 1.36123,
            utilizationFactor: 0.89944
        }
    },
    {
        heating: {
            buildingTimeConstant: 45.87815,
            dimensionlessNumericalParameter: 4.05854,
            heatBalanceRatio: 4.13768,
            utilizationFactor: 0.24111
        },
        cooling: {
            buildingTimeConstant: 45.71987,
            dimensionlessNumericalParameter: 4.04799,
            heatBalanceRatio: 1.87793,
            utilizationFactor: 0.96195
        }
    },
    {
        heating: {
            buildingTimeConstant: 45.94225,
            dimensionlessNumericalParameter: 4.06282,
            heatBalanceRatio: 130.02899,
            utilizationFactor: 0.00769
        },
        cooling: {
            buildingTimeConstant: 45.90747,
            dimensionlessNumericalParameter: 4.06050,
            heatBalanceRatio: 3.53457,
            utilizationFactor: 0.99574
        }
    },
    {
        heating: {
            buildingTimeConstant: 45.52287,
            dimensionlessNumericalParameter: 4.03486,
            heatBalanceRatio: -3.73113,
            utilizationFactor: -0.26802
        },
        cooling: {
            buildingTimeConstant: 45.53292,
            dimensionlessNumericalParameter: 4.03553,
            heatBalanceRatio: 31.39878,
            utilizationFactor: 1
        }
    },
    {
        heating: {
            buildingTimeConstant: 46.63959,
            dimensionlessNumericalParameter: 4.10931,
            heatBalanceRatio: -2.83370,
            utilizationFactor: -0.35290
        },
        cooling: {
            buildingTimeConstant: 46.66446,
            dimensionlessNumericalParameter: 4.11096,
            heatBalanceRatio: -33.20983,
            utilizationFactor: 1
        }
    },
    {
        heating: {
            buildingTimeConstant: 46.02416,
            dimensionlessNumericalParameter: 4.06828,
            heatBalanceRatio: -2.73758,
            utilizationFactor: -0.36529
        },
        cooling: {
            buildingTimeConstant: 46.05019,
            dimensionlessNumericalParameter: 4.07001,
            heatBalanceRatio: -13.28363,
            utilizationFactor: 1
        }
    },
    {
        heating: {
            buildingTimeConstant: 46.72977,
            dimensionlessNumericalParameter: 4.11532,
            heatBalanceRatio: -9.32467,
            utilizationFactor: -0.10724
        },
        cooling: {
            buildingTimeConstant: 46.65478,
            dimensionlessNumericalParameter: 4.11032,
            heatBalanceRatio: 5.52465,
            utilizationFactor: 0.99927
        }
    },
    {
        heating: {
            buildingTimeConstant: 45.49039,
            dimensionlessNumericalParameter: 4.03269,
            heatBalanceRatio: 3.02599,
            utilizationFactor: 0.32792
        },
        cooling: {
            buildingTimeConstant: 45.40088,
            dimensionlessNumericalParameter: 4.02673,
            heatBalanceRatio: 1.62320,
            utilizationFactor: 0.94016
        }
    },
    {
        heating: {
            buildingTimeConstant: 45.16094,
            dimensionlessNumericalParameter: 4.01073,
            heatBalanceRatio: 1.61258,
            utilizationFactor: 0.58199
        },
        cooling: {
            buildingTimeConstant: 45.02604,
            dimensionlessNumericalParameter: 4.00174,
            heatBalanceRatio: 1.08840,
            utilizationFactor: 0.83244
        }
    },
    {
        heating: {
            buildingTimeConstant: 44.82143,
            dimensionlessNumericalParameter: 3.98810,
            heatBalanceRatio: 1.04567,
            utilizationFactor: 0.78128
        },
        cooling: {
            buildingTimeConstant: 44.75883,
            dimensionlessNumericalParameter: 3.98392,
            heatBalanceRatio: 0.75220,
            utilizationFactor: 0.67313
        }
    }
];


// TOTAL DEMAND
let heatingDemand = [5839.25650, 2594.24551, 268.48110, 11.47980, 0, 0, 0, 0, 0, 51.05783, 714.55711, 3145.04875];
let coolingDemand = [1255.21050, 2187.51093, 7222.43655, 9724.10386, 14919.30093, 18944.12968, 20587.67574, 23072.38401, 15721.35263, 8409.43724, 4406.12163, 1888.88818];


// COMPLETE RESULT
export let completeResult = {
    global: {
        buildingHeatCapacity,
        transmissionHeatTransferCoeff: heatTransferCoeffiecient,
        indoorConditions: averageIndoorConditions
    },
    monthly: [0,0,0,0,0,0,0,0,0,0,0,0].map((v, idx) => ({
        internalGain: internalGains[idx],
        solarGain: solarGains[idx],
        totalGain: internalGains[idx].total + solarGains[idx].total,
        totalGainHourly: totalGainsDetailed[idx],
        ventilationTransferCoeffs: ventilationCoefficientDetailed[idx],
        transmissionTransfer: transmissionHeatTransfer[idx],
        ventilationTransfer: ventilationHeatTransfer[idx],
        totalTransfer: totalHeatTransfer[idx],
        dynamicParameters: dynamicParameters[idx],
        energyForHeating: heatingDemand[idx],
        energyForCooling: coolingDemand[idx]
    }))
};


//=========   INPUTS   ==========

export let buildingSettings = {
    floor_area: 336,              // m2
    occupants: 17,                // people
    occupant_density: 20.0,       // m2/person (this can be area/occupants)
    metabolic_load: 88,           // W/person
    appliance_load: 10.0,         // W/m2
    lighting_load: 10.0,          // W/m2
    building_height: 7.5,
    heat_capacity_type: "heavy",
    outdoor_air_flow_rate: 10.0,

    daylighting_factor: 1,
    lighting_occupancy_factor: 1,
    constant_illumination_factor: 1,
    incl_parasitic_lighting: true,
    annual_parasitic_load: 6,

    // HVAC
    hvac_system_type: 0,
    ventilation_type: 1,
    air_leakage_level: 1.1,
    exhaust_air_recirculation_percent: 1.0
};

// weekday and weekend usage factors for each hour of a representative day
export let hourlyConditions = [
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 21.0, wd_cool_point: 24.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 1.0, wd_appliance: 1.0, wd_lighting: 1.0, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10},
    {wd_heat_point: 16.0, wd_cool_point: 29.0, we_heat_point: 16.0, we_cool_point: 29.0, wd_occupancy: 0.10, wd_appliance: 0.10, wd_lighting: 0.10, we_occupancy: 0.10,  we_appliance: 0.10,  we_lighting: 0.10}
];


// definition of external facing building walls and windows
export let buildingElements = [
    {
        id: "wall1",
        type: "wall",
        orientation: "S",
        area: 73.5,
        u_value: 0.353,
        absorptivity: 0.7,
        emissivity: 0.7
    },
    {
        id: "win1",
        type: "window",
        orientation: "S",
        area: 31.5,
        u_value: 3.094,
        emissivity: 0.84,
        solar_transmittance: 0.7,
        reduction_factor_Z_for_temporary: 1
    },
    {
        id: "wall2",
        type: "wall",
        orientation: "E",
        area: 42.0,
        u_value: 0.353,
        absorptivity: 0.7,
        emissivity: 0.7
    },
    {
        id: "win2",
        type: "window",
        orientation: "E",
        area: 18.0,
        u_value: 3.094,
        emissivity: 0.84,
        solar_transmittance: 0.7,
        reduction_factor_Z_for_temporary: 1
    },
    {
        id: "wall3",
        type: "wall",
        orientation: "N",
        area: 73.5,
        u_value: 0.353,
        absorptivity: 0.7,
        emissivity: 0.7
    },
    {
        id: "win3",
        type: "window",
        orientation: "N",
        area: 31.5,
        u_value: 3.094,
        emissivity: 0.84,
        solar_transmittance: 0.7,
        reduction_factor_Z_for_temporary: 1
    },
    {
        id: "wall4",
        type: "wall",
        orientation: "W",
        area: 42.0,
        u_value: 0.353,
        absorptivity: 0.7,
        emissivity: 0.7
    },
    {
        id: "win4",
        type: "window",
        orientation: "W",
        area: 18.0,
        u_value: 3.094,
        emissivity: 0.84,
        solar_transmittance: 0.7,
        reduction_factor_Z_for_temporary: 1
    },
    {
        id: "roof",
        type: "roof",
        area: 112.0,
        u_value: 0.247,
        absorptivity: 0.85,
        emissivity: 0.85
    }
];



// region is Atlanta
// should be an array with each element corresponding to a month of year (0=jan, 11=dec)
// each entry is an object with the relevant data for the given month
// NOTE: currently the following properties are not being actively used in the model
//   * solar_altitude
//   * dry_air_humidity
//   * atmospheric_pressure
//   * relative_humidity
//   * dew_point
//   * sky_cover
export let climate = [
    {
        mon: "jan",
        temp: 3.959353,
        wind_speed: 4.561103634,
        avg_solar_S: 166.12566700312, avg_solar_SE: 119.48246714223, avg_solar_E: 64.49301492324, avg_solar_NE: 32.64064942161, avg_solar_N: 30.17500697888, avg_solar_NW: 37.67957277306, avg_solar_W: 85.11557067266, avg_solar_SW: 143.72680787326, avg_solar_HOR: 115.85464333782,
        solar_altitude: 22.4,
        dry_air_humidity: 3.60,
        atmospheric_pressure: 98645,
        relative_humidity: 65,
        dew_point: -3.033512786,
        sky_cover: 0.616689098,
        sky_temp: 260.3223678,
        solar_transmittance: 0.92428491,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0, 0, 8.58065, 72.74194, 205.90323, 317.45161, 433.12903, 462.41935, 433.74194, 378.12903, 274.00000, 151.90323, 38.61290, 0.16129, 0, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [2.6161, 2.2645, 1.8677, 1.5387, 1.1613, 0.9548, 0.8258, 0.7871, 1.5065, 2.9677, 4.2516, 5.5968, 6.5226, 7.2419, 7.8129, 7.8258, 7.2581, 6.4677, 5.6032, 5.0935, 4.4710, 4.0258, 3.4355, 3.1323],
        hourly_wind_speed: [4.229032, 4.270968, 4.312903, 4.219355, 4.151613, 4.061290, 4.370968, 4.261290, 4.354839, 4.893548, 5.183871, 4.970968, 5.058065, 5.045161, 4.877419, 5.141935, 4.825806, 4.538710, 4.470968, 4.522581, 4.541935, 4.451613, 4.448387, 4.312903]
    },
    {
        mon: "feb",
        temp: 7.932738,
        wind_speed: 5.194940476,
        avg_solar_S: 162.13980146490, avg_solar_SE: 126.62393352006, avg_solar_E: 78.28876176924, avg_solar_NE: 39.39840705351, avg_solar_N: 33.07207742150, avg_solar_NW: 46.43777470915, avg_solar_W: 94.47708860118, avg_solar_SW: 142.50981580975, avg_solar_HOR: 138.67857142857,
        solar_altitude: 26.3,
        dry_air_humidity: 4.28,
        atmospheric_pressure: 98371,
        relative_humidity: 58,
        dew_point: -1.325595238,
        sky_cover: 0.580505952,
        sky_temp: 264.706049,
        solar_transmittance: 0.92466307,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0, 0, 11.85714, 107.60714, 247.10714, 381.28571, 465.64286, 516.53571, 507.60714, 448.10714, 355.28571, 211.64286, 70.75000, 4.85714, 0, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [6.2786, 5.5429, 5.0964, 4.5036, 4.2643, 4.0571, 3.7214, 3.8857, 5.0536, 6.8429, 8.3571, 9.7429, 10.9964, 11.9750, 12.6429, 12.6179, 12.4250, 11.4071, 10.5179, 9.6821, 8.6107, 7.9500, 7.3929, 7.0107],
        hourly_wind_speed: [5.435714, 4.653571, 4.942857, 4.571429, 4.732143, 4.835714, 4.807143, 4.564286, 5.582143, 5.507143, 5.714286, 5.800000, 5.710714, 5.646429, 5.610714, 5.839286, 5.875000, 5.532143, 5.110714, 4.842857, 4.732143, 4.735714, 4.878571, 5.003571]
    },
    {
        mon: "mar",
        temp: 13.766532,
        wind_speed: 4.888037634,
        avg_solar_S: 162.48449882187, avg_solar_SE: 137.05702227164, avg_solar_E: 103.23909542796, avg_solar_NE: 63.15598247525, avg_solar_N: 48.67872841166, avg_solar_NW: 79.16773233255, avg_solar_W: 135.56072922187, avg_solar_SW: 166.50100839833, avg_solar_HOR: 193.68951612903,
        solar_altitude: 32.9,
        dry_air_humidity: 5.72,
        atmospheric_pressure: 98195,
        relative_humidity: 55,
        dew_point: 3.800672043,
        sky_cover: 0.571639785,
        sky_temp: 271.9444134,
        solar_transmittance: 0.88045630,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0, 4.61290, 69.06452, 207.48387, 380.25806, 497.35484, 597.29032, 650.58065, 645.87097, 579.16129, 498.96774, 324.70968, 159.80645, 33.38710, 0, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [11.8226, 11.1452, 10.5710, 10.0548, 9.6968, 9.3742, 9.1774, 9.8097, 11.1290, 12.6742, 14.4387, 15.6871, 16.6484, 17.5452, 18.3484, 18.6516, 18.5194, 17.8742, 16.7645, 15.8581, 14.8613, 14.0645, 13.1226, 12.4452],
        hourly_wind_speed: [4.270968, 3.958065, 4.396774, 4.054839, 4.183871, 4.058065, 4.025806, 4.306452, 4.925806, 5.441935, 5.593548, 5.377419, 5.683871, 5.258065, 5.751613, 5.780645, 5.832258, 5.603226, 5.029032, 4.961290, 4.570968, 4.648387, 4.745161, 4.800000]
    },
    {
        mon: "apr",
        temp: 17.209444,
        wind_speed: 3.952638889,
        avg_solar_S: 138.43374969015, avg_solar_SE: 140.87960242094, avg_solar_E: 127.45077319668, avg_solar_NE: 88.90695861160, avg_solar_N: 64.12226900804, avg_solar_NW: 108.71691774201, avg_solar_W: 155.62290119827, avg_solar_SW: 160.48849168735, avg_solar_HOR: 239.20694444444,
        solar_altitude: 37.9,
        dry_air_humidity: 7.74,
        atmospheric_pressure: 98254,
        relative_humidity: 62,
        dew_point: 8.81,
        sky_cover: 0.448472222,
        sky_temp: 276.7888189,
        solar_transmittance: 0.81673951,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0.13333, 34.60000, 156.90000, 316.63333, 492.50000, 648.40000, 760.16667, 756.53333, 741.06667, 665.96667, 524.43333, 378.93333, 206.06667, 56.70000, 1.93333, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [13.5833, 13.0033, 12.8800, 12.3533, 11.8333, 11.3667, 11.9433, 14.3633, 16.3267, 18.2433, 19.9067, 21.4267, 22.1900, 22.8300, 23.1200, 23.1033, 22.8400, 21.7433, 19.9633, 18.2533, 16.9867, 15.6733, 14.8800, 14.3667],
        hourly_wind_speed: [3.770000, 3.400000, 3.083333, 3.113333, 3.096667, 2.953333, 2.983333, 3.503333, 4.043333, 4.396667, 4.610000, 4.443333, 4.573333, 4.896667, 5.310000, 4.986667, 4.896667, 4.623333, 4.230000, 3.713333, 3.836667, 3.346667, 3.486667, 3.546667]
    },
    {
        mon: "may",
        temp: 20.833468,
        wind_speed: 3.503629032,
        avg_solar_S: 116.93018740985, avg_solar_SE: 138.59523818791, avg_solar_E: 143.85806709187, avg_solar_NE: 113.78875617209, avg_solar_N: 85.46830197106, avg_solar_NW: 129.71396183781, avg_solar_W: 161.90019467151, avg_solar_SW: 147.92005247756, avg_solar_HOR: 263.33333333333,
        solar_altitude: 40.4,
        dry_air_humidity: 10.48,
        atmospheric_pressure: 98033,
        relative_humidity: 67,
        dew_point: 13.69435484,
        sky_cover: 0.593682796,
        sky_temp: 281.8729926,
        solar_transmittance: 0.74558917,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 6.61290, 72.19355, 222.12903, 413.96774, 589.03226, 699.70968, 798.74194, 801.29032, 742.61290, 662.22581, 571.54839, 405.61290, 237.61290, 84.45161, 12.25806, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [17.2935, 16.8903, 16.2452, 15.9452, 15.7290, 15.7774, 16.5484, 18.3355, 20.4645, 22.3516, 23.8484, 24.9000, 25.6742, 25.4903, 26.2387, 26.2000, 25.5548, 24.7645, 23.2903, 21.6581, 20.4710, 19.5613, 18.7903, 18.1194],
        hourly_wind_speed: [3.022581, 3.032258, 3.061290, 3.051613, 2.925806, 3.048387, 3.322581, 3.722581, 3.641935, 3.503226, 3.712903, 4.016129, 3.696774, 3.577419, 3.535484, 3.780645, 4.429032, 4.606452, 3.796774, 3.480645, 3.267742, 3.158065, 3.341935, 3.351613]
    },
    {
        mon: "jun",
        temp: 24.795556,
        wind_speed: 3.852777778,
        avg_solar_S: 106.52395831910, avg_solar_SE: 135.44240730738, avg_solar_E: 149.88438550090, avg_solar_NE: 124.90931684205, avg_solar_N: 98.09936681924, avg_solar_NW: 143.65644519209, avg_solar_W: 169.59627170301, avg_solar_SW: 144.43803455272, avg_solar_HOR: 280.47222222222,
        solar_altitude: 42.8,
        dry_air_humidity: 12.61,
        atmospheric_pressure: 97934,
        relative_humidity: 63,
        dew_point: 16.44902778,
        sky_cover: 0.483333333,
        sky_temp: 286.199821,
        solar_transmittance: 0.69007212,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 11.70000, 88.90000, 248.33333, 434.46667, 600.46667, 721.80000, 818.73333, 830.43333, 802.00000, 687.06667, 606.23333, 445.36667, 291.60000, 120.23333, 24.00000, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [21.1133, 20.4033, 19.9267, 19.5733, 19.0700, 19.3300, 20.5433, 22.5167, 24.7967, 26.5933, 28.0967, 28.9833, 29.8067, 30.3000, 30.3133, 30.1433, 29.7600, 29.0633, 27.8333, 25.4767, 24.0300, 23.1133, 22.4400, 21.9100],
        hourly_wind_speed: [3.193333, 2.973333, 2.986667, 2.936667, 2.976667, 3.506667, 3.506667, 3.963333, 3.930000, 4.190000, 4.093333, 4.533333, 4.583333, 4.606667, 5.170000, 5.343333, 4.646667, 4.346667, 4.133333, 3.283333, 3.310000, 3.276667, 3.323333, 3.646667]
    },
    {
        mon: "jul",
        temp: 26.061022,
        wind_speed: 3.240994624,
        avg_solar_S: 107.67193580126, avg_solar_SE: 134.04645088741, avg_solar_E: 145.33703294282, avg_solar_NE: 119.27190373198, avg_solar_N: 90.87944366160, avg_solar_NW: 133.73286947137, avg_solar_W: 161.08761444665, avg_solar_SW: 141.59134651595, avg_solar_HOR: 262.77016129032,
        solar_altitude: 41.7,
        dry_air_humidity: 15.08,
        atmospheric_pressure: 98213,
        relative_humidity: 71,
        dew_point: 19.84758065,
        sky_cover: 0.540188172,
        sky_temp: 288.5518314,
        solar_transmittance: 0.72174371,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 5.61290, 68.70968, 215.74194, 396.35484, 554.45161, 673.83871, 772.96774, 738.16129, 748.58065, 691.64516, 593.54839, 448.29032, 268.00000, 107.67742, 22.90323, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [23.0774, 22.5387, 21.9710, 21.5806, 21.4097, 21.3484, 22.0065, 23.8387, 25.7484, 27.1774, 28.5258, 29.4935, 30.3548, 30.6258, 30.9677, 31.0903, 30.4355, 29.8065, 28.2129, 26.5935, 25.5968, 25.0548, 24.3290, 23.7742],
        hourly_wind_speed: [2.506452, 2.454839, 2.641935, 2.461290, 2.606452, 2.812903, 3.006452, 3.419355, 3.467742, 3.600000, 3.387097, 3.693548, 3.896774, 3.777419, 3.735484, 4.038710, 3.674194, 3.677419, 3.858065, 3.938710, 3.190323, 2.451613, 2.712903, 2.758065]
    },
    {
        mon: "aug",
        temp: 26.550134,
        wind_speed: 3.387903226,
        avg_solar_S: 129.19391874701, avg_solar_SE: 138.62815395075, avg_solar_E: 133.82738390548, avg_solar_NE: 101.19913157749, avg_solar_N: 75.77678009552, avg_solar_NW: 117.63138682424, avg_solar_W: 156.56361475179, avg_solar_SW: 153.88392566084, avg_solar_HOR: 242.29301075269,
        solar_altitude: 39.1,
        dry_air_humidity: 16.01,
        atmospheric_pressure: 98008,
        relative_humidity: 73,
        dew_point: 20.72446237,
        sky_cover: 0.549731183,
        sky_temp: 289.3616457,
        solar_transmittance: 0.79049029,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0.16129, 37.77419, 163.12903, 341.51613, 509.90323, 645.38710, 685.80645, 748.19355, 760.03226, 639.19355, 565.45161, 402.87097, 234.96774, 72.58065, 8.06452, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [23.8452, 23.6710, 23.3419, 22.9355, 22.6871, 22.5452, 22.9032, 24.2226, 25.7097, 27.4581, 28.7935, 29.6774, 30.3032, 30.9355, 30.9613, 31.1000, 30.4613, 29.4806, 28.3742, 26.9419, 26.0806, 25.3548, 24.9194, 24.3774],
        hourly_wind_speed: [2.548387, 2.525806, 2.641935, 2.603226, 2.845161, 2.900000, 2.761290, 3.248387, 3.245161, 3.445161, 3.335484, 3.458065, 3.541935, 3.996774, 4.025806, 4.277419, 4.545161, 4.403226, 4.306452, 3.758065, 3.890323, 3.316129, 2.890323, 2.835484]
    },
    {
        mon: "sep",
        temp: 22.529167,
        wind_speed: 3.053750000,
        avg_solar_S: 135.08765040587, avg_solar_SE: 126.62358835667, avg_solar_E: 104.75164160842, avg_solar_NE: 68.59046691970, avg_solar_N: 51.43312337882, avg_solar_NW: 81.26512294109, avg_solar_W: 124.33265960999, avg_solar_SW: 141.32957108476, avg_solar_HOR: 181.69166666667,
        solar_altitude: 35.2,
        dry_air_humidity: 12.70,
        atmospheric_pressure: 97812,
        relative_humidity: 72,
        dew_point: 16.82388889,
        sky_cover: 0.466944444,
        sky_temp: 284.1824533,
        solar_transmittance: 0.86133756,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0, 12.83333, 114.30000, 271.80000, 411.23333, 498.66667, 574.16667, 569.76667, 550.13333, 506.16667, 423.66667, 281.33333, 127.30000, 19.23333, 0, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [19.9900, 19.6467, 19.4100, 19.2133, 18.9100, 18.8733, 19.1867, 20.6167, 22.2933, 23.6933, 25.0000, 25.8533, 26.3800, 26.3133, 26.6267, 26.2633, 25.8933, 24.8867, 23.5433, 22.7833, 22.1700, 21.5600, 20.9533, 20.4867],
        hourly_wind_speed: [2.043333, 2.466667, 2.456667, 2.603333, 2.753333, 2.570000, 2.373333, 3.286667, 3.516667, 3.823333, 3.596667, 3.783333, 3.643333, 4.240000, 3.863333, 3.990000, 3.410000, 3.610000, 2.816667, 2.860000, 2.516667, 2.573333, 2.363333, 2.190000]
    },
    {
        mon: "oct",
        temp: 16.031183,
        wind_speed: 4.046505376,
        avg_solar_S: 163.80075668573, avg_solar_SE: 127.42472707617, avg_solar_E: 83.19434303096, avg_solar_NE: 43.40078821426, avg_solar_N: 34.93713865331, avg_solar_NW: 54.19129290640, avg_solar_W: 108.93662926066, avg_solar_SW: 153.04448297726, avg_solar_HOR: 159.85349462366,
        solar_altitude: 28.2,
        dry_air_humidity: 8.80,
        atmospheric_pressure: 98087,
        relative_humidity: 74,
        dew_point: 10.77755376,
        sky_cover: 0.484677419,
        sky_temp: 276.1970761,
        solar_transmittance: 0.90807731,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0, 2.06452, 65.19355, 204.51613, 357.58065, 480.67742, 571.48387, 561.06452, 548.35484, 476.70968, 338.32258, 182.64516, 47.00000, 0.87097, 0, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [13.6516, 13.2484, 12.8129, 12.2032, 11.9290, 11.5710, 11.2645, 12.6387, 14.6581, 16.5355, 18.4613, 19.4806, 20.2452, 21.0613, 21.4161, 21.3452, 20.5903, 18.8129, 17.5194, 16.2548, 15.6032, 14.9097, 14.4774, 13.8290],
        hourly_wind_speed: [3.480645, 3.767742, 3.577419, 3.609677, 3.345161, 3.445161, 3.383871, 3.725806, 4.206452, 4.693548, 4.619355, 5.106452, 4.945161, 4.667742, 4.909677, 5.135484, 4.893548, 3.722581, 3.722581, 3.648387, 3.661290, 3.648387, 3.551613, 3.645161]
    },
    {
        mon: "nov",
        temp: 11.945833,
        wind_speed: 4.161388889,
        avg_solar_S: 166.04514814531, avg_solar_SE: 121.33807465956, avg_solar_E: 68.69543386584, avg_solar_NE: 35.20358596919, avg_solar_N: 32.17238282674, avg_solar_NW: 40.44976115272, avg_solar_W: 88.58995967855, avg_solar_SW: 144.38810703040, avg_solar_HOR: 123.05694444444,
        solar_altitude: 24.1,
        dry_air_humidity: 5.86,
        atmospheric_pressure: 98102,
        relative_humidity: 63,
        dew_point: 4.173472222,
        sky_cover: 0.519166667,
        sky_temp: 270.3190692,
        solar_transmittance: 0.92943874,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0, 0, 33.06667, 142.40000, 264.70000, 385.93333, 453.80000, 464.53333, 441.56667, 381.23333, 248.26667, 116.50000, 21.36667, 0, 0, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [9.7900, 9.0933, 8.6067, 8.1367, 7.6500, 7.4067, 7.0900, 7.4167, 9.2767, 11.4633, 13.5533, 14.9733, 16.1800, 17.3333, 17.8333, 17.8400, 16.8667, 15.0567, 13.8667, 12.8600, 12.1067, 11.2767, 10.7400, 10.0267],
        hourly_wind_speed: [3.860000, 4.056667, 3.556667, 3.800000, 3.766667, 3.456667, 3.746667, 3.683333, 4.526667, 4.540000, 4.586667, 4.703333, 4.920000, 5.023333, 5.120000, 4.560000, 4.350000, 3.870000, 4.013333, 4.213333, 3.930000, 3.840000, 4.050000, 3.766667]
    },
    {
        mon: "dec",
        temp: 7.689799,
        wind_speed: 4.690872483,
        avg_solar_S: 161.30607691293, avg_solar_SE: 116.34522831590, avg_solar_E: 59.75569950780, avg_solar_NE: 29.23978020680, avg_solar_N: 27.65383507148, avg_solar_NW: 32.83187746952, avg_solar_W: 75.55756725703, avg_solar_SW: 135.27813808891, avg_solar_HOR: 105.07785234899,
        solar_altitude: 20.8,
        dry_air_humidity: 4.53,
        atmospheric_pressure: 98424,
        relative_humidity: 64,
        dew_point: 0.261342282,
        sky_cover: 0.555704698,
        sky_temp: 265.0909842,
        solar_transmittance: 0.93738435,
        hourly_horiz_solar_rad: [0, 0, 0, 0, 0, 0, 0, 12.45161, 86.06452, 212.87097, 325.80645, 409.35484, 426.67742, 396.06452, 322.35484, 218.25806, 97.35484, 18.00000, 0, 0, 0, 0, 0, 0],
        hourly_dry_bulb_temp: [5.9871, 5.3871, 4.7968, 4.4065, 4.0710, 3.8968, 3.7129, 3.5387, 5.0871, 6.8677, 8.5968, 10.0516, 11.1548, 12.1677, 12.6452, 12.5355, 11.7387, 10.5355, 9.4516, 8.8419, 8.0194, 7.4742, 7.0000, 6.7742],
        hourly_wind_speed: [4.606452, 4.480645, 4.470968, 4.461290, 4.593548, 4.577419, 4.641935, 4.677419, 4.903226, 5.190323, 5.325806, 5.287097, 5.216129, 4.883871, 4.980645, 4.667742, 4.400000, 4.183871, 4.467742, 4.612903, 4.425806, 4.532258, 4.293548, 4.612903]
    }
];
