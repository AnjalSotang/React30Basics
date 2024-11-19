import Button from "./button";

function Home(){
    return(
       <>
       <Button name="Register"/>
       <Button name="Login"/>
       {/* /* It send as an object */}
       <Button name="Logout"/>  
       <Button/>  
       </>
    )

}

export default Home;