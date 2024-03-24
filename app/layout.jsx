
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";

export const metadata ={
     title:"Admin",
     descripiton: "Portfolio Admin"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
        <Provider>
           <main>
           <Nav/>
           
            {children}
            
            </main> 
         </Provider>
        </body>
    </html>
  )
}

export default RootLayout