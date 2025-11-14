import { lazy, Suspense } from "react"
import { Routes,Route } from "react-router-dom"

const StatLazy = lazy(()=>import("./pages/stats/index"));


function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <StatLazy/>
          </Suspense>
        }
      />

    </Routes>
  )
}

export default App
