import Utils from "./Utils";

export default class ChartHelper {
    static loadColumns() {
        const defaultColumnProperties = {
            sortable: true,
            resizable: true,
        }

        return [
            {
                key: "weekEnding",
                name: "Week Ending".toUpperCase(),
                cellClass: 'date',
                locked: true,
                formatter: (props) => Utils.formatDate(props)
            },
            {
                key: "retailSales",
                name: "Retail Sales".toUpperCase(),
                cellClass: 'number',
                formatter: (props) => Utils.formatCurrency(props)
            },
            {
                key: "wholesaleSales",
                name: "Wholesale Sales".toUpperCase(),
                cellClass: 'number',
                formatter: (props) => Utils.formatCurrency(props)
            },
            {
                key: "unitsSold",
                name: "Units Sold".toUpperCase(),
                cellClass: 'number',
                formatter: (props) => Utils.formatNumber(props)
            },
            {
                key: "retailerMargin",
                name: "Retailer Margin".toUpperCase(),
                cellClass: 'number',
                formatter: (props) => Utils.formatCurrency(props)
            },
        ].map(c => ({ ...c, ...defaultColumnProperties }));
    }

    static getChartOption(dates, series) {
        return {
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                    minWidth: 500,
                    scrollPositionX: 1
                },
                zoomType: 'x',
                height: 500,
            },
            title: {
                text: 'Retail Sales',
                align: 'left',
                marginLeft: 151,
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    overflow: 'justify'
                },
                categories: dates
            },
            yAxis: {
                title: {
                    text: ''
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
            },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                }
            },
            series: series,
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            },
            credits: {
                enabled: false
            },
        }
    }
}