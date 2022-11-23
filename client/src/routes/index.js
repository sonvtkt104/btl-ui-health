import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
    Home,
    History,
    Chat,
    Conversation
} from '../pages'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/message" element={<Conversation />} />
            </Routes>
        </BrowserRouter>
    )
}