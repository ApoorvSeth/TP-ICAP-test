import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

import ResizableDraggablePanel from '../components/ResizableDraggablePanel';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface FruitEnrichmentPanelProps {
  fruit: {
    id: string;
    name: string;
    country: string;
    type: string;
    status: string;
    details: string;
  };
  onClose: () => void;
}

const FruitEnrichmentPanel: React.FC<FruitEnrichmentPanelProps> = ({
  fruit,
  onClose,
}) => {
  const [panelState, setPanelState] = useState({
    x: 200,
    y: 120,
    width: 400,
    height: 220,
  });

  const columnDefs: ColDef[] = [
    {
      headerName: 'Property',
      field: 'property',
      flex: 1,
      cellStyle: {
        fontWeight: 700,
        color: '#333',
        fontFamily: 'monospace',
      },
    },
    {
      headerName: 'Value',
      field: 'value',
      flex: 2,
      cellStyle: {
        color: '#333',
        fontFamily: 'monospace',
      },
    },
  ];

  const rowData = useMemo(
    () => [
      { property: 'ID', value: fruit.id },
      { property: 'Country', value: fruit.country },
      { property: 'Type', value: fruit.type },
      { property: 'Status', value: fruit.status },
      { property: 'Details', value: fruit.details },
    ],
    [fruit]
  );

  const handleMove = (dx: number, dy: number) => {
    setPanelState((prev) => ({
      ...prev,
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  };

  const handleResize = (dw: number, dh: number) => {
    setPanelState((prev) => ({
      ...prev,
      width: Math.max(320, prev.width + dw),
      height: Math.max(160, prev.height + dh),
    }));
  };

  return (
    <ResizableDraggablePanel
      id={`fruit-enrichment-${fruit.id}`}
      title={`${fruit.name} Enrichment`}
      content={
        <div className="ag-theme-alpine" style={{
          height: panelState.height - 40,
          width: '100%',
          overflow: 'auto',
          background: '#20263a',
          borderRadius: 10,
          color: '#e0e6f5',
        }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            domLayout="normal"
            headerHeight={32}
            rowHeight={32}
            suppressCellFocus
            suppressMovableColumns
            suppressMenuHide
          />
        </div>
      }
      {...panelState}
      minWidth={320}
      minHeight={160}
      onClose={onClose}
      onMove={handleMove}
      onResize={handleResize}
    />
  );
};

export default FruitEnrichmentPanel;
