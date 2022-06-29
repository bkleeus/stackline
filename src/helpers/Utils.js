export default class Utils {
    static formatNumber = (props) => {
        const value = props.row[props.column.key];
        if (!value || Number.isNaN(value)) {
            return value;
        }

        return value.toLocaleString('en-US');
    }

    static formatCurrency = (props) => {
        const value = props.row[props.column.key];
        if (!value || Number.isNaN(value)) {
            return value;
        }

        return `$${value.toLocaleString('en-US')}`;
    }

    static formatDate = (props) => {
        const value = props.row[props.column.key];
        if (!value) {
            return value;
        }

        const date = value.replace(/[//-]/g, '').substr(0, 8);

        return `${date.substr(4, 2)}-${date.substr(6, 2)}-${date.substr(2, 2)}`;
    }

    static toDateString = (value) => {
        if (!value) {
            return value;
        }

        const date = value.replace(/[//-]/g, '').substr(0, 8);

        return `${date.substr(4, 2)}-${date.substr(6, 2)}-${date.substr(2, 2)}`;
    }

    static getComparator = (sortColumn) => {
        switch (sortColumn) {
            case 'weekEnding':
                return (a, b) => { // @TODO: Should compare two dates instead of strings
                    return a[sortColumn].localeCompare(b[sortColumn]);
                };

            default:
                return (a, b) => {
                    return a[sortColumn] - b[sortColumn];
                };
        }
    }
}