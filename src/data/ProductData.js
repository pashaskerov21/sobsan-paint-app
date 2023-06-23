import cover_1 from '../image/category-cover/cover-1.jpg'
import cover_2 from '../image/category-cover/cover-2.jpg'
import cover_3 from '../image/category-cover/cover-3.jpg'
import cover_4 from '../image/category-cover/cover-4.jpg'
import cover_5 from '../image/category-cover/cover-5.jpg'



export const productCategories = [
    {
        id: 'id-1',
        name: 'products',
        path: 'products',
        is_cover: true,
        cover_img: cover_1,
        is_subcategory: true,
        brands: ['Sobsan'],
        features: ['erasable','antibacterial','anti-corrosive','UV-durable','washable'],
        types: ['water-based','synthetic','cellulose','epoxy','polyurethane','thinner'],
        application_areas: ['interior-wall','exterior-wall','ceiling','metal-surface','wooden-surface','parquet-and-furniture','concrete-surface','stone-surface'],
        appearance: ['glossy','matt','semi-matt','semi-gloss','semitransparent','transparent','silk-matt'],
        drying: ['fast-drying'],
        subcategories: [
            {
                id: 'id-1-1',
                name: 'water-based-paints',
                path: 'water-based-paints',
                is_type: true,
                types: [
                    {
                        id: 'id-1-1-1',
                        name: 'interior-wall-paints',
                        path: 'interior-wall-paints',
                    },
                    {
                        id: 'id-1-1-2',
                        name: 'exterior-front-paints',
                        path: 'exterior-front-paints',
                    },
                    {
                        id: 'id-1-1-3',
                        name: 'putties',
                        path: 'putties',
                    },
                    {
                        id: 'id-1-1-4',
                        name: 'primers',
                        path: 'primers',
                    },
                    {
                        id: 'id-1-1-5',
                        name: 'PVA-based-adhesives',
                        path: 'PVA-based-adhesives',
                    },
                    {
                        id: 'id-1-1-6',
                        name: 'water-based-varnishes',
                        path: 'water-based-varnishes',
                    },
                ]
            },
            {
                id: 'id-1-2',
                name: 'solvent-based-paints',
                path: 'solvent-based-paints',
                is_type: true,
                types: [
                    {
                        id: 'id-1-2-1',
                        name: 'synthetic-paints',
                        path: 'synthetic-paints',
                    },
                    {
                        id: 'id-1-2-2',
                        name: 'cellulosic-paints',
                        path: 'cellulosic-paints',
                    },
                    {
                        id: 'id-1-2-3',
                        name: 'polyurethane-paints',
                        path: 'polyurethane-paints',
                    },
                    {
                        id: 'id-1-2-4',
                        name: 'epoxy-paints',
                        path: 'epoxy-paints',
                    },
                ]
            },
            {
                id: 'id-1-3',
                name: 'gold-series',
                path: 'gold-series',
                is_type: false,
                types: []
            },
        ]
    },
    {
        id: 'id-2',
        name: 'decorative-paints',
        path: 'decorative-paints',
        is_cover: true,
        cover_img: cover_2,
        is_subcategory: true,
        brands: ['Sobsan'],
        features: ['erasable','antibacterial'],
        types: [],
        application_areas: ['interior-wall','exterior-wall','ceiling',  ],
        appearance: ['glossy','matt','semi-matt',],
        drying: [],
        subcategories: [
            {
                id: 'id-2-1',
                name: 'decorative-interior-paints',
                path: 'decorative-interior-paints',
                is_type: false,
                types: []
            },
            {
                id: 'id-2-2',
                name: 'decorative-facade-paints',
                path: 'decorative-facade-paints',
                is_type: false,
                types: []
            },
        ]
    },
    {
        id: 'id-3',
        name: 'industrial-paints',
        path: 'industrial-paints',
        is_cover: true,
        cover_img: cover_3,
        is_subcategory: true,
        brands: ['Sobsan'],
        features: [],
        types: [],
        application_areas: [],
        appearance: [],
        drying: [],
        subcategories: [
            {
                id: 'id-3-1',
                name: 'paints',
                path: 'paints',
                is_type: false,
                types: []
            },
            {
                id: 'id-3-2',
                name: 'primers',
                path: 'primers',
                is_type: false,
                types: []
            },
            {
                id: 'id-3-3',
                name: 'thinners',
                path: 'thinners',
                is_type: false,
                types: []
            },
        ]
    },
    {
        id: 'id-4',
        name: 'construction-products',
        path: 'construction-products',
        is_cover: true,
        cover_img: cover_4,
        is_subcategory: true,
        brands: ['Sobsan'],
        features: [],
        types: ['Sement əsaslı','water-based','gypsum-based'],
        application_areas: ['interior-surface','exterior-surface'],
        appearance: [],
        drying: [],
        subcategories: [
            {
                id: 'id-4-1',
                name: 'ceramic-adhesives',
                path: 'ceramic-adhesives',
                is_type: false,
                types: []
            },
            {
                id: 'id-4-2',
                name: 'gypsum-based-products',
                path: 'gypsum-based-products',
                is_type: true,
                types: [
                    {
                        id: 'id-4-2-1',
                        name: 'primers',
                        path: 'primers',
                    },
                    {
                        id: 'id-4-2-2',
                        name: 'coatings',
                        path: 'coatings',
                    },
                ]
            },
            {
                id: 'id-4-3',
                name: 'decorative-plasters',
                path: 'decorative-plasters',
                is_type: false,
                types: []
            },
            {
                id: 'id-4-4',
                name: 'waterproofing-products',
                path: 'waterproofing-products',
                is_type: false,
                types: []
            },
            {
                id: 'id-4-5',
                name: 'repair-plasters',
                path: 'repair-plasters',
                is_type: false,
                types: []
            },
        ]
    },
    {
        id: 'id-5',
        name: 'painter-tools',
        path: 'painter-tools',
        is_cover: true,
        cover_img: cover_5,
        is_subcategory: true,
        brands: ['Sobsan'],
        features: [],
        types: [],
        application_areas: [],
        appearance: [],
        drying: [],
        subcategories: [
            {
                id: 'id-5-1',
                name: 'brushes',
                path: 'brushes',
                is_type: false,
                types: []
            },
            {
                id: 'id-5-2',
                name: 'rolls',
                path: 'rolls',
                is_type: false,
                types: []
            },
        ]
    },
    {
        id: 'id-6',
        name: 'other',
        path: 'other',
        is_cover: false,
        cover_img: '',
        is_subcategory: false,
        brands: ['Sobsan'],
        features: [],
        types: [],
        application_areas: [],
        appearance: [],
        drying: [],
        subcategories: []
    },
]




// import product_1_1_1_1 from '../image/product/product-1-1-1-1.jpg'
// import product_1_1_1_2 from '../image/product/product-1-1-1-2.jpg'
// import product_1_1_1_3 from '../image/product/product-1-1-1-3.jpg'
// import product_1_1_1_4 from '../image/product/product-1-1-1-4.jpg'
// import product_1_1_1_5 from '../image/product/product-1-1-1-5.jpg'
// import product_1_1_1_6 from '../image/product/product-1-1-1-6.jpg'
// import product_1_1_1_7 from '../image/product/product-1-1-1-7.jpg'
// import product_1_1_1_8 from '../image/product/product-1-1-1-8.jpg'
// import product_1_1_1_9 from '../image/product/product-1-1-1-9.jpg'
// import product_1_1_1_10 from '../image/product/product-1-1-1-10.jpg'
export const product = [
    {
        id: ''
    }
]