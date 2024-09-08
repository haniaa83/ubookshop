import { relative } from "path"

export const Block = props =>
   
    {
      let book = props.book
      if(!props.state.cart)
        {
            props.state.cart= []
        }
      return <f-x style={{height:250,width:200,minWidth:150,flex:1,position:"relative"}}>
       { <img
      className={global.styles.hover}
       src={book.imagelink}
       style={{height:200,width:200,objectFit:"fill",minWidth:0,flex:1}}
       onClick={()=>{
        props.state.form = "bookspecs"
        props.state.book = book
        props.refresh( )
       }}/> }
       <pre style={{backgroundColor:"#fff",width:"150px",height:"40px",marginTop:"205px",position:"absolute",marginRight:"2px",borderRadius:"5px",fontSize:"10px",textAlign:"center",}}>
       {props.book.title}
       <br-xxxx/>

        <del style={{color:"#868282"}}>{1.2*props.book.price}</del>
         
       <br-xxx/>
        {props.book.price}

       </pre>

        {/* <span style={{color:"red"}}>dsdsssss</span> */}

       
        {props.state.cart.includes(props.book.title)?
        <img src="https://cdn.ituring.ir/research/15/tik.png" 
        style={{height:40, width:40,objectFit:"contain",position:"absolute",bottom:0,right:5}}/> : <img src="https://cdn.ituring.ir/research/15/sabad.png" 
        style={{height:23, width:23,objectFit:"contain",position:"absolute",bottom:5,right:5}}/>}
       
       </f-x>
    }