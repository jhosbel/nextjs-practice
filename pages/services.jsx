import Head from "next/head"
import Container from "../components/Container"


const Services = () => {
    return(
        <div>
            <Head>
                <title>Next.js Practice - Services</title>
            </Head>
            <Container>
            <h1>Services</h1>
            <p> A veces es necesario tomar un arreglo y aplicar algún procedimiento a sus       elementos para obtener un nuevo arreglo con elementos modificados.
                En lugar de iterar manualmente sobre el arreglo usando un bucle, puedes simplemente usar el método incorporado Array.map().
                El método Array.map te permite iterar sobre un arreglo y modificar sus elementos utilizando una función callback. La función callback se ejecutará entonces en cada uno de los elementos del arreglo.
                Por ejemplo, supón que tienes el siguiente elemento de arreglo:</p>
            </Container>
        </div>
    )
}

export default Services