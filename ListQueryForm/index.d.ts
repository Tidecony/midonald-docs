import { FormItemProps } from '@aurum/pfe-ui';
import React, { FC } from 'react';
import './index.less';
export interface ListQueryFormProps {
    queryBtnText?: string;
    resetBtnText?: string;
    showFilterText?: string;
    hideFilterText?: string;
    noHide?: boolean;
    formItems: {
        showItems: ListQueryItemProps[];
        hideItems?: ListQueryItemProps[];
    };
    onSearch: (params: any) => void;
}
type ListQueryItemProps = {
    span?: number;
    label?: string;
    name?: string;
    type?: string;
    title?: string;
    props?: FormItemProps;
    render?: () => React.ReactNode;
};
declare const ListQueryForm: FC<ListQueryFormProps>;
export default ListQueryForm;
