import React, { useState } from 'react'
import Sidenavbar from '../Sidenavbar';
import {GrEdit} from 'react-icons/gr'
import {FcSearch} from 'react-icons/fc'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import CategoryEditPopUpPage from '../CategoryEditPopUpPage'



import './index.css'

import Header from "../Header";
import {AiFillHome} from 'react-icons/ai'

import { GrFormPrevious} from 'react-icons/gr'
import {RiDeleteBinLine} from 'react-icons/ri'
import { MdNavigateNext} from 'react-icons/md'


const defaultList = [
    {
        id: 1,
        name: "Akshay",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        name: "Akshay kumar",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        name: "John",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 4,
        name: "Devid",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 5,
        name: "Henry",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 6,
        name: "Sergio",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 7,
        name: "Berlin",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 8,
        name: "Akshay",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 9,
        name: "Akshay kumar",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 10,
        name: "John",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 11,
        name: "Devid",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 12,
        name: "Henry",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 13,
        name: "Sergio",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    },
    {
        id: 14,
        name: "Berlin",
        description: "Hello",
        status: "Active",
        imageUrl: "https://picsum.photos/200/300"
    }
]

const Category = () => {
    const [searchName , setSearchNames] = useState([])
    const [name , setName] = useState('')
    const [description, setDescription] = useState('')
    const [status , setStatus] = useState(false)
    const [categoryList , setCategoryList] = useState(defaultList)
    const [nameErrroMsg, setNameErrorMsg] = useState(false)
    const [desErrroMsg, setDesErrorMsg] = useState(false)
    const [ImageErrroMsg, setImageErrorMsg] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    
    const [rowToEdit, setRowToEdit] = useState('')
    
    const [openModel, setOpenModule] = useState(false)


    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = categoryList.slice(firstIndex, lastIndex)
    const nPages = Math.ceil(categoryList.length / recordsPerPage)
    const numbers = [...Array(nPages + 1).keys()].slice(1)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChangeSearch = (event) => {
        setSearchNames(event.target.value)
    }

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setSelectedImage(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
    };


    const onChnageName = (event) => {
        setName(event.target.value)
    }
    const onChangeStatus = () => {
        setStatus(PrevState => !PrevState)
    }
    const onChangeDescription = (event) =>{
        setDescription(event.target.value)
    }
    const onClickReset=()=> {
        setName('')
        setDescription('')
        setSelectedImage(null)
        setStatus(false)
    }
    const onChangeCPage = (id) => {
        setCurrentPage(id)
    }
    const onPrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const onNextPage = () => {
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const onBlurName = () => {
        if (name !== '') {
            setNameErrorMsg(false)
        }else {
            setNameErrorMsg(true)
        }
    }
    const onBlurDescription = () => {
        if (description !== '') {
            setDesErrorMsg(false)
        }else {
            setDesErrorMsg(true)
        }
    }

    const onSubmitCategory = (event) => {
        event.preventDefault()
        const newId = categoryList.length + 1
        const newCategory = {
            id: newId,
            name,
            imageUrl: selectedImage,
            status,
        }

        if (name !== '' && description !== '' && selectedImage !== null) {
            setNameErrorMsg(false)
            setDesErrorMsg(false)
            setImageErrorMsg(false)
            setCategoryList((prevCategoryList) => [...prevCategoryList, newCategory])
        }else {
            setNameErrorMsg(true)
            setDesErrorMsg(true)
            setImageErrorMsg(true)
        }
    }
    const onClickDeleteItem = (id) => {
        const deletedLists = categoryList.filter(e => e.id !== id)
        setCategoryList(deletedLists)
    }
    const handelEditRow = (id) => {
        setRowToEdit(id - 1)
        setOpenModule(true)
    } 
    const searchResults = records.filter(e => e.name.toLowerCase().includes(searchName))    

    const updateTheNewRow = (editDes,editName,EStatus,selectedImage) => {
        const newRow = {
            name: editName,
            description: editDes,
            status: EStatus,
            imageUrl: selectedImage,
        }
        setCategoryList(categoryList.map((e, i) => {
            if (i !== rowToEdit) {
                return e
            }
            return newRow
        }))
    }

    return(
        <div className='app-card-container-classname'>
            <div className='app-container'>
                <Sidenavbar />
                <div className='Home-card-container'>
                    <Header />
                    <div className='categories-card-container'>
                        <div className='categories-header'>
                            <p className='company-sub-heading-is'>Category</p>
                            <p className='category-name-des'><AiFillHome size={17} className='mb-1' /> Dashboard / Category</p>
                        </div>
                        <div className='categories-details-card'>
                            <div className='categories-input-ul-card'>
                                <p className='company-ul-heading-name'>Category List</p>
                                <div className='company-list-container-card'>
                                    <div className='lists-container'>
                                        <input type='search' className='seach-bar-is' placeholder='Search' onChange={onChangeSearch}/>
                                        <FcSearch size={17} className='m-1' />
                                    </div>
                                    <>
                                        <Button variant="primary" className='add-button' onClick={handleShow}>
                                            Add Category
                                        </Button>
                                        <Modal size="lg" show={show} onHide={handleClose}>
                                            <Modal.Header closeButton className='add-company-heading'>
                                            <Modal.Title>Add New Category</Modal.Title>
                                            </Modal.Header >
                                            <form className='form-container' onSubmit={onSubmitCategory}>
                                                <div className='input-card'>
                                                    <label htmlFor="name" className='label'>Name</label>
                                                    <input id='name' value={name} className='input' type='text' placeholder='Enter the name of category' onChange={onChnageName} onBlur={onBlurName} />
                                                    {nameErrroMsg && <p className='error-msg'>required feild</p>}
                                                </div>
                                                <div className='input-card'>
                                                    <label htmlFor="des" className='label'>Desription</label>
                                                    <input id='des' value={description} className='input' type='text' placeholder='Enter small note on category' onChange={onChangeDescription} onBlur={onBlurDescription} />
                                                    {desErrroMsg && <p className='error-msg'>required feild</p>}
                                                </div>

                                                <div className='input-card'>
                                                    <label className='label' htmlFor='image-file'>Image</label>
                                                    <input type="file" id='image-file' onChange={handleImageChange} />
                                                    {ImageErrroMsg && <p className='error-msg'>required feild</p>}
                                                    {selectedImage && <img className='display-image-class' src={selectedImage} alt="Selected" />}
                                                </div>
                                                <div className='switch-card'>
                                                    <label className="switch">
                                                        <input type="checkbox" onClick={onChangeStatus} value={status}/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <p className='label-card'>{status ? "InActive" : "Active"}</p>
                                                </div>
                                                <div className='buttons-container'>
                                                    <button className='reset-button' type='button' onClick={onClickReset}>Reset</button>
                                                    <button className='Add-category-button' type='submit'>Add Category</button>
                                                </div>
                                        </form>
                                        </Modal>
                                    </>
                                </div>
                                <div className='add-categories-conatiner'>
                                    <div className='category-input-card'>
                                        <div className='tabel-container'>
                                        <div className='tabel-card-container'>
                                            <table className='tabel-card'>
                                                <thead className='tabel-headers-card'>
                                                    <tr>
                                                        <th className='table-headers-css'>Image</th>
                                                        <th className='table-headers-css'>Name</th>
                                                        <th className='table-headers-css'>Status</th>
                                                        <th className='table-headers-css'>Operations</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='tabel-data-details'>
                                                    {searchResults.map((eachItem, index ) => (
                                                        <tr key={index} className='row-table'>
                                                            <td className='image-icon-head'>
                                                                <img src={eachItem.imageUrl} alt={eachItem.id} className='image-thumbnail'/>
                                                            </td>
                                                            <td className='name-data-card'>
                                                                <p className='paragraph-name'>{eachItem.name}</p>
                                                            </td>
                                                            <td className='is-active'>{eachItem.status ? <p className='btn-card'>Active</p>: <p className='btn-in-active'>InActive</p>}</td>
                                                            <td className='buttons-card is-active'>
                                                            
                                                                <GrEdit className='edit-button-is' size={20} onClick={() => handelEditRow(eachItem.id)} />
                                                                <RiDeleteBinLine size={20} className='delete-button-is' onClick={() => (onClickDeleteItem(eachItem.id))}/>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                        <div className='pagenation-card'>
                                            <p>Showing {firstIndex +1} to {lastIndex} Pages</p>
                                            <ul className='next-page-icons'>
                                                <li className='page-item' onClick={onPrevPage}>
                                                    <GrFormPrevious />
                                                </li>
                                                {
                                                    numbers.map((n, i) => (
                                                        <li key={i} onClick={() => (onChangeCPage(n))} className={`page-item ${currentPage === n ? 'act-Id-page' : '' }`}  >
                                                            {n}
                                                        </li>
                                                    ))
                                                }     
                                                <li className='page-item' onClick={onNextPage}>
                                                    <MdNavigateNext />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='app-container'>
                {openModel && <CategoryEditPopUpPage closePopup={() => setOpenModule(false)} defaultValues= {rowToEdit !== null && categoryList[rowToEdit]} updateTheNewRow={updateTheNewRow}/>}
            </div>
        </div>
        
    )
}
export default Category


// openModel ? <CategoryEditPopUpPage onChangeEditStatus={onChangeEditStatus} onChangeEditDes={onChangeEditDes} onChangeEditName={onChangeEditName} handleImageChange={handleImageChange} editDes={editDes} editName={editName} EStatus={EStatus}  /> : 