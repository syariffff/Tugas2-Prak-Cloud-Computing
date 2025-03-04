import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
    const [judul, setJudul] = useState("");
    const [isi, setIsi] = useState("");
    const [kategori, setKategori] = useState("Pribadi");
    const navigate = useNavigate();

    const saveNote = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/add-notes", {
                judul,
                isi,
                kategori,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns is-centered mt-5">
            <div className="column is-half box p-5">
                <h2 className="title has-text-centered">Tambah Catatan</h2>
                <form onSubmit={saveNote}>
                    <div className="field">
                        <label className='label'>Judul</label>
                        <div className="control">
                            <input 
                                className='input' 
                                type="text" 
                                placeholder='Judul'
                                value={judul}
                                onChange={(e) => setJudul(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Isi</label>
                        <div className="control">
                            <textarea
                                className='textarea' 
                                placeholder='Isi catatan...'
                                rows={4}
                                value={isi}
                                onChange={(e) => setIsi(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Kategori</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select 
                                    value={kategori}
                                    onChange={(e) => setKategori(e.target.value)}
                                >
                                    <option value="Pribadi">Pribadi</option>
                                    <option value="Pendidikan">Pendidikan</option>
                                    <option value="Pekerjaan">Pekerjaan</option>
                                    <option value="Keuangan">Keuangan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button className='button is-success is-fullwidth' type='submit'>Simpan Catatan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNote;