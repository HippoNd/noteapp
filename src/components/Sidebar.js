import React from 'react'

export default function Sidebar(props) {
  return (
    <>
      <div className='app-sidebar'>
        <div className='app-sidebar-header'>
          <h1>Notes</h1>
          <button onClick={props.onAddNotes}>Add</button>
        </div>
        <div className='app-sidebar-notes'>
          {props.notes.map((item, index) => {
            return (
              <div key={index} onClick={() => props.setActiveNote(item.id)} className={`app-sidebar-note ${item.id === props.activeNote && "active"}`}>
                <div className="sidebar-note-title">
                  <strong>{item.title}</strong>
                  <button onClick={(e) => props.onDeleteNote(item.id)}>Delete</button>
                </div>

                <p>{item.body}</p>
                <small className="note-meta">
                  Last Modified: {new Date(item.lastModified).toLocaleDateString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  
                </small>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
