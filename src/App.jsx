import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import TabGroup from "./Tabs"
import content from "./content"

function createNote(content){
    return <Note 
    key={content.data[0].id}
    authorName={content.data[0].name}
    txt={content.data[0].description}
    time={content.data[0].created_at} />
}

function App(){
    return <div>
        <Header/>
        <TabGroup/>
        {content.map(createNote)}
        <Footer/>
    </div>
}

export default App