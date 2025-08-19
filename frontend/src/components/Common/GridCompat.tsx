import React from 'react';
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

// Compatibility component for Material-UI Grid to handle v7 API changes
interface GridCompatProps extends Omit<MuiGridProps, 'item'> {
  item?: boolean;
  container?: boolean;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
}

export const Grid: React.FC<GridCompatProps> = ({ 
  item, 
  container, 
  xs, 
  sm, 
  md, 
  lg, 
  xl, 
  children, 
  ...props 
}) => {
  // For Material-UI v7, we need to handle the Grid API differently
  const gridProps: any = { ...props };
  
  if (container) {
    gridProps.container = true;
  }
  
  if (item) {
    gridProps.size = {};
    if (xs !== undefined) gridProps.size.xs = xs;
    if (sm !== undefined) gridProps.size.sm = sm;
    if (md !== undefined) gridProps.size.md = md;
    if (lg !== undefined) gridProps.size.lg = lg;
    if (xl !== undefined) gridProps.size.xl = xl;
  }

  return <MuiGrid {...gridProps}>{children}</MuiGrid>;
};

export default Grid;
