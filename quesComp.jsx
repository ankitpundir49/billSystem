import React,{Component}from"react";
class Question extends Component
{   
    showQue=(questions,index,onSubmit)=>
    {   return(
        <div className="container">
            <h1>Question Number:{index+1}</h1>
            <h6>{questions[index].text}</h6>
            <ol type="A">
                {questions[index].options.map((st,index1)=>
                <li onClick={()=>onSubmit(index,index1,st)}>{st}</li>    
                )}
            </ol>
        </div>
        )
    }
    render()
    {   let {questions,index,onSubmit}=this.props;
        return(
        <React.Fragment>
            {this.showQue(questions,index,onSubmit)}
        </React.Fragment>
        );

    }

}export default Question;