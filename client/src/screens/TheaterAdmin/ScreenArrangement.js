import { useState } from "react";

function ScreenArrangement() {
    const [row,setRow]=useState(0);
    const [col,setCol]=useState(0);

    const setDimensions=()=>{
        set
    }
    const createGrid=()=>{
        const grid=[];
        for(let i=0;i<rows;i++)
        {
            grid.push(<tr>
                <td>i</td>
                <td>
                   {
                       ()=>{
                            const cols=[];
                            for(let j=0;j<col;j++)
                            {
                                cols.push(<div>cell</div>);
                            }
                            return cols;
                       } 
                   }
                </td>
            </tr>)
        }
    }
    return (
        <div>
            <div>
                <p> Row: </p>
                <input type="numeric" onChange={(e)=>{setRow(e.target.value)}}></input>
                <p> Columns: </p>
                <input type="numeric" onChange={(e)=>{setCol(e.target.value)}}></input>
            </div>
            <div>
                {
                    const grid=0
                }
            </div>

        </div>
    )
}

export default ScreenArrangement
