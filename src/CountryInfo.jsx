import React, { useState, useEffect } from 'react';

function CountryInfo() {

    const [countries, setCountries] = useState([]);
    const [cInfo,setCInfo] = useState({name:"", callCode:"", region:"", capital:"", population:"", currency:"", language:""})
    const [countrySlctd, setCountrySlctd] = useState(false);

    const infoStyleP = {color:"black"}
    const infoStyleLbl = {width:"150px"}


    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2').then(resp => resp.json()).then(resp => setCountries(resp))
    }, [])


    const showData = (obj) => {
        obj.preventDefault();
        const nation = obj.target.cName.value;

        for (const cntry of countries) {
            if (cntry.name.toLowerCase() === nation.toLowerCase()) {
                setCInfo({name:cntry.name, callCode:cntry.callingCodes.[0], region:cntry.region, capital:cntry.capital, population:cntry.population, currency:cntry.currencies.[0].name, language:cntry.languages.[0].name})
                setCountrySlctd(true)
                break
            }
            else {
                setCountrySlctd(false)
            }
        }

    }

    const DispCountries = () => {
        return (
            <>
                <form onSubmit={showData}>
                    <div className="row">
                        <div className="input-group mb-2 mx-auto" style={{ width: "60%", textAlign: "center" }}>
                            <div className="input-group-prepend">
                                <div className="input-group-text border border-primary">Select Country</div>
                            </div>
                            <input type="text" className="mx-auto form-control rounded-right border border-info" id="cName" list="countryNames" htmlFor="countryDropdown" placeholder="--Search Country--" style={{ color: "magenta" }} />
                            <datalist id="countryNames">
                                {countries.map((country) => {
                                    return <option>{country.name}</option>
                                })}
                            </datalist>
                        </div>

                        <button type="submit" className="mr-5 rounded-circle btn btn-success">Get Info</button>
                    </div>
                </form>
            </>
        )
    }

    const DispDetail = () =>{
        return (
            <>
            <div className="container my-2 jumbotron">
                <div className="input-group mb-2 mx-auto" style={{width:"60%"}}>
                    <div className="input-group-prepend">
                        <div className="input-group-text justify-content-center border border-primary" style={infoStyleLbl}> Country </div>
                    </div>
                    <p type="text" className="mx-auto form-control rounded-right border border-info" style={infoStyleP}>{cInfo.name}</p>
                </div>

                <div className="input-group mb-2 mx-auto" style={{width:"60%"}}>
                    <div className="input-group-prepend">
                        <div className="input-group-text justify-content-center border border-primary" style={infoStyleLbl}> Capital </div>
                    </div>
                    <p type="text" className="mx-auto form-control rounded-right border border-info" style={infoStyleP}>{cInfo.capital}</p>
                </div>

                <div className="input-group mb-2 mx-auto" style={{width:"60%"}}>
                    <div className="input-group-prepend">
                        <div className="input-group-text justify-content-center border border-primary" style={infoStyleLbl}> Region </div>
                    </div>
                    <p type="text" className="mx-auto form-control rounded-right border border-info" style={infoStyleP}>{cInfo.region}</p>
                </div>

                <div className="input-group mb-2 mx-auto" style={{width:"60%"}}>
                    <div className="input-group-prepend">
                        <div className="input-group-text justify-content-center border border-primary" style={infoStyleLbl}> Currency </div>
                    </div>
                    <p type="text" className="mx-auto form-control rounded-right border border-info" style={infoStyleP}>{cInfo.currency}</p>
                </div>

                <div className="input-group mb-2 mx-auto" style={{width:"60%"}}>
                    <div className="input-group-prepend">
                        <div className="input-group-text justify-content-center border border-primary" style={infoStyleLbl}> Language </div>
                    </div>
                    <p type="text" className="mx-auto form-control rounded-right border border-info" style={infoStyleP}>{cInfo.language}</p>
                </div>

                <div className="input-group mb-2 mx-auto" style={{width:"60%"}}>
                    <div className="input-group-prepend">
                        <div className="input-group-text justify-content-center border border-primary" style={infoStyleLbl}> Population </div>
                    </div>
                    <p type="text" className="mx-auto form-control rounded-right border border-info" style={infoStyleP}>{cInfo.population}</p>
                </div>

                <div className="input-group mb-2 mx-auto" style={{width:"60%"}}>
                    <div className="input-group-prepend">
                        <div className="input-group-text justify-content-center border border-primary" style={infoStyleLbl}> Call Code </div>
                    </div>
                    <p type="text" className="mx-auto form-control rounded-right border border-info" style={infoStyleP}>+{cInfo.callCode}</p>
                </div>

            </div>
            </>
        )
    }

    return ( <>

            <div className="container my-2 jumbotron">
                <h2 className="text-center" style={{ color: "Lime" }}>COUNTRY INFORMATION CENTRE</h2>
                <DispCountries />
            </div>

           {countrySlctd ? <DispDetail/> :null}
        </>
    )
}

export default CountryInfo;
