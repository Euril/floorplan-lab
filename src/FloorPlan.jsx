import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan(){
  return (
    <>
      <div id='floorplan'>
        <div id='Bed1'>
          <BedRoom  bedNum='1'/>
        </div>
        <div className='Kitchen'>
          <Kitchen />
        </div>
        <div className='LivingRoom'>
          <LivingRoom />
        </div>
        <div id='Bed2'>
          <BedRoom bedNum='2'/>
        </div>
        <div id='Half-bath' >
          <Bath size='Half'/>
        </div>
        <div id='Bed3'>
          <BedRoom bedNum='3'/>
        </div>
        <div id='Full-bath'>
          <Bath size='Full'/>
        </div>
      </div>
    </>
  )

}

export default FloorPlan;