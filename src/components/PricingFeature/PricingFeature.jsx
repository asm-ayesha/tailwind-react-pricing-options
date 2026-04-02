import { Check, X } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <div className='mt-2'>
            <p className='flex gap-3'>
                {
                    feature.included? <Check></Check>: <X></X>
                }
                {feature.label}
            </p>
        </div>
    );
};

export default PricingFeature;