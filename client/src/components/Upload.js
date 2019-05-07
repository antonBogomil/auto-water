import React, {useState} from 'react';
import {api} from "../api";


const Upload = ({userId,update}) => {
    const [data, setData] = useState({
        description: '',
        file: ''
    });
    const [open, setOpen] = useState(false);

    function submit(e) {
        e.preventDefault();
        const fullData = {
            ...data,
            userId,
        };
        api.upload('/admin/upload', fullData, (res) => {
            setOpen(false);
            console.log(window);
            window.location.reload();
        })
    }

    const onChange = (e, name) => {
        e.persist();

        setData((prev) => {
            if (e.target.files && e.target.files[0]) {
                return {
                    ...prev,
                    file: e.target.files[0]
                }
            }
            return {
                ...prev,
                [name]: e.target.value
            }

        })
    };
    const {description} = data;
    return (
        <div className='upload-container'>
            {open ? <>
                    <div className='modal'>
                     <div className='modal-inner'>
                         Загрузить файлы
                         <form
                             className='form center'
                             onSubmit={submit}
                         >
                             <div className='close-modal' onClick={() => {
                                 setOpen(false)
                             }}>
                             </div>
                             <div className='form-control'>
                                 <input required
                                        type="text"
                                        placeholder="Enter Description"
                                        onChange={(e) => {
                                            onChange(e, 'description')
                                        }}
                                        value={description}
                                 />
                             </div>
                             <div className='form-control'>
                                 <input required
                                        type="file"
                                        placeholder="Upload file"
                                        onChange={(e) => {
                                            onChange(e, 'file')
                                        }}
                                 />
                             </div>
                             <div className='form-control'>
                                 <button type='submit'>Загрузить</button>
                                 <button className='btn btn-default' type='reset' onClick={()=>{setOpen(false)}}>Закрыть</button>
                             </div>
                         </form>
                     </div>
                    </div>
                </>
                :
                <button onClick={() => {
                    setOpen(true)
                }}>
                    <span className="oi oi-plus"/>
                </button>
            }


        </div>
    );
};

export default Upload;