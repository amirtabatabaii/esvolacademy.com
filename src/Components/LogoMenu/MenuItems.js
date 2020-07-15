import React from "react";

export default ({ close }) => (
  <div className='menu'>
    <ul>
      <li onClick={close}>Home</li>
      <li onClick={close}>Getting Started</li>
      <li onClick={close}>Component API</li>
      <li onClick={close}>Contributing</li>
    </ul>
  </div>
);
