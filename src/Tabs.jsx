import React, { useState } from "react";
import styled from "styled-components";

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: #eee;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div className="tabs">
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>

    </>
  );
}

const types = ["All", "Tech", "Management","Marketing","Medical","Teacher","Others"];

export default TabGroup