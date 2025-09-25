function converter(){
    const celsius= document.getElementById('celsiusInput').value
    const fahrenheit = (celsius * 9/5) + 32

    document.getElementById('resultado').innerText= `${celsius}°c é igual ${fahrenheit.toFixed(2)}F°.`
}