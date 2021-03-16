const SoundIntensity = (pointValue:string):number=>{
  let value:number = parseFloat(pointValue)
  let pC:number = 410
  let result:number = Math.pow(value, 2) / pC
  return result
}
export default SoundIntensity