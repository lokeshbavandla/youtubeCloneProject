import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import { Feed,Header,ChannelDetail,VideoDetail,SearchFeed, ErrorComponent } from './components'
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {

  const Layout = ()=>{
    return(
      <div>
        <Header />
        <Outlet />
      </div>
    )
  }

const router = createBrowserRouter([
  {
    path:'/',
   
    element: <Layout />,

    errorElement: <ErrorComponent />,
    
    children:[
      {
        path:'/',
        
        element: <Feed />
      },
      {
        path:'/video/:id',
        element: <VideoDetail />
      },
      {
        path:'/channel/:id',
        element: <ChannelDetail />
      },
      {
        path:'/search/:searchTerm',
        element: <SearchFeed />
      },
      

    ]
  }
])


  return (
    <Provider store={store}>
      <div className='overflow-hidden'>
          <RouterProvider router={router}/>
      </div>
    </Provider>

  )
}

export default App
