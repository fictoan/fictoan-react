import React from 'react';

import { BaseComponent } from '../../BaseComponent';

const FileUpload = (props) =>
    <BaseComponent
        Element="input"
        baseClassName="ff-input"
        type="file"
        {...props}
    />

export default FileUpload
