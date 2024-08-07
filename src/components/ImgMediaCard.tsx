import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {
    Box,
    CardActionArea,
    IconButton,
    Skeleton,
    Tooltip,
    Avatar,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import { useNavigate } from 'react-router-dom'

type Props = {
    image: string
    name: string
    handleRemove?: () => void
    isLoading: boolean
    id: string
}

export default function ImgMediaCard({
    image,
    name,
    handleRemove,
    isLoading,
    id,
}: Props) {
    const navigation = useNavigate()

    const handleClick = () => {
        navigation(`/${id}`)
    }

    return (
        <Card sx={{ maxWidth: 456 }} onClick={handleClick}>
            <CardActionArea
                sx={{
                    pointerEvents: isLoading ? 'none' : 'auto',
                }}
            >
                {isLoading ? (
                    <Skeleton
                        variant='rectangular'
                        height={456}
                        animation='wave'
                    />
                ) : (
                    <CardMedia
                        component='img'
                        alt={name}
                        height='140'
                        image={image}
                    />
                )}
                <CardContent>
                    {isLoading ? (
                        <Box className='flex flex-col gap-y-2'>
                            <Skeleton
                                variant='rectangular'
                                height={32.02}
                                width='60%'
                                animation='wave'
                                sx={{
                                    borderRadius: 1,
                                }}
                            />
                            <Skeleton
                                variant='rectangular'
                                height={20}
                                width={424}
                                animation='wave'
                                sx={{
                                    borderRadius: 1,
                                }}
                            />
                            <Skeleton
                                variant='rectangular'
                                height={20}
                                width={424}
                                animation='wave'
                                sx={{
                                    borderRadius: 1,
                                }}
                            />
                        </Box>
                    ) : (
                        <Box>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='div'
                            >
                                {name}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Box>
                    )}
                </CardContent>
            </CardActionArea>
            <CardActions>
                {isLoading ? (
                    <Box className='flex flex-row gap-x-2'>
                        <Skeleton variant='circular'>
                            <Avatar />
                        </Skeleton>
                        <Skeleton variant='circular'>
                            <Avatar />
                        </Skeleton>
                    </Box>
                ) : (
                    <>
                        <Tooltip title='Share'>
                            <IconButton>
                                <ShareIcon color='primary' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete'>
                            <IconButton onClick={handleRemove}>
                                <DeleteIcon color='error' />
                            </IconButton>
                        </Tooltip>
                    </>
                )}
            </CardActions>
        </Card>
    )
}
