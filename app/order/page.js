import './order.css'
import React from 'react';
import { mystery_quest } from '../fonts';
import { closeMongoDB } from '@/libs/mongo';

async function Order(props) {
    // await closeMongoDB();
    return (
        <div className='bg-back text-wte min-h-screen max-h-full centered-text'>
            <p className={`${mystery_quest.variable} font-quest sm:text-[50px] xs:text-[40px]`}>Order from our Providers</p>
            <div className="image-container">
                <div>
                   <a href="https://www.ubereats.com/ca/store/spice-mart/asw6QXM2U-WZzqajlFR1Dw" target="_blank">
                        <img src="UberEatsLogo.png" alt="Uber Eats Logo" className='sm:w-[75%] sm:h-[75%] xs:w-[65%] xs:h-[65%] pb-8' />
                    </a>
                </div>
                    <div><a href="https://www.skipthedishes.com/spicemart-cundles-road-east" target="_blank">
                        <img src="SkipTheDishesLogo.png" alt="Skip The Dishes Logo" className='sm:w-[75%] sm:h-[75%] xs:w-[65%] xs:h-[65%] pb-8' />
                    </a>
                </div>
                <div>
                    <a href="https://www.doordash.com/en-CA/store/spice-mart-takeout-barrie-2491829/" target="_blank">
                        <img src="DoorDashLogo.png" alt="Door Dash Logo" className='sm:w-[75%] sm:h-[75%] xs:w-[65%] xs:h-[65%] pb-12'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Order;