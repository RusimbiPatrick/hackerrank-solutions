function reverseArray(a) {
    const reverse = []
    for(let i = a.length -1 ; i >= 0; i--){
      reverse.push(a[i])
    }

    return reverse
}
