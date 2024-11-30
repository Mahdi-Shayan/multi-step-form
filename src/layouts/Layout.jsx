import { Outlet } from "react-router-dom";


function Layout() {
   return (<>
      <div className="App">
         
         <div className="main">
            <Outlet />
         </div>
      </div>
   </>);
}

export default Layout;