import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const NoteList = () => {
  const [notes, setNote] = useState([]);

  useEffect(() =>{
    getNotes();
  },[]);

  const getNotes = async () => {
    const response = await axios.get('http://localhost:5000/notes');
    setNote(response.data);
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/note/${id}`);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-three-quarters box p-5">
        <h2 className="title has-text-centered">Daftar Catatan</h2>
        <div className="buttons is-centered">
          <Link to={`add`} className='button is-success is-medium'>Tambah Catatan</Link>
        </div>
        <table className='table is-striped is-fullwidth is-hoverable'>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Isi</th>
              <th>Kategori</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={note.id} >
                <td>{index+1}</td>
                <td><strong>{note.judul}</strong></td>
                <td>{note.isi.length > 50 ? note.isi.substring(0, 50) + "..." : note.isi}</td>
                <td>
                  <span className={`tag ${note.kategori === "Pribadi" ? "is-primary" : note.kategori === "Pendidikan" ? "is-info" : note.kategori === "Pekerjaan" ? "is-warning" : "is-danger"}`}>
                    {note.kategori}
                  </span>
                </td>
                <td>
                  <div className="buttons">
                    <Link className='button is-small is-info' to={`edit/${note.id}`}>Edit</Link>
                    <button onClick={() => deleteNote(note.id)} className='button is-small is-danger'>Hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NoteList;