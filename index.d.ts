import * as React from "react";
import { StyledComponentClass } from "styled-components";

declare type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];
declare type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

declare module "grid-styled" {
  type ResponsiveProp = number | string | number[] | string[];

  interface CommonProps {
    width: ResponsiveProp;
    fontSize: ResponsiveProp;
    color: ResponsiveProp;
    bg: ResponsiveProp;
    m: ResponsiveProp;
    mt: ResponsiveProp;
    mr: ResponsiveProp;
    mb: ResponsiveProp;
    ml: ResponsiveProp;
    mx: ResponsiveProp;
    my: ResponsiveProp;
    p: ResponsiveProp;
    pt: ResponsiveProp;
    pr: ResponsiveProp;
    pb: ResponsiveProp;
    pl: ResponsiveProp;
    px: ResponsiveProp;
    py: ResponsiveProp;
  }

  interface BoxProps
    extends Omit<React.HTMLProps<HTMLDivElement>, "width" | "wrap" | "is"> {
    flex: ResponsiveProp;
    order: ResponsiveProp;
    is: string | React.ComponentClass<any>;
  }

  interface FlexProps extends BoxProps {
    wrap: ResponsiveProp | boolean;
    direction: ResponsiveProp | boolean;
    align: ResponsiveProp | boolean;
    justify: ResponsiveProp | boolean;
    column: boolean;
  }

  type BoxComponent = StyledComponentClass<
    Partial<CommonProps & BoxProps>,
    any
  >;
  type FlexComponent = StyledComponentClass<
    Partial<CommonProps & FlexProps>,
    any
  >;

  export const Box: BoxComponent;
  export const Flex: FlexComponent;
  export const Grid: BoxComponent;
  export const Golden: BoxComponent;
  export const Half: BoxComponent;
  export const Third: BoxComponent;
  export const Quarter: BoxComponent;
}
