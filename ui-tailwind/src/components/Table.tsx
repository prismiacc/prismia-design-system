import React from 'react';

/**
 * Table component for tabular data
 * @example
 * <Table headers={['Name', 'Email', 'Role']}>
 *   <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
 * </Table>
 */

export interface TableProps {
  headers?: string[];
  children: React.ReactNode;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  responsive?: boolean;
}

export const Table: React.FC<TableProps> = ({
  headers,
  children,
  striped = false,
  bordered = false,
  hoverable = true,
  responsive = true,
}) => {
  const tableContent = (
    <table
      className="w-full"
      style={{
        borderCollapse: 'collapse',
        color: 'var(--semantic-text-primary)',
      }}
    >
      {headers && (
        <thead>
          <tr
            style={{
              backgroundColor: 'var(--semantic-background-tertiary)',
              borderBottom: '2px solid var(--semantic-border-default)',
            }}
          >
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--semantic-text-primary)' }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody
        className={`${striped ? 'striped-rows' : ''} ${hoverable ? 'hoverable-rows' : ''}`}
        style={{
          ...(striped && {
            '& tr:nth-child(even)': {
              backgroundColor: 'var(--semantic-background-surface)',
            },
          }),
        }}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              style: {
                borderBottom: bordered ? '1px solid var(--semantic-border-default)' : 'none',
                backgroundColor: striped && index % 2 === 1 ? 'var(--semantic-background-tertiary)' : 'transparent',
                ...(child.props.style || {}),
              },
              className: `${child.props.className || ''} ${hoverable ? 'hover:opacity-80' : ''}`,
            });
          }
          return child;
        })}
      </tbody>
    </table>
  );

  if (responsive) {
    return (
      <div
        className="overflow-x-auto"
        style={{
          border: bordered ? '1px solid var(--semantic-border-default)' : 'none',
          borderRadius: 'var(--radius-s)',
        }}
      >
        {tableContent}
      </div>
    );
  }

  return tableContent;
};

export default Table;