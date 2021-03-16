const SoundPressureLevel = ( pointValue:string):number=>{
  let value:number = parseFloat(pointValue)
  let p0:number = 2* Math.pow(10,-5)
  let result:number = 20 * Math.log10(value / p0)
  return result
}
export default SoundPressureLevel