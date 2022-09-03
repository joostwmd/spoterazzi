import { useEffect, useState } from 'react'
import { closeSpotProfilePopup } from '../mapboxApi/spot'

function Spot({ currentMap, popup, data }) {

    const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
    const [pictureStrings, setPictureStrings] = useState(undefined)
    useEffect(() => {
        const arr = []
        for (let i = 1; i <= 2; i++) {
            arr.push(data.properties.name.replaceAll(' ', '').toLowerCase() + `${i}.jpg`)
        }
        setPictureStrings(arr)
    }, [])

    if (pictureStrings !== undefined) {
        return (
            <div>
                <div className='mapBlur'>
                    <div className="spotProfile">

                        <div className='spotProfileHeader'>
                            <div
                                onClick={() => { closeSpotProfilePopup(currentMap, popup) }}
                            >
                                {closeIcon}
                            </div>
                            <h1>{data.properties.name}</h1>
                        </div>


                        <div className='discriptionWrapper'>
                            <p>{data.properties.discription}</p>
                        </div>


                        <div className='colorsWrapper'>
                            <h1>colors of the scenery</h1>
                            <div className='colorFieldsWrapper'>
                                {data.properties.colors.map(color => {
                                    return (
                                        <div style={{ width: '150px', height: '50px', backgroundColor: color }} />
                                    )
                                })}
                            </div>
                        </div>

                        <h1 id='headingForPictures'>pictures of the scenery</h1>
                        <div className='picturesWrapper'>
                            {pictureStrings.map(string => {
                                return (
                                    <img alt='' src={require(`../assets/pictures/${string}`)} />
                                )
                            })}
                        </div>

                        <h3>contact the spotter on instagram for more questions :</h3><h2 style={{color : '#e26400', fontWeight : '700', fontSize : '35px', marginTop : '2.5vh'}}>{data.properties.spotter}</h2>



                    </div>
                </div>
            </div>
        )
    }
}

export default Spot
