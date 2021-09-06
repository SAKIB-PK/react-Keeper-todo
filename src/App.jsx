import React from 'react'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Note from './Component/Note'
import notes from './Component/Notes'

function App() {
    return (
        <div>
            <Header />
            
            {/* create Notes Element one by one  */
            notes.map(note=><Note 
                key={note.key}
                title={note.title}
                content ={note.content}
            />)}
            
            <Footer/>
        </div>
    )
}

export default App
