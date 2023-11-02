import { FC } from 'react';
interface TagSelectProps {
    value: never;
    newLabelTip?: string;
    placeholder?: string;
    notFoundContent?: string;
    options?: never[];
    getData?: () => never[];
    setTagValue: (value: string) => void;
}
declare const TagSelect: FC<TagSelectProps>;
export default TagSelect;
