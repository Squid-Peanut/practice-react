import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="movie/:id" element={<Detail />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />
}

export default App;