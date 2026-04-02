import { Key } from 'lucide-react';
import React from 'react';
import PricingFeature from '../PricingFeature/PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, monthlyPrice,yearlyPrice, description,features} = pricing
    console.log(pricing)
    return (
        <div className='border bg-amber-600 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4>Price:
                    <p>${monthlyPrice}/<span>Monthly</span> </p>
                    <p>${yearlyPrice}/<span>Yearly</span> </p>
                </h4>
            </div>

            {/* card body */}
            <div>
                <p>{description}</p>
                {
                    features.map(feature => <PricingFeature key={feature.id} feature={feature}></PricingFeature>)
                }
            </div>
            <div></div>
        </div>
    );
};

export default PricingCard;