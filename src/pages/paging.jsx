import React from 'react'

export default function Paging({ btnPre, btnNext, numberPage }) {
    return (
        <div className='row d-flex justify-content-center mt-3'>
            <div className='col-md-2 d-flex text-center'>
                <div className='col-md-4'><button onClick={() => btnPre()} className='btn py-0 border h-75' >{`<`}</button></div>
                <p className='pt-1 px-3'>{numberPage}</p>
                <div className='col-md-4'><button onClick={() => btnNext()} className='btn py-0 border h-75'>{`>`}</button></div>
            </div>
        </div>
    )
}
