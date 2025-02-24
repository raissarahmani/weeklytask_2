function divideSort (deret) {
    if(typeof deret !== "number") {
        console.log(`${deret} bukan merupakan deret angka`);
    } else {
        const divideDeret = deret.toString().split("0").map(segment => {
            return segment.split("").sort((a,b) => a-b).join("")
        })
        const sortedSegment = divideDeret.join("")
        const result = parseInt(sortedSegment)
        console.log(result);
    }
}

export default divideSort