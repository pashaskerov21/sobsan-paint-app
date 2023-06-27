import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { sendFilterParams } from '../../../redux/actions/FilterAction';
import TextTranslate from '../../../translate/TextTranslate';

function LeftFIlter({ category, subcategory, altcategory }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../../lang/${language}.json`);

    const dispatch = useDispatch();
    const location = useLocation();

    const [filterActive, setFilterActive] = useState(false);
    const toggleFilter = () => {
        setFilterActive(!filterActive)
    }

    let [rangeMin, setRangeMin] = useState(0)
    let [rangeMax, setRangeMax] = useState(2000)

    const [propertyFilters, setPropertyFilters] = useState(false);
    useEffect(() => {
        if (altcategory !== 'no-altcategory') {
            setPropertyFilters(false);
        } else {
            setPropertyFilters(true)
        }
    }, [category, subcategory, altcategory]);


    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedApplicationAreas, setSelectedApplicationAreas] = useState([]);
    const [selectedAppearance, setSelectedAppearance] = useState([]);
    const [selectedDrying, setSelectedDrying] = useState([]);

    

    const handleBrandChange = (event) => {
        const { value } = event.target;
        if (selectedBrands.includes(value)) {
            setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
        } else {
            setSelectedBrands([...selectedBrands, value]);
        }
    };
    const handleFeatureChange = (event) => {
        const { value } = event.target;
        if (selectedFeatures.includes(value)) {
            setSelectedFeatures(selectedFeatures.filter((feature) => feature !== value));
        } else {
            setSelectedFeatures([...selectedFeatures, value]);
        }
    };
    const handleTypeChange = (event) => {
        const { value } = event.target;
        if(selectedTypes.includes(value)){
            setSelectedTypes(selectedTypes.filter((altcategory) => altcategory !== value));
        }else{
            setSelectedTypes([...selectedTypes, value])
        }
    }
    const handleApplicationAreaChange = (event) => {
        const { value } = event.target;
        if(selectedApplicationAreas.includes(value)){
            setSelectedApplicationAreas(selectedApplicationAreas.filter((area) => area !== value));
        }else{
            setSelectedApplicationAreas([...selectedApplicationAreas, value])
        }
    }
    const handleAppearanceChange = (event) => {
        const { value } = event.target;
        if(selectedAppearance.includes(value)){
            setSelectedAppearance(selectedAppearance.filter((appearance) => appearance !== value));
        }else{
            setSelectedAppearance([...selectedAppearance, value])
        }
    }
    const handleDryingChange = (event) => {
        const { value } = event.target;
        if(selectedDrying.includes(value)){
            setSelectedDrying(selectedDrying.filter((drying) => drying !== value));
        }else{
            setSelectedDrying([...selectedDrying, value])
        }
    }

    const resetFilters = () => {
        setRangeMin(0);
        setRangeMax(2000);
        setSelectedBrands([]);
        setSelectedFeatures([]);
        setSelectedTypes([]);
        setSelectedApplicationAreas([]);
        setSelectedAppearance([]);
        setSelectedDrying([]);
        let filterParams = {
            rangeMin,
            rangeMax,
            selectedBrands,
            selectedFeatures,
            selectedTypes,
            selectedApplicationAreas,
            selectedAppearance,
            selectedDrying,
        }
        dispatch(sendFilterParams(filterParams))
    }
    useEffect(() => {
        setRangeMin(0);
        setRangeMax(2000);
        setSelectedBrands([]);
        setSelectedFeatures([]);
        setSelectedTypes([]);
        setSelectedApplicationAreas([]);
        setSelectedAppearance([]);
        setSelectedDrying([]);
        
    },[location.pathname]);

    const handleFilterFormSubmit = (e) => {
        e.preventDefault();
        let filterParams = {
            rangeMin,
            rangeMax,
            selectedBrands,
            selectedFeatures,
            selectedTypes,
            selectedApplicationAreas,
            selectedAppearance,
            selectedDrying,
        }
        dispatch(sendFilterParams(filterParams))
    }

    return (
        <>
            <button className='open-filter-button d-lg-none' onClick={toggleFilter}>
                <i className='fa-solid fa-filter'></i>
                <span><TextTranslate text={'Filterlə'}/></span>
            </button>
            <form onSubmit={handleFilterFormSubmit} className={filterActive ? 'left-filters d-lg-flex' : 'left-filters d-none d-lg-flex'}>
                <div className="filter-item">
                    <h5 className="title">{text['price']}</h5>
                    <div className='range-filter'>
                        <div className='range-inputs'>
                            <input type="range" value={rangeMin} onChange={(e) => { setRangeMin(e.target.value) }} min={0} max={2000} step={1} />
                            <input type="range" value={rangeMax} onChange={(e) => { setRangeMax(e.target.value) }} min={0} max={2000} step={1} />
                        </div>
                        <div className='result-inputs'>
                            <div className="item">
                                <input type="number" value={rangeMin} onChange={(e) => { setRangeMin(e.target.value) }} />
                                <span>Azn</span>
                            </div>
                            <div className="item">
                                <input type="number" value={rangeMax} onChange={(e) => { setRangeMax(e.target.value) }} />
                                <span>Azn</span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    category.brands.length > 0 ? (
                        <div className="filter-item">
                            <h5 className="title">{text['brand']}</h5>
                            <div className="filter-buttons">
                                {
                                    category.brands.map((brand, index) => (
                                        <div className={`filter-button ${selectedBrands.includes(brand) ? 'active' : ''}`} key={index}>
                                            <label htmlFor={`${brand}`}>{brand}</label>
                                            <input type="checkbox" id={`${brand}`} value={brand} checked={selectedBrands.includes(brand)} onChange={handleBrandChange} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ) : null
                }
                {
                    propertyFilters ? (
                        <>
                            {
                                category.features.length > 0 ? (
                                    <div className="filter-item">
                                        <h5 className="title">{text['features']}</h5>
                                        <div className="filter-buttons">
                                            {
                                                category.features.map((feature, index) => (
                                                    <div className={`filter-button ${selectedFeatures.includes(feature) ? 'active' : ''}`} key={index}>
                                                        <label htmlFor={`${feature}`}>{text[`${feature}`]}</label>
                                                        <input type="checkbox" id={`${feature}`} value={feature} checked={selectedFeatures.includes(feature)} onChange={handleFeatureChange} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
                            {
                                category.types.length > 0 ? (
                                    <div className="filter-item">
                                        <h5 className="title">{text['type']}</h5>
                                        <div className="filter-buttons">
                                            {
                                                category.types.map((type, index) => (
                                                    <div className={`filter-button ${selectedTypes.includes(type) ? 'active' : ''}`} key={index}>
                                                        <label htmlFor={`${type}`}>{text[`${type}`]}</label>
                                                        <input type="checkbox" id={`${type}`} value={type} checked={selectedTypes.includes(type)} onChange={handleTypeChange} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
                            {
                                category.application_areas.length > 0 ? (
                                    <div className="filter-item">
                                        <h5 className="title">{text['application-areas']}</h5>
                                        <div className="filter-buttons">
                                            {
                                                category.application_areas.map((area, index) => (
                                                    <div className={`filter-button ${selectedApplicationAreas.includes(area) ? 'active' : ''}`} key={index}>
                                                        <label htmlFor={`${area}`}>{text[`${area}`]}</label>
                                                        <input type="checkbox" id={`${area}`} value={area} checked={selectedApplicationAreas.includes(area)} onChange={handleApplicationAreaChange} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
                            {
                                category.appearance.length > 0 ? (
                                    <div className="filter-item">
                                        <h5 className="title">{text['appearance']}</h5>
                                        <div className="filter-buttons">
                                            {
                                                category.appearance.map((appearance, index) => (
                                                    <div className={`filter-button ${selectedAppearance.includes(appearance) ? 'active' : ''}`} key={index}>
                                                        <label htmlFor={`${appearance}`}>{text[`${appearance}`]}</label>
                                                        <input type="checkbox" id={`${appearance}`} value={appearance} checked={selectedAppearance.includes(appearance)} onChange={handleAppearanceChange} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
                            {
                                category.drying.length > 0 ? (
                                    <div className="filter-item">
                                        <h5 className="title">{text['drying']}</h5>
                                        <div className="filter-buttons">
                                            {
                                                category.drying.map((drying, index) => (
                                                    <div className={`filter-button ${selectedDrying.includes(drying) ? 'active' : ''}`} key={index}>
                                                        <label htmlFor={`${drying}`}>{text[`${drying}`]}</label>
                                                        <input type="checkbox" id={`${drying}`} value={drying} checked={selectedDrying.includes(drying)} onChange={handleDryingChange} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
                        </>
                    ) : null
                }
                <div className="form-buttons">
                    <button type='submit' className='submit'>{text['submit']}</button>
                    <button onClick={resetFilters} className='reset'>{text['reset']}</button>
                </div>
            </form>
        </>
    )
}

export default LeftFIlter
