import React, { type FC } from 'react';
import './index.less';
interface LinkClickProps {
    classList?: string;
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}
declare const LinkClick: FC<React.PropsWithChildren<LinkClickProps>>;
export default LinkClick;
