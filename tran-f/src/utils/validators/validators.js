export const required = (value) => {
    console.log(value);
    //return value ? undefined : 'Fielld is required'
    if(value) return undefined
    return 'Fielld is required'
}