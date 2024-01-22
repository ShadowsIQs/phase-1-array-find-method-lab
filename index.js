function superbowlWin(record){
    const result = record.find ( object => object.result === "W" )
    if (result === undefined){
        return undefined
    }
    return  result.year
}