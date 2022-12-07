import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchFoods, FoodDetail, Diagnosis, Calculator, QuickTest} from '../pages'
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
                <Route path="/search" element={<SearchFoods />} />
                {
                    foods.map(food => (
                        <Route key={food.foodId} path={"/food-detail/" + food.foodId} element={<FoodDetail data={food} />} />
                    ))
                }
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Start />} />
                <Route path="/history" element={<History />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/message" element={<Conversation />} />
                <Route path="/diagnosis" element={<Diagnosis />} />
                <Route path="/quick-info" element={<QuickInfo />} />
                <Route path="/calculator" element={<Calculator />} /><Route path="/calculator" element={<Calculator />} />
                <Route path="/quick-test" element={<QuickTest />} />

            </Routes>
        </BrowserRouter>
    )
}