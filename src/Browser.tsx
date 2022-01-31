
import { useState } from "react"

function Browser() {
    const [ url, setUrl] = useState('')
    const handleSubmit = (e: any) => {
        // console.log(url);
        if (e.code === 'Enter')
          e.preventDefault();
    };

    const uri = "https://" + url; 


    return(
                
        <>
        <div className='flex-row'>
        <section className='section'>
            <h1 className="text-center text-4xl h1 text-blue-700
                        rounded-l-lg p-4
                        border-t mr-0 
                        border-b border-l font italic"> Mini Browser </h1>
            <div className="text-center
                px-8 rounded-r-lg text-green-900
                font italic"> Enter your link without <i className="text-red-500"> "https://" </i>  to display its Webpage </div>
            <article className=' font-mono text-center container'>
            <div className =" left-10 right-8 form text-center self-center">
                <form className=" text-center  rounded-sm space-x-3" >
                            <label htmlFor="url"> Url: </label>
                            <input className="
                            border-2
                            rounded-l-lg p-2
                            border-gray-200
                            bg-white "
                            type ="text"
                            id="url" 
                            name="url" 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onClick={handleSubmit}
                            onKeyDown={handleSubmit}
                            />
                    </form> 
            </div>
            </article>
        </section>
        <section className="iframe-container">
            <iframe loading="lazy" src = {uri} className="mini" >
                    {/* // Webpage shows here */}
                </iframe>    
        </section>
        </div>
        </>  
    )

  }
  
  export default Browser;
  