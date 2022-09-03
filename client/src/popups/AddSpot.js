import { useState } from 'react'
import { addSpot } from '../mapboxApi/spot'



function AddSpot({ currentMap, popup }) {

    const [colorOne, setColorOne] = useState('#648767')
    const [colorTwo, setColorTwo] = useState('#CEE7E6')
    const [colorThree, setColorThree] = useState('#BCAB79')

    const [files, setFiles] = useState([])

    function importPictures() {
        let input = document.createElement('input');
        input.type = 'file';
        input.setAttribute('multiple', '')

        input.addEventListener('change', function(e){
            const arr = []
            for (let file of input.files){
                arr.push(file.name)
            }
            setFiles(arr)
        })

        input.click()
        
    }

    const changeBackgroundColorOne = (value) => {
        setColorOne(value)
        document.getElementById('colorOneDiv').style.backgroundColor = value
    }

    const changeBackgroundColorTwo = (value) => {
        setColorTwo(value)
        document.getElementById('colorTwoDiv').style.backgroundColor = value
    }

    const changeBackgroundColorThree = (value) => {
        setColorThree(value)
        document.getElementById('colorThreeDiv').style.backgroundColor = value
    }

    const focusOnInput = (id) => {
        document.getElementById(id).focus()
    }


    return (
        <div>
            <div className='mapBlur'>
                <div className='addSpotPage'>
                    <h1>add all the information about your spot</h1>

                    <div className='textInputWrapper' onClick={() => { focusOnInput('spotNameInput') }}>
                        <h1>name of your spot</h1>
                        <input id='spotNameInput' name='textInput' type='text' />
                    </div>


                    <div className='textInputWrapper' onClick={() => { focusOnInput('spotDiscriptionInput') }}>
                        <h1>discribe your spot</h1>
                        <input id='spotDiscriptionInput' name='textInput' type='text' />
                    </div>

                    <div className='textInputWrapper' onClick={() => { focusOnInput('lightingInput') }}>
                        <h1>discribe lighting</h1>
                        <input id='lightingInput' name='textInput' type='text' />
                    </div>


                    <div className='textInputWrapper' onClick={() => { focusOnInput('instaNameInput') }}>
                        <h1>add your instagram for additional inforamtion</h1>
                        <input id='instaNameInput' name='textInput' type='text' />
                    </div>

                    <h1 id='colorsHeading'>3 colors of your spot</h1>

                    <div className='colorInputFieldsWrapper'>

                        <div className='colorInputFieldWrapper'>
                            <div className='backgroundcolorInput' id='colorOneDiv' onClick={() => { focusOnInput('colorInputOne') }} style={{backgroundColor : '#648767'}}>
                                <input id='colorInputOne' type='color' value="#648767" onInput={(e) => { changeBackgroundColorOne(e.target.value) }} />
                            </div>
                            <p>{colorOne}</p>
                        </div>

                        <div className='colorInputFieldWrapper'>
                            <div className='backgroundcolorInput' id='colorTwoDiv' onClick={() => { focusOnInput('colorInputTwo') }} style={{backgroundColor : '#CEE7E6'}}>
                                <input id='colorInputTwo' type='color' value="#CEE7E6" onInput={(e) => { changeBackgroundColorTwo(e.target.value) }} />
                            </div>
                            <p>{colorTwo}</p>
                        </div>

                        <div className='colorInputFieldWrapper'>
                            <div className='backgroundcolorInput' id='colorThreeDiv' onClick={() => { focusOnInput('colorInputThree')}} style={{backgroundColor : '#BCAB79'}}>
                                <input id='colorInputThree' type='color' value="#BCAB79" onInput={(e) => { changeBackgroundColorThree(e.target.value) }} />
                            </div>
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

                    <div className='filesWrapper'>
                       {files.map(file => {
                           return (
                               <h1>{file}</h1>
                           )
                       })} 
                    </div>


                    <div
                        className='addSpotButtonPage'
                        onClick={() => { addSpot(currentMap, popup) }}
                    >
                        <h1>add spot</h1>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default AddSpot


