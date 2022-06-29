import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ChartHelper from '../helpers/ChartHelper';
import Utils from '../helpers/Utils';
import './Chart.css';

const Chart = ({ sales }) => {
    const series = [];

    for (let sale in sales) {
        for (let name in sales[sale]) {
            if (!series[name]) {
                series[name] = [sales[sale][name]];
            } else {
                series[name].push(sales[sale][name])
            }
        }
    }

    const dates = series['weekEnding'] && series['weekEnding'].reduce((acc, date) => {
        acc.push(Utils.toDateString(date));
        return acc;
    }, [])

    const options = ChartHelper.getChartOption(dates, [{
        name: 'Retail Sales',
        data: series['retailSales']
    }, {
        name: 'Retailer Margin',
        data: series['retailerMargin']
    }]);

    return (
        <div className='chart-box'>
            <div className='chart'>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    )
}

export default Chart;