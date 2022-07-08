import { useTable, useSortBy } from 'react-table'
import { useMemo } from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'

export const Table = ({ columns, data }) => {
    // const memoColumns = useMemo(() => columns, [columns])
    // const memoData = useMemo(() => data, [data])

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useSortBy
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                            >
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <FaSortDown />
                                        ) : (
                                            <FaSortUp />
                                        )
                                    ) : (
                                        <FaSort />
                                    )}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow()
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
