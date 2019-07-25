import React from "react";

import { BaseComponent } from "../BaseComponent";
import { PropType } from "../typings";

const Table = (props: PropType) => (
  <BaseComponent Element="table" baseClassName="ff-table" {...props} />
);

export default Table;
