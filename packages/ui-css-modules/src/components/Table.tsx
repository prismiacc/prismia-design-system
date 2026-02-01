import React from 'react';
import styles from '../styles/Table.module.css';

export interface TableColumn {
  header: string;
  accessor: string;
  width?: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  striped?: boolean;
  hoverable?: boolean;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  striped = false,
  hoverable = false
}) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={`${styles.table} ${striped ? styles['table--striped'] : ''} ${hoverable ? styles['table--hoverable'] : ''}`}>
        <thead className={styles.table__head}>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={styles.table__header}
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.table__row}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={styles.table__cell}>
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};