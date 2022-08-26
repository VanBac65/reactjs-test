import React, { Fragment } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import RenderPage from './renderPage'

export default function RenderList() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [numberPage, setNumberPage] = useState(1)

    const btnPre = () => {
        setNumberPage(pre => {
            if (pre > 1) {
                return pre - 1
            }
            return 1
        })
    }
    const btnNext = () => {
        setNumberPage(numberPage + 1)
    }
    useEffect(() => {
        setIsLoading(pre => pre = true)
        axios.get(`https://api.realworld.io/api/articles/?limit=10&offset=${numberPage}`)
            .then((res) => {
                setData(pre => {
                    return pre = res.data?.articles
                })
                setIsLoading(pre => pre = false)
            })
    }, [numberPage])
    return (
        <Fragment>
            {
                isLoading ? <div>Loading ....</div> : <RenderPage data={data} btnPre={btnPre} btnNext={btnNext} numberPage={numberPage} setNumberPage={setNumberPage} />
            }
        </Fragment>
    )
}
