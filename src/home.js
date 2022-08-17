import React from 'react';
import './App.css';

function Home(){
    return(
        <div>
            <div class="bgimg-2"></div>
            <div class="container-max-widths bg-light p-3 text-center" >
                <h1> Visualisation</h1>
                <div class="row p-5">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class='tableauPlaceholder' id='viz1660633902632' style={{position: "relative"}}><noscript><a href='#'><img alt='Number of female victim reports in each police LGA in 2013 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16602889911080&#47;Sheet3&#47;1_rss.png' style={{border: "none"}}/></a></noscript><object class='tableauViz'  style={{display: "none",width: "100%", height: "600px"}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='views&#47;Book1_16602889911080&#47;Sheet3?:language=en-US&amp;:embed=true&amp;publish=yes' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16602889911080&#47;Sheet3&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>               
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class='tableauPlaceholder' id='viz1660633902632' style={{position: "relative"}}><noscript><a href='#'><img alt='Number of female victim reports in each police LGA in 2013 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16602889911080&#47;Sheet3&#47;1_rss.png' style={{border: "none"}}/></a></noscript><object class='tableauViz'  style={{display: "none",width: "100%", height: "600px"}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='views&#47;Book1_16602889911080&#47;Sheet3?:language=en-US&amp;:embed=true&amp;publish=yes' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16602889911080&#47;Sheet3&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>               
                    </div>

                <div class="text-center"><button type="button" class="btn btn-dark btn-sm mt-3" style={{width: "10%"}}>See more</button></div>
                </div>
            </div>

            <div class="container-max-widths bgimg-1 ">
                <div class="container-max-widths bg-dark text-white opacity-75" >
                </div>
            </div>

            <div class="container-max-widths bg-dark text-white p-5 text-center" >
            <h1 class="mb-5"> Map</h1>
            <iframe width="100%" height="800px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/en/map/safe-locations_797304?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false">

            </iframe>
            <p>
                <a href="//umap.openstreetmap.fr/en/map/safe-locations_797304">See full screen</a>
            </p>
            </div>
        </div>
    );
}

export default Home;