import React,{Component}from"react";
import Marking from "./marking";
import Question from "./quesComp";
class MyComp extends Component
{   state=
    {   status:["","","","","","","","","","","","","","",""],
        data:[
        {text:"What is the capital of India",options:["New Delhi", "London", "Paris", "Tokyo"],answer:1},
        {text:"What is the capital of Italy",options:["Berlin", "London","Rome", "Paris"],answer:3},
        {text:"What is the capital of China",options:["Shanghai", "HongKong", "Shenzen", "Beijing"],answer:4},
        {text:"What is the capital of Nepal",options:["Tibet", "Kathmandu", "Colombo","Kabul"],answer:2},
        {text:"What is the capital of Iraq",options:["Baghdad", "Dubai", "Riyadh", "Teheran"],answer:1},
        {text:"What is the capital of Bangladesh",options:["Teheran", "Kabul", "Colombo", "Dhaka"],answer:4},
        {text:"What is the capital of Sri Lanka",options:["Islamabad", "Colombo", "Maldives", "Dhaka"],answer:2},
        {text:"What is the capital of Saudi Arabia",options:["Baghdad", "Dubai", "Riyadh", "Teheran"],answer:1},
        {text:"What is the capital of France",options:["London", "New York", "Paris", "Rome"],answer:3},
        {text:"What is the capital of Italy",options:["Berlin", "London", "Paris", "Rome"],answer:4},
        {text:"What is the capital of Sweden",options:["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],answer:2},
        {text:"What is the currency of UK",options:["Dollar", "Mark", "Yen", "Pound"],answer:4},
        {text:"What is the height of Mount Everest",options:["9231 m", "8848 m", "8027 m", "8912 m"],answer:2},
        {text:"What is the capital of Japan",options:["Beijing", "Osaka", "Kyoto", "Tokyo"],answer:4},
        {text:"What is the capital of Egypt",options:["Cairo", "Teheran", "Baghdad", "Dubai"],answer:1}
        ],
        index:0,
        view:-1,
        text:"",
    };
    
    handleQues=(str)=>
    {   let s1={...this.state};
        str==="Prev"?s1.index=s1.index-1:s1.index=s1.index+1;
        this.setState(s1);
    }
    handleAns=(index,index1,st)=>
    {   let s1={...this.state}
        let ans=index1===0?"A":index1===1?"B":index1===2?"C":"D";
        s1.text=st
        s1.status[index]=ans;
        this.setState(s1)
    }
    handleBtn=()=>
    {   let s1={...this.state}
        s1.view=0;
        this.setState(s1)
    }
    render()
    {   let {status,data,index,view,text}=this.state;
        console.log(view)
        return(
        <div className="container ">
            <div className="row bg-light">
            <h1 className="text-center">General Knowledge:Assignment 4A</h1>
            <h4 className="col-6">Time:5 mins</h4><h4 className="col-6"><h4 className="Right">Max Score:15</h4></h4>
            </div>
            {view===-1?
                <React.Fragment>
                    <button className="btn btn-primary Right m-2" onClick={()=>this.handleBtn()}>View Marking Sheet</button><br/>
                    <Question questions={data} index={index} onSubmit={this.handleAns}/>
                    <p>Your Answer:{status[index]===""?"Not Answered":text}</p>
                    {index>0?<button className="btn btn-primary m-2" onClick={()=>this.handleQues("Prev")}>Previous Question</button>:""}
                    {index<data.length-1?<button className="btn btn-primary m-2" onClick={()=>this.handleQues("Next")}>Next Question</button>:""}
                </React.Fragment>
                :<React.Fragment>
                    <Marking status={status}/>
                </React.Fragment>}<br/>
            
        </div>
        );

    }

}export default MyComp;