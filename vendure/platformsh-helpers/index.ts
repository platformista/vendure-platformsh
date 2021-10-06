import { bootstrap } from '@vendure/core';
import { populate } from '@vendure/core/cli';
import { config } from '../src/vendure-config';

import { InitialData, LanguageCode } from '@vendure/core';
const initialData: InitialData = {
    defaultLanguage: LanguageCode.en,
    countries: [
        { name: 'Austria', code: 'AT', zone: 'Europe' },
        { name: 'Malaysia', code: 'MY', zone: 'Asia' },
        { name: 'United Kingdom', code: 'GB', zone: 'Europe' },
    ],
    defaultZone: 'Europe',
    taxRates: [
        { name: 'Standard Tax', percentage: 20 },
        { name: 'Reduced Tax', percentage: 10 },
        { name: 'Zero Tax', percentage: 0 },
    ],
    shippingMethods: [{ name: 'Standard Shipping', price: 500 }, { name: 'Express Shipping', price: 1000 }],
    collections: [
        {
            name: 'Electronics',
            filters: [
                {
                    code: 'facet-value-filter',
                    args: { facetValueNames: ['Electronics'], containsAny: false },
                },
            ],
            assetPaths: ['jakob-owens-274337-unsplash.jpg'],
        },
    ],
    paymentMethods: [],
};

populate(
    () => bootstrap(config),
    initialData,
    undefined
)
    .then(app => {
        return app.close();
    })
    .then(
        () => process.exit(0),
        err => {
            console.log(err);
            process.exit(1);
        },
    );
