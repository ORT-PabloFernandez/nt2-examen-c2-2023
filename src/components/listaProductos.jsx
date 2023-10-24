const ListaProductos = (props) =>{
    return(
        <ul>
        {props.ListaProductos?.map(product => {
            return(
                <div>
                    <div> {product} </div>
                </div>
            )
        })}
    </ul>
    )
}
export default ListaProductos;