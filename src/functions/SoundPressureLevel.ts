const SoundPressureLevel = ( pointValue:string):number=>{
  const value:number = parseFloat(pointValue)
  const p0:number = 2* Math.pow(10,-5)
  const result:number = 20 * Math.log10(value / p0)
  return result
}
export default SoundPressureLevel
