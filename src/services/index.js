export const getTimeFormatted=(timestamp)=>{
   const DateObj=new Date(timestamp)
    return `${DateObj.getHours()}:${DateObj.getMinutes()}`
}