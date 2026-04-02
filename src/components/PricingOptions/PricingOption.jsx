import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData)
    return (
        <div className='w-7xl mx-auto'>
            <h2>Get our Membarship</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    pricingData.plans.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;