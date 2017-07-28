import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
     return (
        <div>
           <Tabs/>
           <Product/>
           <Search/>
        </div>
     );
  }
}
// tabs functionality starting 
class Tabs extends Component{
   constructor(props){
     super(props);
        this.state =  { 
        // tablist is the array
         tablist:[
                   {name:'SAMSUNG',id:1},
                   {name:'ASUS',id:2} ,
                   {name:'MOTO',id:3},
                   {name:'NOKIA',id:4},
                   {name:'OPPO',id:5},
                   {name:'LYF',id:6}
                 ],
         activeTab:'',
         activeName:'',
         activeTabContent:''        
      };  
         this.tabData=this.tabData.bind(this);
   }
      componentDidMount() 
      {
         this.tabData(1,'SAMSUNG');
      }
      tabData(id,name)
      { 
         this.setState({
         activeTab:id,
         activeName:name,
         activeTabContent:id
       });
     }
   render(){
       var style={color:'red'}
       var t=this.state.tablist.map(function(Data,index)
       {   
         return(
             <li role="presentation" key={index}  className={this.state.activeTab===Data.id ? 'active' : ''}>
             <a  onClick={() => {this.tabData(Data.id)}}>{Data.name}</a></li>
           )
      }.bind(this))
    return (
      <div className="container">
         <ul className="nav nav-tabs nav-justified">
               {t}
        </ul>
       <div className="row" id="tabs">
         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div  className={this.state.activeTabContent===1 ? 'active1' : 'hide1'}>
               <img src={require('./assets/images/mobiles/samsunggalaxy.jpg')} alt="samsung" width="200" height="350"/>
            </div>
            <div className={this.state.activeTabContent===2 ? 'active1' : 'hide1'}>
               <img src={require('./assets/images/mobiles/asus.jpg')} alt="asus" width="200" height="350"/>   
            </div>
            <div className={this.state.activeTabContent===3 ? 'active1' : 'hide1'}>
               <img src={require('./assets/images/mobiles/motog5.jpg')} alt="moto" width="200" height="350"/> 
            </div>
            <div className={this.state.activeTabContent===4 ? 'active1' : 'hide1'}>
               <img src={require('./assets/images/mobiles/nokia.jpg')} alt="nokia" width="200" height="350"/>
            </div>
            <div className={this.state.activeTabContent===5 ? 'active1' : 'hide1'}>  
               <img src={require('./assets/images/mobiles/oppo.jpg')} alt="oppo" width="400" height="400"/>
            </div>
            <div className={this.state.activeTabContent===6 ? 'active1' : 'hide1'}>
               <img src={require('./assets/images/mobiles/lyf.jpg')} alt="lyf" width="200" height="350"/>
            </div>
        </div> 
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
           <div className={this.state.activeTabContent===1 ? 'active1' : 'hide1'}>
              <h4 style={style}>SAMSUNG GALAXY</h4>
               <hr/>
               <span>
                  <ul>  
                    <li> 20MP+16MP primary dual camera and 16MP front facing camera</li>
                    <li>13.97 centimeters (5.5-inch) capacitive touchscreen FHD display with 1920 x 1080 pixels resolution</li>
                    <li> Android v7.1.1 Nougat OS with Qualcomm Snapdragon 835 octa core processor</li>
                    <li> 6 GB RAM, 64 GB internal memory and dual nano SIM dual-standby (4G+4G)</li>
                    <li>3300mAH lithium-ion battery with Dash Charge technology</li>
                    <li> Fingerprint scanner, all-metal unibody and NFC enabled</li>
                    <li>1 year manufacturer warranty for device and 6 months manufacturer warranty 
                              for in-box accessories including batteries from the date of purchase</li>
                  </ul>
               </span>
           </div> 
           <div className={this.state.activeTabContent===2 ? 'active1' : 'hide1'}>
              <h4 style={style}>ASUS</h4>
               <hr/>
              <span>
                <ul> 
                   <li>13MP primary camera and 5MP front facing camera</li>
                   <li>13.208 centimeters (5.2-inch) IPS capacitive touchscreen with 1280 x 720 pixels resolution</li>
                   <li>Android v6.0.1 Marshmallow operating system 1.2GHz MediaTek MT6737 64-bit quad core processor, 
                        3GB RAM, 32GB internal memory and dual SIM dual-standby (4G+4G)</li>
                   <li> 4130mAH non-removable lithium-polymer</li>
                   <li> 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories 
                         including batteries from the date of purchase</li>
                </ul>
              </span> 
           </div>
           <div className={this.state.activeTabContent===3 ? 'active1' : 'hide1'}>
              <h4 style={style}>MOTO g5</h4>
               <hr/>
               <span>
                  <ul>
                     <li>12MP primary camera (f1.7) with dual auto focus pixels and 5MP front facing camera, color balancing dual LED flash,
                          8x digital zoom for photos, 4x for video, drag to focus exposure</li>
                     <li> 4GB RAM and 32GB internal memory expandable up to 128GB</li>
                     <li>Metal body with finger-print reader</li>
                     <li>13.2 centimeters (5.2-inch) Full HD TFT IPS display with 1920 x 1080 pixels resolution with Corning 
                          Gorilla Glass 3 capacitive touchscreen</li>
                     <li>Android v7 Nougat operating system | Qualcomm Snapdragon 625 octa-core processor (2GHz) with Adreno 506 GPU</li>
                     <li>Dual nano SIM with dual-standby (4G+4G)</li>
                     <li>3000mAH lithium-ion battery</li>
                     <li>1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories 
                     including batteries from the date of purchase</li>
                  </ul>
               </span>
           </div>
           <div className={this.state.activeTabContent===4 ? 'active1' : 'hide1'}>
              <h4 style={style}>NOKIA</h4>
               <hr/>
              <span>
                <ul>
                   <li>Display: 5.2"(1920*1080) FHD</li>
                   <li>Camera: Front 13MP BSI / Back: 5MP</li>
                   <li>Memory: 16Gb (Rom) upto 128Gb / 2Gb (Ram), 1.3 Ghz Octa Core - (64Bit)</li>
                   <li>Battery: 2450 Mah</li>
                   <li>Connectivity: BT 4.1 ,4G VoLTE ,USB OTG</li>
                   <li>ASIN :B01J7FAIZ0</li>
                   <li>Weight:280 Grams</li>
                   <li>Special features  USB,Primary Camera</li>
                   <li>Connectivity technologies  4G LTE</li>
                </ul>
              </span> 
           </div>
           <div className={this.state.activeTabContent===5 ? 'active1' : 'hide1'}>
              <h4 style={style}>OPPO F3 Black 64 GB</h4>  
               <hr/>
               <span>
                 <ul>
                   <li>Display:5.2"(1920*1080) FHD</li>
                   <li>Camera:13 MP Rear and 16 + 8 MP front</li>
                   <li>Memory: 16Gb (Rom) upto 128Gb / 2Gb (Ram), 1.3 Ghz Octa Core - (64Bit)</li>
                   <li>Whats in the box   Handset, Battery, Adapter, Headset, Micro USB Cable, SIM Card Tool, 
                       Screen Protect Film, Case, Booklet with Warranty Card and Quick Guide</li> 
                   <li> Form factor: touchscreen</li>
                   <li>Battery: 2450 Mah</li>
                   <li>Weight:280 Grams</li>
                   <li> Colour : Black</li>    
                 </ul>
               </span>
           </div>
           <div className={this.state.activeTabContent===6 ? 'active1' : 'hide1'}>
              <h4 style={style}>LYF Water 10 (Black)</h4>
              <hr/>
              <span>
                 <ul>
                   <li>13 MP+5MP Camera, Get great selfies with 5MP front camera and the Image Enhancer mode.
                     Capture lively photographs with the Live mode and Multi-angle view mode</li> 
                   <li> 64 bit Processor Powered by an Octa-core processor with 3GB RAM and 16GB internal storage</li>
                   <li>Android Lollipop 5.1 Dual Sim 4G+2G 2300mAh batery Mobile Phone 12.7cms (5)HD IPS Display 
                       SIM Slot: Dual SIM (4G+2G) ; Both SIM slots are 4G enabled.
                       At one time only one slot can be used for 4G while the other will work on 2G.</li>  
                   <li>SIM Size: SIM 1 - Micro, SIM2 - Micro</li> 
                   <li>Water 10 Volte HD Voice Calls USB ON The Go Dual Sim Mobile Phone.
                   Please install LYFcare app and locate nearest service center for any troubleshooting services</li>
                </ul>
              </span>
           </div>  
         </div>
       </div> 
    </div>  
  );
 }
}
// tabs functionality ending
// scrolling functionality starting
class Product extends Component{
   constructor(props){ 
     super(props);
    this.state =  { 
       coffee_list:[
                    {name:'PREMIUM ICE CREAME',id:1,image:'premium.jpg'},
                    {name:'CLASSIC VANILLA',id:2,image:'icecreame.jpg'},
                    {name:'COFFEE',id:3,image:'coffeice.png'},
                    {name:'BLACK CHERRY',id:4,image:'blackcherry1.png'},
                    {name:'BUTTER PECAN',id:5,image:'butterpecan.png'},
                    {name:'CAMPFIRE TOASTED SMORES',id:6,image:'campfire.png'},
                    {name:'CHERRY VANILLA',id:7,image:'cherryvanilla.jpg'},
                    {name:'SPUMONI',id:8,image:'spumoni.jpg'},
                    {name:'STRAWBERRY',id:9,image:'strawberry.jpg'}
                   ],
     active_status:'',
     active_name:'',
     active_content:''
   }
     this.getData=this.getData.bind(this);
}
    componentDidMount() {
      this.getData(1,'PREMIUM ICE CREAME');
    }
    getData(id,name){
      this.setState({
         active_status:id,
         active_name:name,
         active_content:id
       });
    }
 render() {
  var x=this.state.coffee_list.map(function(data,index){
        return(
           <li key={index} onClick={() => {this.getData(data.id,data.name)}} className={this.state.active_status===data.id ? 'active' : ''} >
              <span>
                <img src={require ('./assets/images/'+data.image)} alt="vanilla.jpg" className="thumbnail" width="60" height="60"/>
                <p className="first">{data.name}</p>
              </span>
           </li>
          )
       }.bind(this))
    return(
     <div className="container-fluid">
      <div className="row product" >
       <div  className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
         <div id="premium"   className={this.state.active_content===1 ? 'active1' : 'hide1'}>
           <h2>PREMIUM ICE CREAME</h2>
             <p>Pierre's Premium Ice Creame is the Smoothest,creamiest and most
              delicious ice creame you'll ever taste!Greate Care and attention have
              gone into preserving and perfecting the company's original home made ice creame recipes.
             </p>
         </div>
         <div id="content1"  className={this.state.active_content===2 ? 'active1' : 'hide1'}>
           <h4>PREMIUM ICE CREAME</h4>
           <h2>CLASSIC VANILLA</h2>
           <p>Taste buds tingle at the mere thought.Freash,flavourful Black
             Respberry Ice Creame Loaded with rich chocolaty chips.your
             mouth will thank you.</p>
            <ul>
              <li>Certified Kosher OUD</li>
              <li>Gluten Free</li>
            </ul><hr/>
             <p>Available in 1.5 Quarts,3-Gallon Bulk.
           </p>
         </div>
         <div id="content2" className={this.state.active_content===3 ?  'active1' : 'hide1'}>
           <h4>PREMIUM ICE CREAME</h4>
           <h2>COFFEE</h2>
           <p>Make it an extra large with a double-shot of creamy,please.
                We use nothing but the richest flavourful coffee to create this
                smooth andrefreshing flavour.It's pure pleasure in every scoop.
           </p> 
             <ul>
              <li>Certified Kosher OUD</li>
              <li>Gluten Free</li>
            </ul><hr/>
           <p> Available in 1.5 Quarts,3-Gallon Bulk.</p>
        </div>
          <div id="content3" className={this.state.active_content===4 ? 'active1' : 'hide1'}>
           <h4>PREMIUM ICE CREAME</h4>
           <h2>BLACK CHERRY</h2>
           <p>Black Cherry Ice Creame with juicy black cherries</p>
             <ul>
               <li>Certified Kosher OUD</li>
               <li>Gluten Free</li>
             </ul><hr/>
                 <p>Available in 1.5 Quarts,3-Gallon Bulk.</p>
          </div>
          <div id="content4" className={this.state.active_content===5 ?  'active1' : 'hide1'}>
             <h4>PREMIUM ICE CREAME</h4>
             <h2>BUTTER PECAN</h2>
              <p>
                Irresistible Butter Pecan Ice Creame with freash roasted,
                buttery pecans offers a taste you can't resist.
              </p>  
               <ul>
                <li>Certified Kosher OUD</li>
                <li>Gluten Free</li>
               </ul><hr/>
                <p> Available in 1.5 Quarts,3-Gallon Bulk.
              </p>
          </div>
          <div id="content5" className={this.state.active_content===6 ?  'active1' : 'hide1'}>
              <h4>PREMIUM ICE CREAME</h4>
              <h2>CAMPFIRE TOASTED S'MORES</h2>
              <p>
                Gather's round the fire! Marshmallow Ice Creame with choco-coverd
                marshmallow cups,salted fudge and graham  cracker swirl.
              </p>  
              <ul>
                <li>Certified Kosher OUD</li>
              </ul><hr/>
                 <p>Available in 1.5 Quarts,3-Gallon Bulk.
              </p>
         </div>
         <div id="content6" className={this.state.active_content===7 ?  'active1' : 'hide1'}>
           <h4>PREMIUM ICE CREAME</h4>
           <h2>CHERRY VANILLA</h2>
           <p>
             A winning combination of juicy,sweet  cherries and our classic
             Vanilla Ice Creame</p>
          <ul>
            <li>Certified Kosher OUD</li>
            <li>Gluten Free</li>
          </ul><hr/>
                 <p>Available in 1.5 Quarts,3-Gallon Bulk.
          </p>
         </div>
         <div id="content7" className={this.state.active_content===8 ? 'active1' : 'hide1'}>
           <h4>PREMIUM ICE CREAME</h4>
           <h2>SPUMONI</h2>
           <p>
             Pistachio,Rum and Chocolate Ice Creames combine with luscious bits ofpeaches,pineapple,raisins,
             cherries and almonds.</p>
          <ul>
            <li>Certified Kosher OUD</li>
            <li>Gluten Free</li>
          </ul><hr/>
           <p>   Available in 1.5 Quarts,3-Gallon Bulk.
          </p>
         </div>
         <div id="content8" className={this.state.active_content===9 ? 'active1' : 'hide1'}>
           <h4>PREMIUM ICE CREAME</h4>
           <h2>STRAWBERRY</h2>
           <p>
             What could be better than lots of sweet,ripe strawberries
             blended with creamy,smooth Strawberry Ice Creame?</p>
           <ul>
            <li>Certified Kosher OUD</li>
            <li>Gluten Free</li>
           </ul><hr/>
              <p>Available in 1.5 Quarts,3-Gallon Bulk.
          </p>
         </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div  className={this.state.active_content===1 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/premium.jpg')} alt="premium.jpg" width="400" height="400" />
        </div>
        <div className={this.state.active_content===2 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/icecreame.jpg')} alt="blackrespberry.jpg" width="400" height="400" />
        </div>
        <div className={this.state.active_content===3 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/coffeice.png')} alt="coffeice.png" width="400" height="400"/>
        </div>
        <div className={this.state.active_content===4 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/blackcherry1.png')} alt="blackcherry1.png" width="400" height="400"/>
        </div>
        <div className={this.state.active_content===5 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/butterpecan.png')} alt="butterpecan.png" width="400" height="400"/>
        </div>
        <div className={this.state.active_content===6 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/campfire.png')} alt="campfire.png" width="400" height="400" />
        </div>
        <div className={this.state.active_content===7 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/cherryvanilla.jpg')} alt="cherryvanilla.jpg" width="400" height="400" />
        </div>
        <div className={this.state.active_content===8 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/spumoni.jpg')} alt="spumoni.jpg" width="400" height="400" />
        </div>
        <div className={this.state.active_content===9 ? 'active1' : 'hide1'}>
          <img src={require('./assets/images/strawberry.jpg')} alt="strawberry.jpg" width="400" height="400" />
        </div>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="items">
        <p id="flavour">FLAVOURS</p>
        <div className="well wells">
          <ul type="none" className="list">
             {x}  
          </ul>
        </div>
     </div>
   </div>
 </div> 
  );
 }
}
// scrolling functionality ending
// searching functionality starting
class Search extends Component{
   constructor(props)
   {
    super(props);
      var mobiles = [{brand:'MOTO',name:'moto1',id:1,modal:'Motog5',price:5600,image:'moto1.jpg'},
                          {brand:'MOTO',name:'moto2', id:2,modal:'Moto g5 plus 4',price:6000,image:'moto2.jpg'},
                          {brand:'MOTO',name:'moto3', id:3,modal:'Moto g5 plus 5',price:24000,image:'moto3.jpg'},
                          {brand:'MOTO',name:'moto4', id:4,modal:'Moto g3',       price:3500,image:'moto4.jpg'},
                          {brand:'MOTO',name:'moto5', id:5,modal:'Moto z2 play',  price:17000,image:'moto5.jpg'},
                          {brand:'NOKIA',name:'nokia', id:6,modal:'Nokia 111-11',price:10000,image:'nokia.jpg'},
                          {brand:'NOKIA',name:'nokia1',id:7,modal:'Nokia 150 dualsim',price:9000,image:'nokia1.jpg'},
                          {brand:'NOKIA',name:'nokia2',id:8,modal:'Nokia K3310',price:25000,image:'nokia2.jpg'},
                          {brand:'NOKIA',name:'nokia3',id:9,modal:'Nokia 216 Blue',price:4000,image:'nokia3.jpg'},
                          {brand:'NOKIA',name:'nokia4',id:10,modal:'Nokia music 2',price:3000,image:'nokia5.jpg'},
                          {brand:'SAMSUNG',name:'samsung', id:11,modal:'Samsung On5 Pro G-550FY',price:7000,image:'samsung.jpg'},
                          {brand:'SAMSUNG',name:'samsung1',id:12,modal:'Samsung On7 Pro G-600FY',price:28000,image:'samsung1.jpg'},
                          {brand:'SAMSUNG',name:'samsung2',id:13,modal:'Samsung Galaxy J7 (Gold)',price:10000,image:'samsung2.jpg'},
                          {brand:'SAMSUNG',name:'samsung3',id:14,modal:'Samsung Galaxy On8 SM-J710FN',price:15000,image:'samsung3.jpg'},
                          {brand:'SAMSUNG',name:"samsung4",id:15,modal:'Samsung J5 Prime SM-G570FZKGINS',price:16000,image:'samsung4.jpg'},
                          {brand:'OPPO',name:'oppo1', id:16,modal:'Oppo F3',price:19000,image:'oppo7.jpg'},
                          {brand:'OPPO',name:'oppo2',id:17,modal:'Oppo A37',price:10000,image:'oppo1.jpg'},
                          {brand:'OPPO',name:'oppo3',id:18,modal:'Oppo A57',price:9000,image:'oppo2.jpg'},
                          {brand:'OPPO',name:'oppo4',id:19,modal:'Oppo F1S A1601',price:18000,image:'oppo3.jpg'},
                          {brand:'OPPO',name:'oppo5',id:20,modal:'OPPO Neo 7 (Black, 16GB)',price:9000,image:'oppo4.jpg'},
                          {brand:'LENOVO',name:'lenovo', id:21,modal:'Lenovo vibek4',price:12000,image:'lenovo1.jpg'},
                          {brand:'LENOVO',name:'lenovo1',id:22,modal:'Lenovo Vibe P1 Turbo',price:18000,image:'lenovo1.jpg'},
                          {brand:'LENOVO',name:'lenovo2',id:23,modal:'Lenovo VibeK5',price:9000,image:'lenovo2.jpg'},
                          {brand:'LENOVO',name:'lenovo3',id:24,modal:'Lenovo Z2 plus',price:14000,image:'lenovo3.jpg'},
                          {brand:'LENOVO',name:'lenovo4',id:25,modal:'Lenovo A6600 Plus',price:8000,image:'lenovo4.jpeg'},
                          {brand:'MICROMAX',name:'micromax', id:26,modal:'Micromax canvas',price:8000,image:'micromax.jpg'},
                          {brand:'MICROMAX',name:'micromax1',id:27,modal:'Micromax nitro',price:6000,image:'micromax1.jpg'},
                          {brand:'MICROMAX',name:'micromax2',id:28,modal:'Micromax canvas mega',price:27000,image:'micromax2.jpg'},
                          {brand:'MICROMAX',name:'micromax3',id:29,modal:'Micromax Sliver 5 Q450',price:18000,image:'micromax3.jpg'},
                          {brand:'MICROMAX',name:'micromax4',id:30,modal:'Micromax Canvas Fire 5',price:5000,image:'micromax4.jpg'},
                          {brand:'ALL BRANDS',name:'nokia4',id:31,modal:'Nokia music 2',price:3000,image:'nokia5.jpg'},
                          {brand:'ALL BRANDS',name:"samsung4",id:32,modal:'Samsung J5 Prime SM-G570FZKGINS',price:16000,image:'samsung4.jpg'},
                          {brand:'ALL BRANDS',name:'oppo5',id:33,modal:'OPPO Neo 7 (Black, 16GB)',price:9000,image:'oppo4.jpg'},
                          {brand:'ALL BRANDS',name:'lenovo4',id:34,modal:'Lenovo A6600 Plus',price:8000,image:'lenovo4.jpeg'},
                          {brand:'ALL BRANDS',name:'micromax4',id:35,modal:'Micromax Canvas Fire 5',price:5000,image:'micromax4.jpg'}
                          ]
     this.state={
            
             Mobile_list:mobiles,
                 brands:[
                         {Brand:'select',id:1,value:''},  
                         {Brand:'All Brands',id:2,value:'ALL BRANDS'},
                         {Brand:'MOTO',id:3,value:'MOTO'},
                         {Brand:'NOKIA',id:4,value:'NOKIA'},
                         {Brand:'SAMSUNG',id:5,value:'SAMSUNG'},
                         {Brand:'OPPO',id:6,value:'OPPO'},
                         {Brand:'LENOVO',id:7,value:'LENOVO'},
                         {Brand:'MICROMAX',id:8,value:'MICROMAX'}
                        ],
              min_price:[
                         {minprice:'select',id:1,value:''},
                         {minprice:'3000',id:2,value:'3000'},
                         {minprice:'4000',id:3,value:'4000'},
                         {minprice:'5000',id:4,value:'5000'},
                         {minprice:'6000',id:5,value:'6000'},
                         {minprice:'7000',id:6,value:'7000'} 
                        ],
             max_price:[
                        {maxprice:'select',id:1,value:''},
                        {maxprice:'10000',id:2,value:'10000'},  
                        {maxprice:'15000',id:3,value:'15000'},
                        {maxprice:'20000',id:4,value:'20000'}, 
                        {maxprice:'25000',id:5,value:'25000'},
                        {maxprice:'30000',id:6,value:'30000'},
                        {maxprice:'35000',id:7,value:'35000'}
                       ],         
                         value:'',
                         minprice_value:'',
                         maxprice_value:'',
                         filterItem: mobiles,
                         error:''
               }           
              this.lowPrice=this.lowPrice.bind(this);
              this.highPrice=this.highPrice.bind(this);       
              this.handleChange=this.handleChange.bind(this);
              this.handleClick=this.handleClick.bind(this);  
          }   
         handleClick(event,minprice,maxprice){
             
             var x  = this.state.value;
             var y  = this.state.minprice_value;
             var z  = this.state.maxprice_value;
              // filtering start here
             var filterItem = this.state.Mobile_list.filter(function(mobile,index){         
              if(mobile.brand === x)
               {
                 return mobile;
               }
             })

               filterItem = filterItem.filter(function(mobile,index){
                if(mobile.price >= y)
                {
                  if(mobile.price <= z)
                  {
                     return mobile;
                  }
                }
              })
              this.setState({filterItem:filterItem});
              if(x === '' || y === '' || z === ''){
                this.setState({error:'PLEASE SELECT LEFTSIDE ALL DROPDOWNS'});
              }
              else{
                this.setState({error:''});
              }
      }
      handleChange(event){
        this.setState({value:event.target.value})
      }         
      lowPrice(minprice){
        this.setState({minprice_value:minprice.target.value});
      }
      highPrice(maxprice){
        this.setState({maxprice_value:maxprice.target.value});  
      }
   render(){     
         var style={textOverflow: 'ellipsis' ,whiteSpace: 'nowrap',overflow: 'hidden'}
         var Brands =this.state.brands.map(function(brnd,index)
         {
           return(
              <option value={brnd.value}  key={index}>{brnd.Brand}</option>
           );
         })
        var MIN_price=this.state.min_price.map(function(miprice,index)
         {
           return(
               <option value={miprice.value} key={index}>{miprice.minprice}</option>
            );
         })
        var MAX_price=this.state.max_price.map(function(maprice,index)
         {
           return(
              <option value={maprice.value} key={index}>{maprice.maxprice}</option> 
           );
         }) 
   return(
        <div className="container whole">
          <div className="row">
           <div className='well left col-lg-2'> 
             <h4>SEARCH</h4>
            <form> 
              <select value={this.state.Selectvalue} onChange={this.handleChange}>
                  {Brands}
              </select> 
            <h4>PRICE</h4>
            <p>LOW PRICE</p>
             <select value={this.state.MinPricevalue} onChange={this.lowPrice}> 
                {MIN_price}           
             </select> 
            <p>HIGH PRICE</p>
             <select value={this.state.MaxPricevalue} onChange={this.highPrice}>
                {MAX_price}
             </select><br/><br/>
             <button type="button" onClick={this.handleClick} className="btn-sm">search</button>               
           </form>
          </div>
          <div className="panel part">
            <div className="col-lg-10 col-md-10 col-sm-3 col-xs-3 column">     
               {this.state.filterItem.map((brands,index) => 
                  <div key={index} className="col-lg-3 col-md-3 col-sm-9 col-xs-9 well box">
                    <img src={require('./assets/images/mobiles/'+brands.image)}  alt={brands.name} width="150" height="250"/>
                    <p>PRICE:{brands.price}</p>
                    <p style={style}>{brands.modal}</p>
                  </div> 
                )}
               <h1>{this.state.error}</h1>
           </div>
         </div>
        </div>  
       </div>   
     );
  }
  // searching functionality ending
}
export default App;

