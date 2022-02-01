
import { useState } from "react"
import ReactDOM from 'react-dom';



    // function name(a: any, b: any) {
    //     var a = b 
    //     if (!a.match('^https?:') ) 
    //         a = 'https://' + a
    //         return a
        
    // }


const Browser = (uri: any) => {

    const [ url, setUrl] = useState('')

    
    const link = () => {
        // var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        var link = url;
            if (!link.match('^https?:') ) 
                link = 'https://' + link
                return link
        };   

    
    ReactDOM.render(
        <div className="container-iframe" >
       <iframe src={link()} className="responsive-iframe" frameBorder="0"  ></iframe>
       </div>,
       document.getElementById('down')
        
    )
    
    const handleSubmit = (e: any) => {
        // console.log(url);
        if (e.code === 'Enter')
          e.preventDefault();
    };


  return (
    <div>

            <div className="App">
            <div className='flex-row'>
            <section className='section'>
                <h1 className="text-center text-4xl h1 text-blue-700
                            rounded-l-lg p-4
                            border-t mr-0 
                            border-b border-l font italic"> Mini Browser </h1>
                <div className="text-center
                    px-8 rounded-r-lg text-green-900
                    font italic"> Test with <i className="text-red-500"> https://asurascans.com </i> or  <i className="text-green-700"> asurascans.com </i> to  preview their website ...</div>
                <article className=' font-mono text-center container'>
                <div className =" left-10 right-8 form text-center self-center">
                    <div className="text-center  rounded-sm space-x-3" style={{ display: "inline-block"}}>
                        <form className=" flex-col " >
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
                                    onClick={handleSubmit} onKeyDown={handleSubmit}
                                    />
                            </form> 

                    </div>
                </div>
                </article>
            </section>
            </div>
            </div>


    </div>


    

  )

}

export default Browser;
