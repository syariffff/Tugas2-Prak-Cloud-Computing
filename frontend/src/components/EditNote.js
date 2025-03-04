import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
    const [judul, setJudul] = useState("");
    const [isi, setIsi] = useState("");
    const [kategori, setKategori] = useState("Pribadi");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getNoteById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/notes/${id}`);
                setJudul(response.data.judul);
                setIsi(response.data.isi);
                setKategori(response.data.kategori);
            } catch (error) {
                console.log(error);
            }
        };
        getNoteById();
    }, [id]);

    const updateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/note/${id}`, {
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
                <h2 className="title has-text-centered">Edit Catatan</h2>
                <form onSubmit={updateNote}>
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
                        <button className='button is-info is-fullwidth' type='submit'>Perbarui Catatan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNote;