import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif ;
    display: flex;
    align-items: center;
    gap: 1rem;
`
const Texto = styled.p`
    font-size: 18px;
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

function Cotizacion({cotizacion}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
	return (
		<Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
			<div>
                <Precio>Precio actual: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Últma actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
		</Contenedor>
	)
}

export default Cotizacion