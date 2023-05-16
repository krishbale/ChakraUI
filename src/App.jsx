
import Dashboard from "./Dashboard"

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import RootLayout from "./RootLayout"
import Create from "./Create"
import Profile from "./Profile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard /> } loader={taskloader}/>
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {
  


  return (
    <RouterProvider router={router} />
   
  )
}

export default App
