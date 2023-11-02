import React, { FC } from 'react';
type SearchInputProps = {
    btnText?: string;
    inputStyle?: React.CSSProperties;
    onSearch: (value: string) => void;
};
declare const SearchInput: FC<SearchInputProps>;
export default SearchInput;
