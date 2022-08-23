import React from 'react'
import RenderOneUser from './renderOneUser'

export default function RenderPage({ data, btnPre, btnNext, numberPage,setNumberPage }) {
    // console.log(data)
    if (data === false) {
        console.log(111111)
    }
    // console.log('props', data)
    return (
        <div className='container mt-5'>
            {/* 
                - Cái elm này là object, jsx không đọc được object đâu nên chỗ này sai nhé
                */}
            {
                // console.log(props.articles)

                data.length>=1 ? data.map((elm, index) => {
                    return (
                        <RenderOneUser key={index} props={elm} numberPage={numberPage} setNumberPage={setNumberPage}/>
                    )
                }) : <div className='row justify-content-center'>
                    <div className='col-md-2 justify-content-center'>
                        <h2 className='text-center'>Not data!!!</h2>
                    </div>
                </div>
            }
            <div className='row d-flex justify-content-center mt-3'>
                <div className='col-md-2 d-flex text-center'>
                    <div className='col-md-4'><button onClick={() => btnPre()} className='btn py-0 border h-75' >{`<`}</button></div>
                    <p className='pt-1 px-3'>{numberPage}</p>
                    <div className='col-md-4'><button onClick={() => btnNext()} className='btn py-0 border h-75'>{`>`}</button></div>
                </div>
            </div>
        </div>
    )
}
