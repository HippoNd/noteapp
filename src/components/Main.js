import React from 'react'
export default function Main(props) {

  const onEditField = (field, value) => {
  
    props.onEditNote({
      ...props.activeNote,
      [field]:value,
      lastModified: Date.now()
    })
  }

  if (!props.activeNote) return (
    <>
      <div className='no-active-note'>
        No Active Note
      </div>
    </>
  )
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          autoFocus
          onChange={(e) => {onEditField("title",e.target.value)}}
          value={props.activeNote.title}
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          onChange={(e) => {onEditField("body",e.target.value)}}
          value={props.activeNote.body}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{props.activeNote.title}</h1>
        <div className="markdown-preview">
          {props.activeNote.body}
        </div>
      </div>
    </div>
  );
}
