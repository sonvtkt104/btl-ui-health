import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchFoods, FoodDetail} from '../pages'
import foods from '../assets/data'
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
                <Route path="/tim-kiem-mon-an" element={<SearchFoods />} />
                {
                    foods.map(food => (
                        <Route key={food.foodId} path={"/chi-tiet-mon-an/" + food.foodId} element={<FoodDetail data={food} />} />
                    ))
                }
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/message" element={<Conversation />} />
            </Routes>
        </BrowserRouter>
    )
}