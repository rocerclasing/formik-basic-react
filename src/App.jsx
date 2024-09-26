

//Components
import Form from "./Components/Form";
const App = () => {

  const onSubmit = () => {

    console.log(values)


  }

  return(
      <div>
        
            <Form onSubmit={onSubmit}initialState={{text:"desde app"}}>
              {
                ({values,handlechange,handleSubmit})=>(

                  <form onSubmit={handleSubmit}
> 
                        <input type="text" 
                        placeholder="text" 
                        value={values.text} 
                        onChange={handlechange}
                        name="text"
                        />

                        <button type="submit">Submit</button>
                  
                        </form>

                )
              }
            </Form>
       
      </div>
  )
}

export default App;