import Oven from "./Oven";
import Sink from "./Sink";


const Kitchen = (props) => {
  return (
    <>
      <h1>Kitchen
        <div id='Oven'>
          <Oven/>
        </div>
        <div id='Sink'>
          <Sink/>
        </div>       
      </h1>
    </>
  )

}

export default Kitchen;