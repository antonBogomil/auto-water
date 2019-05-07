import React from 'react';
import frame1 from '../../assets/frame1.jpeg';
const Main = () => {
    return (
        <div className='page page-main'>
            <div className='frame'>
                <div className='frames-container'>
                    <img alt={frame1} src={frame1}/>
                </div>
                <div className='overlay'>
                    <div className='wrapper'>
                        <div className='article'>
                            <h2>
                                Системы полива
                            </h2>
                           <p className='text-0'>
                               Системы полива — различного вида
                               инженерно-технические комплексы
                               , обеспечивающие орошение определенной территории.
                           </p>
                        </div>
                        <a className='btn'
                           href='https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B_%D0%BF%D0%BE%D0%BB%D0%B8%D0%B2%D0%B0'>
                            Подробнее
                        </a>
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='cards'>
                    <div>
                        <span className="oi oi-dollar"></span>
                        <h3>Money back gurantee</h3>
                        <p>Shall open divide a one</p>
                    </div>
                    <div>
                        <span className="oi oi-cart"></span>
                        <h3>Free Delivery</h3>
                        <p>Shall open divide a one</p>
                    </div>
                    <div>
                        <span className="oi oi-headphones"></span>
                        <h3>Alway support</h3>
                        <p>Shall open divide a one</p>
                    </div>
                    <div>
                        <span className="oi oi-key"></span>
                        <h3>Secure payment</h3>
                        <p>Shall open divide a one</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;