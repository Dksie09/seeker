import React,{ useState } from "react";

const Header = () => {
  const [txt,setTxt]= useState("")
  return (
  <header>
      <h1>Seeker</h1>
      <input
        type="text"
        placeholder="Enter keywords"
        value={txt}
        onChange={(event) => setTxt(event.target.value)}
      />
  </header>
  )
}

export default Header