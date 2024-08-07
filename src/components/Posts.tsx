import axios from 'axios'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import ImgMediaCard from './ImgMediaCard'

type Props = {}

export type Data = {
    createdAt: Date
    name: string
    avatar: string
    id: string
}

export default function Posts({}: Props) {
    const [data, setData] = useState<Data[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetch = async () => {
        try {
            const res = await axios.get(
                'https://66b373167fba54a5b7ed00cf.mockapi.io/dog',
            )
            setData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    const handleRemove = async (id: string) => {
        try {
            await axios.delete(
                `https://66b373167fba54a5b7ed00cf.mockapi.io/dog/${id}`,
            )
            alert('remove ok')
            setData(data.filter((user) => user.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetch()
    }, [])
    return (
        <Box>
            {isLoading
                ? // แสดง Skeleton ในขณะที่กำลังโหลดข้อมูล
                  [1, 2, 3, 4, 5].map((_, index) => (
                      <Box key={index} className='my-5 flex justify-center'>
                          <ImgMediaCard
                              image=''
                              name=''
                              handleRemove={() => {}}
                              isLoading={isLoading}
                              id={''}
                          />
                      </Box>
                  ))
                : // แสดงข้อมูลจริงเมื่อโหลดเสร็จแล้ว
                  data.map((item, index) => (
                      <Box key={index} className='my-5 flex justify-center'>
                          <ImgMediaCard
                              image={item.avatar}
                              name={item.name}
                              handleRemove={() => handleRemove(item.id)}
                              isLoading={isLoading}
                              id={item.id}
                          />
                      </Box>
                  ))}
        </Box>
    )
}
