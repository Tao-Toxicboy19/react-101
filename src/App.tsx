import React, { useEffect, useState } from 'react'
import Appbar from './components/Appbar'
import { Button } from '@mui/material'
import axios from 'axios'

type Props = {}

export type Data = {
    createdAt: Date
    name: string
    avatar: string
    id: string
}

export default function App({}: Props) {
    const [count, setCount] = useState(0)
    const [data, setData] = useState<Data[]>([])

    const fetch = async () => {
        try {
            const res = await axios.get(
                'https://66b373167fba54a5b7ed00cf.mockapi.io/dog',
            )
            setData(res.data)
            console.log('hello world')
        } catch (error) {
            console.log(error)
        }
    }

    const handleRemove = async (id: string) => {
        try {
            const res = await axios.delete(
                `https://66b373167fba54a5b7ed00cf.mockapi.io/dog/${id}`,
            )
            alert('remove ok')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <Appbar />
            <h1 className='text-5xl'>Count = {count}</h1>
            <Button variant='contained' onClick={() => setCount(count + 1)}>
                add count
            </Button>
            <Button variant='contained' onClick={() => setCount(count - 1)}>
                remove count
            </Button>

            {data.map((item, index) => (
                <div key={index} className='flex gap-5'>
                    <img src={item.avatar} alt={item.avatar} />
                    <h2>{item.name}</h2>
                    <Button
                        variant='contained'
                        onClick={() => handleRemove(item.id)}
                    >
                        delete
                    </Button>
                </div>
            ))}
        </div>
    )
}
