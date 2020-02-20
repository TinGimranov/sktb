function createChart(El_id, time_list, t1_list, t2_list) {
    var ctx = document.getElementById(El_id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: time_list,
            datasets: [{
                label: 'T1',
                data: t1_list,
                borderWidth: 1,
                borderColor: 'red',
                fill: false,
            },{
                label: 'T2',
                data: t2_list,
                borderWidth: 1,
                borderColor: 'blue',
                fill: false,
            }],
        },
        options: {
            legend: {
                position: 'bottom',
            }
        },
    });
}


createChart(
    'chart-build-1_device_1', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [12, 19, 3, 5, 2, 3],
    [15, 21, 1, 18, 10, 5]
)

createChart(
    'chart-build-1_device_2', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [11, 10, 1, 7, 8, 24],
    [12, 19, 3, 5, 2, 3]
)

createChart(
    'chart-build-1_device_3', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [11, 10, 1, 7, 8, 24],
    [12, 19, 3, 5, 2, 3]
)

createChart(
    'chart-build-2_device_1', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [12, 19, 3, 5, 2, 3],
    [15, 21, 1, 18, 10, 5]
)

createChart(
    'chart-build-2_device_2', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [11, 10, 1, 7, 8, 24],
    [12, 19, 3, 5, 2, 3]
)

createChart(
    'chart-build-2_device_3', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [11, 10, 1, 7, 8, 24],
    [12, 19, 3, 5, 2, 3]
)

createChart(
    'chart-build-3_device_1', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [12, 19, 3, 5, 2, 3],
    [11, 10, 1, 7, 8, 24]
)

createChart(
    'chart-build-3_device_2', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [12, 19, 3, 5, 2, 3],
    [11, 10, 1, 7, 8, 24]
)

createChart(
    'chart-build-3_device_3', 
    ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    [12, 19, 3, 5, 2, 3],
    [11, 10, 1, 7, 8, 24]
)