async function fetchApi(){
    const response = await fetch('https://fakestoreapiserver.reactbd.org/api/products')
    const data = await response.json()
    console.log(data)
}
fetchApi();