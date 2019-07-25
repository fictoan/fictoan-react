import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";


const FileUpload = (props: PropType) =>
    // @ts-ignore
    <BaseComponent
        Element="input"
        baseClassName="ff-input"
        type="file"
        {...props}
    />

export default FileUpload
