function generateData(count, start, growth){
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push(start + Math.random() * i * growth);
    }
    return data;
}

export const chartData = [{
    name: 'BTC',
    data:generateData(12,15,5),
    color: '#149947',},
    {
        name: 'DOGE',
    data:generateData(12,5,3),
    color: '#C1FAD7',}
];
