import { Route, Routes } from 'react-router-dom'
import Posts from './components/Posts'
import Post from './components/Post'
import Appbar from './components/Appbar'

type Props = {}

export default function App({}: Props) {
    return (
        <>
            <Appbar />
            <div className='container mx-auto'>
                <Routes>
                    <Route path='/' element={<Posts />} />
                    <Route path='/:id' element={<Post />} />
                </Routes>
            </div>
        </>
    )
}
