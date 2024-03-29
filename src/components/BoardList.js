import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { select } from '../modules/boardSlice'
 
function BoardList() {
    const inputData = useSelector(state => state.board.inputData)
    const lastId = useSelector(state => state.board.lastId)
    const dispatch = useDispatch();
 
    const selectContent = (id) => {
        dispatch(select(id))
    }
 
    return(
        <div>
            <h2>게시판</h2>
            <div>
                <table className='listTable'>
                    <tbody>
                        <tr>
                            <td className='listTableIndex th'>index</td>
                            <td className='listTableTitle th'>title</td>
                        </tr>
                        {lastId !== 0 ?
                            inputData.map(rowData => (
                                rowData.id !== '' &&
                                <tr>
                                    <td className='listTableIndex' onClick={() => selectContent(rowData.id)}>
                                        <Link to='/BoardContent'>{rowData.id}</Link>
                                    </td>
                                    <td className='listTableTitle' onClick={() => selectContent(rowData.id)}>
                                        <Link to='/BoardContent'>{rowData.title}</Link>
                                    </td>
                                </tr>
                            )) : 
                            <tr>
                            <td className='listTableIndex'></td>
                            <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default BoardList;

