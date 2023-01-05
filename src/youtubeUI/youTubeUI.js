import TopBar from "./topBar"
import Menu from "./menu";

function YoutubeUI() {
    return (
        <div>

            <header style={{position: 'fixed', width: '100%', display: ''}}>
                <div>
                    <TopBar/>
                </div>
            </header>

            <body 
                style={{
                    display: 'fixed', 
                    width: '100%',  
                    height: '100vh',
                    backgroundColor: 'red', 
                    Top:'160px' }}>
                

                <div style={{backgroundColor: 'pink', display: 'inline-block',}}>
                    <div style={{position: 'fixed', top: '60px', width: '100%'}}>
                        <Menu></Menu>
                    </div>
                </div>

                <div style={{paddingLeft: 260}}>       
                    <div style={{backgroundColor: 'green', height: '1500px', width: '100px', position: 'flex'}}>                     
                    </div>
                </div>

            </body>

        </div>
    )
}

export default YoutubeUI;
