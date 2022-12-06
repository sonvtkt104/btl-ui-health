import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchFoods, FoodDetail, Diagnosis, Calculator} from '../pages'
import foods from '../assets/data'
import { 
    Home,
    History,
    Chat,
    Conversation,
    Start
} from '../pages'
import QuickInfo from '../pages/QuickInfo'

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
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Start />} />
                <Route path="/history" element={<History />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/message" element={<Conversation />} />
                <Route path="/diagnosis" element={<Diagnosis />} />
                <Route path="/quick-info" element={<QuickInfo />} />
                <Route path="/calculator" element={<Calculator />} />

            </Routes>
        </BrowserRouter>
    )
}