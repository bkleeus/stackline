import { useEffect, useState, useMemo } from 'react';
import ReactDataGrid from 'react-data-grid';
import ChartHelper from '../helpers/ChartHelper';
import Utils from '../helpers/Utils';
import './Table.css';

const Table = ({ sales } = []) => {
    const [columns, setColumns] = useState([]);
    const [sortColumns, setSortColumns] = useState([]);
    const [rows, setRows] = useState(sales);

    useEffect(() => {
        const loadColumns = () => {
            const columns = ChartHelper.loadColumns();
            setColumns(columns);
        }
        loadColumns();
    }, []);

    const sortedRows = useMemo(() => {
        if (sortColumns.length === 0) return rows;

        return [...rows].sort((a, b) => {
            for (const sort of sortColumns) {
                const comparator = Utils.getComparator(sort.columnKey);
                const compResult = comparator(a, b);
                if (compResult !== 0) {
                    return sort.direction === 'ASC' ? compResult : -compResult;
                }
            }
            return 0;
        });
    }, [rows, sortColumns]) || [];

    return (
        <header className='table-box'>
            <style>
                {`.rdg-header-row {
                        text-align: center;
                        font-weight: 300;
                        color: #5D6F86;
                        background-color: white;
                }`}
            </style>
            <ReactDataGrid
                minHeight={500}
                columns={columns}
                rows={sortedRows}
                rowHeight={58}
                rowsCount={sortedRows.length}
                sortColumns={sortColumns}
                onSortColumnsChange={setSortColumns}
            />
        </header>
    )
}

export default Table;