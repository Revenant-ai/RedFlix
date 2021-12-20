import { useState,useEffect } from "react";
import axios from "axios";
import { getCurrentUserApi } from "../../services/AuthService";
import { addScreenApi } from "../../services/TheaterService";

function ScreenArrangement() {
    const [rowstate,setRow]=useState(0);
    const [colstate,setCol]=useState(0);
    const [grid,setGrid]=useState([]);
    const [Screen_num,set_screen_num]=useState("")
    const [theater_id,set_theater_id]=useState("")

    const Submit_handler=async (e)=>{
    
    try {
      addScreenApi(
        {
            theater_id:theater_id,
            Screen_num:Screen_num,
            grid
        },
      ).then((res)=>{
          alert("Screen Added")
        })
    } catch (error) {
        console.log(error);
    }   
    }
    useEffect(() => {
        try{
            getCurrentUserApi().then((res)=>{
              set_theater_id(res.data._id);
          })
          }catch(error){
            console.log(error);
          }  
    }, []);
    const initialiseStatusGrid = (rows,cols)=>{
        let statusGrid=[];
        for(let i=0;i<rows;i++){
            const row=[];
            for(let j=0;j<cols;j++)
            {
                row.push({
                    isSeat:true,
                });
            }
            statusGrid.push(row);
        }
        console.log(statusGrid);
        setGrid([...statusGrid]);
    }
    const changeSeatStatus = (r,c,e)=>
    {
        grid[r][c].isSeat=!grid[r][c].isSeat;
        setGrid([...grid])
        console.log(grid);
    }
    const createRows = (i,totalCols)=>{
            const cols=[];
            let counter=1;
            for(let j=0;j<totalCols;j++)
            {
                const bg=grid[i][j].isSeat?"bg-red-600":"bg-gray-600";
                const data=grid[i][j].isSeat?counter++:"-";
                cols.push(<div onClick={(e)=>{changeSeatStatus(i,j,e);}} className={`border ${bg} rounded-md m-1 px-2 py-1 cursor-pointer`} key={`${i}${j}`}>{data}</div>);
            }
            return cols;
    }

    const createGrid=()=>{
        const totalRows=grid.length;
        const totalCols=totalRows?grid[0].length:0;
        const renderGrid=[];
        console.log(totalRows,totalCols)
        console.log(grid)
        let data=65;
        for(let i=0;i<totalRows;i++)
        {
            renderGrid.push(<tr className="" key={i}>
                <td className="pr-2" key={`${i}1`}>{String.fromCharCode(data)}</td>
                <td className="flex" key={`${i}2`}>
                   {
                       createRows(i,totalCols).map(item=>item)
                   }
                </td>
            </tr>)
            data++;
        }
        
        return renderGrid;
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
            <div>
                <p> Screen Num: </p>
                <input type="text" className="border border-2 border-red-600 rounded-md px-2" onChange={(e)=>{set_screen_num(e.target.value)}}></input>
                </div>
                <div>
                <p> Row: </p>
                <input type="numeric" className="border border-2 border-red-600 rounded-md px-2" onChange={(e)=>{setRow(e.target.value)}}></input>
                </div>
                <div>
                <p> Columns: </p>
                <input type="numeric" className="border border-2 border-red-600 rounded-md px-2" onChange={(e)=>{setCol(e.target.value)}}></input>
                </div>
                <button className="m-2 bg-black hover:bg-green-800 py-2 px-4 rounded text-white" onClick={()=>{initialiseStatusGrid(rowstate,colstate); }}>Genreate Screen</button>
            </div>
            <div className="mt-4">
                <table>
                {
                    createGrid().map(item=>item)
                }
               </table>
            </div>
            <button className="m-2 bg-black hover:bg-green-800 py-2 px-4 rounded text-white" onClick={Submit_handler}>ADD Screen</button>
        </div>
    )
}

export default ScreenArrangement
