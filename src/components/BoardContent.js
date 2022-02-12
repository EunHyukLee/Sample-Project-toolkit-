import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { edit, remove } from '../modules/boardSlice';
 
function BoardContent() {
    const { selectRowData } = useSelector(state => state.boardSlice)
    const [title, setTitle] = useState(selectRowData.title)
    const [content, setContent] = useState(selectRowData.content)

    const dispatch = useDispatch()
    const history = useHistory();
 
    const onChange = () => {
        const inputData = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        console.log('clickSave :: ', inputData)
        dispatch(edit(inputData))
        setTitle('')
        setContent('')
        history.push('/')
    }

    const onRemove = () => {
        dispatch(remove(selectRowData.id))
        setTitle('')
        setContent('')
        history.push('/')
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleContent = (event) => {
        setContent(event.target.value)
    }
 
    return(
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onChange} className='editBtn'>Edit</button>
                    <button type='button' onClick={onRemove} className='deleteBtn'>Delete</button>
                </div>
            </div>
        </div>
    )
}
 
export default BoardContent;