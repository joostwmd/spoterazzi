import { useState } from 'react'
import { addSpot, confirmLocationHandler } from '../mapboxApi/spot'



function AddSpot({ currentMap, popup }) {

    const [colorOne, setColorOne] = useState('#648767')
    const [colorTwo, setColorTwo] = useState('#CEE7E6')
    const [colorThree, setColorThree] = useState('#BCAB79')



    function importPictures() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onChange = _ => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files);
        };
        input.click();

    }


    return (
        <div className='addSpotPage'>
            <h1>add all the information about your spot</h1>


            <div className='textInputWrapper'>
                <h1>name of your spot</h1>
                <input type='text' />
            </div>

            <div className='textInputWrapper'>
                <h1>discribe your spot</h1>
                <input type='text' />
            </div>

            <div className='textInputWrapper'>
                <h1>discribe lighting</h1>
                <input type='text' />
            </div>


            <div className='textInputWrapper'>
                <h1>add your instagram for additional inforamtion</h1>
                <input type='text' />
            </div>

            <h1 id='colorsHeading'>3 colors of your spot</h1>

            <div className='colorInputFieldsWrapper'>
                <div className='colorInputFieldWrapper'>
                    <input type='color' value="#648767" onInput={(e) => { setColorOne(e.target.value) }} />
                    <p>{colorOne}</p>
                </div>

                <div className='colorInputFieldWrapper'>
                    <input type='color' value="#CEE7E6" onInput={(e) => { setColorTwo(e.target.value) }} />
                    <p>{colorTwo}</p>
                </div>

                <div className='colorInputFieldWrapper'>
                    <input type='color' value="#BCAB79" onInput={(e) => { setColorThree(e.target.value) }} />
                    <p>{colorThree}</p>
                </div>
            </div>


            <div className='fileUploadWrapper'>
                <h1>upload pictures from your spot</h1>
                <button
                    onClick={() => { importPictures() }}
                >
                    <h1>upload</h1>
                </button>
            </div>


            <div
                className='addSpotButtonPage'
                onClick={() => { addSpot(currentMap, popup)}}
            >
                <h1>add spot</h1>
            </div>
        </div>
    )
}

export default AddSpot
