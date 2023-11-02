import { CSSProperties, ReactNode, type FC } from 'react';
type DivideAreaTitleProps = {
    title: ReactNode;
    style?: CSSProperties;
    noLine?: boolean;
    subTitle?: boolean;
};
declare const DivideAreaTitle: FC<DivideAreaTitleProps>;
export default DivideAreaTitle;
