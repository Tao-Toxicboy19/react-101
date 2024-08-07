import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from './Posts'
import ImgMediaCard from './ImgMediaCard'
import { Box } from '@mui/material'

type Props = {}

export default function Post({}: Props) {
    const { id } = useParams<{ id: string }>()
    const [data, setData] = useState<Data | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetch = async () => {
        try {
            const res = await axios.get(
                `https://66b373167fba54a5b7ed00cf.mockapi.io/dog/${id}`,
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
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetch()
    }, [id])

    return (
        <Box>
            {isLoading ? (
                <Box className='flex justify-center'>
                    <ImgMediaCard
                        image=''
                        name=''
                        handleRemove={() => {}}
                        isLoading={isLoading}
                        id={''}
                    />
                </Box>
            ) : (
                <Box className='flex justify-center mt-10'>
                    <ImgMediaCard
                        image={data!.avatar}
                        name={data!.name}
                        handleRemove={() => handleRemove(data!.id)}
                        isLoading={isLoading}
                        id={data!.id}
                    />
                </Box>
            )}
        </Box>
    )
}
