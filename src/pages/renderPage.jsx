import React from 'react'
import Paging from './paging'
import RenderOneUser from './renderOneUser'

export default function RenderPage({ data, btnPre, btnNext, numberPage, setNumberPage }) {
    return (
        <div className='container mt-5'>
            {/* 
                - Cái elm này là object, jsx không đọc được object đâu nên chỗ này sai nhé
                */}
            {
                // console.log(props.articles)

                data.length >= 1 ? data.map((elm, index) => {
                    return (
                        <RenderOneUser key={index} props={elm} />
                    )
                }) : <div className='row justify-content-center'>
                    <div className='col-md-2 justify-content-center'>
                        <h2 className='text-center'>Not data!!!</h2>
                    </div>
                </div>
            }
            <Paging btnPre={btnPre} btnNext={btnNext} numberPage={numberPage} setNumberPage={setNumberPage} />
        </div>
    )
}
