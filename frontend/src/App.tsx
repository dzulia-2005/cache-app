import { Flex, Spin } from "antd";
import { lazy, Suspense } from "react"
import { Routes,Route } from "react-router-dom"
import { LoadingOutlined } from '@ant-design/icons';


const StatLazy = lazy(()=>import("./pages/stats/index"));


function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Suspense fallback={
            <Flex 
              align="center"
              justify="center"
              style={{ height: "100vh" }}
            >
              <Spin 
                indicator={<LoadingOutlined style={{ fontSize: 48 }} 
                spin
              />} 
            />
            </Flex>
          }>
            <StatLazy/>
          </Suspense>
        }
      />

    </Routes>
  )
}

export default App
