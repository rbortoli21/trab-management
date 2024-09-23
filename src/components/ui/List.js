import React from 'react';

const List = ({ children }) => (
  <ul className="space-y-4">{children}</ul>
);

const ListItem = ({ children }) => (
  <li className="bg-white shadow-md rounded-md p-4">{children}</li>
);

export default List;
export { ListItem };