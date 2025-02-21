import React, { useState, useEffect } from 'react';
import './Tienda.css';

function Tienda() {
  const categorias = [
    'Accesorios', 'Aspiradoras', 'Ceras', 'Descontaminantes', 'Dreams Detailing',
    'Fragancias', 'Full Car', 'Glabs', 'Hidrolavadoras', 'Koch Chemie',
    'Maquinas', 'MaxShine CarCare', 'Meguiar´s', 'Microfibras', 'Ofertas',
    'Pads', 'Pinceles detalladores', 'Quirófano Detail', 'Royal Pads', 'Rupes',
    'Selladores', 'Soft99', 'Sonax', 'Ternnova', 'WOVA7'
  ];

  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [conteoCategorias, setConteoCategorias] = useState({});
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const [overlayCarritoVisible, setOverlayCarritoVisible] = useState(false); // Estado para el carrito

  useEffect(() => {
    fetch('/base-datos.json')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);

        const conteo = {};
        data.forEach((producto) => {
          const categoria = producto.categoria_del_producto;
          conteo[categoria] = (conteo[categoria] || 0) + 1;
        });

        setConteoCategorias(conteo);
      })
      .catch((error) => console.error('Error al cargar datos:', error));
  }, []);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.categoria_del_producto === categoriaSeleccionada)
    : [];

  // Nota: Este map fuera del return no genera salida visual, se puede eliminar si no se usa.
  productosFiltrados.map((producto) => (
    <div key={producto.id} className="producto-card" onClick={() => handleProductoClick(producto)}>
      {/* Contenido del producto */}
    </div>
  ));

  const handleProductoClick = (producto) => {
    setProductoSeleccionado(producto);
    setCantidad(1);
    setOverlayVisible(true);
  };

  const handleAumentarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const handleDisminuirCantidad = () => {
    setCantidad(prevCantidad => (prevCantidad > 1 ? prevCantidad - 1 : 1));
  };

  const handleAgregarAlCarrito = () => {
    if (productoSeleccionado) {
      setCarrito((prevCarrito) => {
        const productoExistente = prevCarrito.find((item) => item.id === productoSeleccionado.id);

        if (productoExistente) {
          // Si el producto ya está en el carrito, actualiza la cantidad
          return prevCarrito.map((item) =>
            item.id === productoSeleccionado.id ? {
              ...item,
              cantidad: item.cantidad + cantidad,
              total: parseFloat(((item.cantidad + cantidad) * item.precio_del_producto).toFixed(2))
            } : item
          );
        } else {
          // Si el producto no está en el carrito, agrégalo
          return [
            ...prevCarrito,
            {
              ...productoSeleccionado,
              cantidad,
              total: parseFloat((productoSeleccionado.precio_del_producto * cantidad).toFixed(2))
            }
          ];
        }
      });

      setOverlayVisible(false);
    }
  };

  const handleEliminarProducto = (id) => {
    setCarrito((prevCarrito) => {
      return prevCarrito
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad - 1;
            return nuevaCantidad > 0
              ? { ...item, cantidad: nuevaCantidad, total: parseFloat((nuevaCantidad * item.precio_del_producto).toFixed(2)) }
              : null;
          }
          return item;
        })
        .filter(item => item !== null);
    });
  };

  const handleCancelar = () => {
    setOverlayVisible(false);
  };

  const handleAbrirCarrito = () => {
    setOverlayCarritoVisible(true);
  };

  const handleCerrarCarrito = () => {
    setOverlayCarritoVisible(false);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  const totalProducto = productoSeleccionado
    ? formatPrice(productoSeleccionado.precio_del_producto * cantidad)
    : "0.00";

  return (
    <div className="Tienda-container">
      <div className="menu-izquierda">
        <div className="categorias-list">
          <h3>Categorías</h3>
          {categorias.map((categoria, index) => (
            <button
              key={index}
              className={categoria === categoriaSeleccionada ? 'categoria-activa' : ''}
              onClick={() => handleCategoriaClick(categoria)}
            >
              {categoria} ({conteoCategorias[categoria] || 0})
            </button>
          ))}
        </div>
      </div>

      <div className="list-product">
        <h3>Lista de Productos</h3>
        <div className="card-product-list">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div key={producto.id} className="producto-card" onClick={() => handleProductoClick(producto)}>
                <h4>{producto.categoria_del_producto}</h4>
                <img src={producto.url_img_del_producto} alt={producto.nombre_del_producto} />
                <h5>{producto.nombre_del_producto}</h5>
                <br></br>
                <span>${formatPrice(producto.precio_del_producto)}</span>
              </div>
            ))
          ) : (
            <p className="no-productos">
              Selecciona una categoría para ver productos
              <br />
              <img className="img-no-productos" src="https://cdn-icons-png.flaticon.com/128/743/743131.png" width="100px" height="100px" alt="No productos"/>
            </p>
          )}
        </div>
      </div>

      {overlayVisible && productoSeleccionado && (
        <div className="overlay-agregar-al-carrito">
          <div className="producto-detalles">
            <img src={productoSeleccionado.url_img_del_producto} alt={productoSeleccionado.nombre_del_producto} />
            <h4>{productoSeleccionado.nombre_del_producto}</h4>
            <p>{productoSeleccionado.detalles_del_producto}</p>
            <br></br>
            <span>Precio Unidad $ {formatPrice(productoSeleccionado.precio_del_producto)}</span>
            <div className='btn-cantidad'>
              <button onClick={handleAumentarCantidad}>➕</button>
              <span>{cantidad}</span>
              <button onClick={handleDisminuirCantidad}>➖</button>
            </div>
            <div className='total-de-cada-producto'>
              <span>Total $ {totalProducto}</span>
            </div>
            <div className='btn-agregar-al-carrito'>
              <button onClick={handleAgregarAlCarrito}>AGREGAR AL CARRITO</button>
              <button onClick={handleCancelar}>CANCELAR</button>
            </div>
          </div>
        </div>
      )}

      <div className='carrito-compras' onClick={handleAbrirCarrito}>
        <button>
          <img src='https://cdn-icons-png.flaticon.com/128/6737/6737614.png' width="50px" height="50px" alt="Carrito"></img>
        </button>
      </div>

      {overlayCarritoVisible && (
        <div className="overlay-carrito-compras">
          <div className="carrito-detalles">
            <h3>Carrito de Compras</h3>
            {carrito.length > 0 ? (
              <>
                {carrito.map((item, index) => (
                  <div key={index} className="carrito-item">
                    <img 
                      src={item.url_img_del_producto} 
                      alt={item.nombre_del_producto} 
                      className="carrito-img"
                      width="50"
                      height="50"
                    />
                    <div className="carrito-info">
                      <h4>{item.nombre_del_producto}</h4>
                      <p>Cantidad: {item.cantidad}</p>
                      <span>${formatPrice(item.total)}</span>
                    </div>
                    <button 
                      className="btn-eliminar-producto-del-carrito" 
                      onClick={() => handleEliminarProducto(item.id)}
                    >
                      ❌
                    </button>
                </div>
                ))}
                <div className="carrito-total">
                  <h4>Total a Pagar $ {formatPrice(carrito.reduce((acc, item) => acc + item.total, 0))}</h4>
                </div>
              </>
            ) : (
              <p className='carrito-vacio'>
                El carrito está vacío.
                <br></br>
                <img src='https://cdn-icons-png.flaticon.com/128/5952/5952781.png' width="80px" height="80px" alt="Carrito vacío"></img>
              </p>
            )}
            <div className='btn-carrito-de-compras'>
              <button onClick={handleCerrarCarrito}>Cerrar</button>
              {carrito.length > 0 && <button>Pagar</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tienda;
