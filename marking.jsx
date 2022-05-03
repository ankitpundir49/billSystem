import React,{Component}from"react";
class Marking extends Component
{   
    
    render()
    {   let {status}=this.props;
        return(
        <React.Fragment>
            {status.map((st,index)=>
            <button className={st===""?"btn btn-secondary m-2":"btn btn-warning m-2"} disabled>{index+1}.{st}</button>
            )}
        </React.Fragment>
        );

    }

}export default Marking;