declare module "react-split" {
  export interface SplitProps {
    className?: string;
    sizes?: number[];
    minSize?: number | number[];
    expandToMin?: boolean;
    gutterSize?: number;
    gutterAlign?: "center" | "start" | "end";
    snapOffset?: number;
    dragInterval?: number;
    direction?: "horizontal" | "vertical";
    cursor?: string;
    gutter?: (index, direction, pairElement) => HTMLElement;
    elementStyle?: (dimension, elementSize, gutterSize, index) => Object;
    gutterStyle?: (dimension, gutterSize, index) => Object;
    onDrag?: (sizes: number[]) => void;
    onDragStart?: (sizes: number[]) => void;
    onDragEnd?: (sizes: number[]) => void;
  }
  const Split: React.ComponentType<SplitProps>;
  export default Split;
}
