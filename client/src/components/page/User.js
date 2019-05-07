import React, {useState, useEffect} from 'react';
import {useFetch} from "../../hooks";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Upload from "../Upload";
import ru from '../../dictionary'
import pdf from '../../assets/pdf-icon.png';
import img from '../../assets/img-icon.png';
import excel from '../../assets/excel-icon.png';
import defaultIcon from '../../assets/default.png';
import Preload from "../Preload";

const types = [
    {
        name: 'pdf',
        icon: pdf
    },
    {
        name: 'image',
        icon: img
    },
    {
        name: 'excel',
        icon: excel
    },
];

function loadImage() {

}

const User = (props) => {
    const {id} = props.match.params;
    const {user} = props;
    const url = user.isAdmin ? '/admin/users/' + id : '/user/' + user.id;
    const {error, loading, data} = useFetch(url,);
    if (loading) {
        return <Preload/>
    } else {
        return (
            <div className='user-container wrapper'>
                <h2>{(data.user && data.user.name) || user.name}</h2>
                <div className='user-files-container'>
                    {
                        data.files && data.files.map((item, i) => {
                            let {date, description, type, name} = item;
                            let fileIcon = (types.find((item) => {
                                    return type.indexOf(item.name) !== -1
                                }) &&
                                types.find((item) => {
                                    return type.indexOf(item.name) !== -1
                                }).icon)
                                || defaultIcon;
                            return (
                                <div key={i} className='file-item'>

                                    <a href={'/media/' + name}>
                                        {
                                            type.indexOf('image')!==-1 ?   <img alt='image' onLoad={()=>{loadImage()}} className='load-image' src={'/media/' + name}/> :
                                                <img alt={type} src={fileIcon}/>
                                        }
                                        <span>
                                            {name}
                                        </span>
                                    </a>
                                </div>
                            )
                        })
                    }


                    {/*<Table>*/}
                    {/*<thead>*/}
                    {/*<tr>*/}
                    {/*<th>#</th>*/}
                    {/*<th>{ru.DATE}</th>*/}
                    {/*<th>{ru.DESCRIPTION}</th>*/}
                    {/*<th>{ru.TYPE}</th>*/}
                    {/*<th>{ru.FILE}</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*{data.files && data.files.map((item, i) => {*/}
                    {/*let {date, description, type, name} = item;*/}
                    {/*return (*/}
                    {/*<tr key={i}>*/}
                    {/*<td>{i + 1}</td>*/}
                    {/*<td>{date}</td>*/}
                    {/*<td>{description}</td>*/}
                    {/*<td>{type} </td>*/}
                    {/*<td>*/}
                    {/*<a href={`${process.env.PUBLIC_URL}/media/${name}`} className='file-link'>*/}
                    {/*<div className="oi oi-file"/>*/}
                    {/*</a>*/}
                    {/*</td>*/}
                    {/*</tr>*/}

                    {/*)*/}
                    {/*})}*/}
                    {/*</tbody>*/}
                    {/*</Table>*/}
                </div>
                <div className='upload'>
                    {user.isAdmin && <Upload userId={id}/>}
                </div>
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
export default withRouter(connect(mapStateToProps)(User));