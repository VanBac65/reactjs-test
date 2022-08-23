import React, { Fragment } from 'react'
import { useState } from 'react'
import { convertTime } from './converMonth'

export default function RenderOneUser({ props ,numberPage,setNumberPage}) {
    const [colorFavoritesCount, setColorFavoritesCount] = useState(false)
    const [countFavoritesCount, setCountFavoritesCount] = useState(props.favoritesCount)
    const [readMore, setReadMore] = useState(props.body.substring(0, 50))
    const [hiddenOrShow, setHiddenOrShow] = useState(true)
    const handleVavoritesCount = () => {
        //dùng setColorFavoritesCount,setCountFavoritesCount thì numberPages lỗi
        setColorFavoritesCount(!colorFavoritesCount)
        if (colorFavoritesCount) {
            props.favoritesCount--
            setCountFavoritesCount(countFavoritesCount - 1)
        }
        else {
            props.favoritesCount++
            setCountFavoritesCount(countFavoritesCount + 1)
        }
    }
    const btnReadMore = () => {
        setReadMore(props.body)
        setHiddenOrShow(!hiddenOrShow)
    }
    const btnHidden = () => {
        setReadMore(props.body.substring(0, 50))
        setHiddenOrShow(!hiddenOrShow)
    }
    return (
        <Fragment>
            <div className='row d-flex justify-content-between mt-5'>
                <div className='col-md-3 d-flex'>
                    <img className='img rounded-circle me-2' src={props.author.image} />
                    <div>
                        <h6>{props.author.username}</h6>
                        <p>{convertTime(props.createdAt)}</p>
                    </div>
                </div>
                <div className='col-md-1'>
                    <button onClick={() => handleVavoritesCount()}
                        style={{
                            color: `${colorFavoritesCount ? 'white' : 'green'}`,
                            background: `${colorFavoritesCount ? 'green' : 'white'}`
                        }}
                        className='btn favoritesCount border'>
                        <span className="glyphicon glyphicon-heart-empty"></span>{countFavoritesCount}
                    </button>
                </div>
            </div>
            <div className='col-md-7 p-0 m-0'>
                <h2>{props.title}</h2>
            </div>
            <div className='row d-flex justify-content-between'>
                <div className='col-md-7 p-0 m-0'>
                    <p className='mb-0'>{readMore}</p>
                    <button style={{ display: `${hiddenOrShow ? 'block' : 'none'}` }} onClick={() => btnReadMore()} className='btn ps-0 ms-0'>Read more...</button>
                    <button style={{ display: `${hiddenOrShow ? 'none' : 'block'}` }} onClick={() => btnHidden()} className='btn ps-0 ms-0'>Hidden</button>
                </div>
                <div className='col-md-3'>
                    <button className='btn border rounded-pill py-1 me-1'>{props.tagList[0]}</button>
                    <button className='btn border rounded-pill py-1'>{props.tagList[1]}</button>
                </div>
            </div>
        </Fragment>
    )
}
