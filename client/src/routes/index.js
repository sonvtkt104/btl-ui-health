import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchFoods, FoodDetail, Diagnosis} from '../pages'
import foods from '../assets/data'
import { 
    Home,
    History,
    Chat,
    Conversation,
    SignIn
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
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/history" element={<History />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/message" element={<Conversation />} />
                <Route path="/diagnosis" element={<Diagnosis />} />
            </Routes>
        </BrowserRouter>
    )
}