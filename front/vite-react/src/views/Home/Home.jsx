import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="header">
                <h1 className="title">¡Bienvenido al Banco Provincia!</h1>
                <p className="subtitle">Tu banco de confianza para todas tus necesidades financieras.</p>
            </header>
            <main className="main">
                <section className="services">
                    <h2 className="section-title">Nuestros Servicios</h2>
                    <div className="service-grid">
                        <div className="service">
                            <i className="fas fa-money-bill"></i>
                            <h3>Préstamos</h3>
                            <p>Obtén préstamos con las mejores tasas del mercado.</p>
                        </div>
                        <div className="service">
                            <i className="fas fa-credit-card"></i>
                            <h3>Tarjetas de Crédito</h3>
                            <p>Disfruta de nuestras tarjetas de crédito con beneficios exclusivos.</p>
                        </div>
                        <div className="service">
                            <i className="fas fa-coins"></i>
                            <h3>Ahorros</h3>
                            <p>Empieza a ahorrar con nuestras cuentas bancarias seguras.</p>
                        </div>
                    </div>
                </section>
                <section className="additional-content">
                    <div className="branch-locations">
                        <h2 className="section-title">Ubicaciones de Sucursales</h2>
                        <ul>
                            <li>Sucursal 1 - Dirección: Av. Libertador 1234 - Horario: Lunes a Viernes 9:00 - 17:00</li>
                            <li>Sucursal 2 - Dirección: Calle San Martín 567 - Horario: Lunes a Viernes 9:00 - 17:00</li>
                            {/* Agrega más sucursales con sus respectivas direcciones y horarios */}
                        </ul>
                    </div>
                </section>
                <section className="additional-content">
                    <div className="financial-calculator">
                        <h2 className="section-title">Calculadora Financiera</h2>
                        {/* Contenido de la calculadora financiera */}
                        <form>
                            <label htmlFor="loan-amount">Monto del préstamo:</label>
                            <input type="text" id="loan-amount" />
                            {/* Agrega más campos de entrada para la calculadora, como tasa de interés, plazo, etc. */}
                            <button type="submit">Calcular</button>
                        </form>
                    </div>
                </section>
                <section className="about-us">
                    <h2 className="section-title">Acerca de Nosotros</h2>
                    <p>Somos el Banco Provincia, una institución financiera líder en el mercado. Nuestra misión es brindar servicios de calidad a nuestros clientes y contribuir al crecimiento económico del país.</p>
                    <button className="learn-more-btn">Aprende más</button>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Banco Provincia. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;
