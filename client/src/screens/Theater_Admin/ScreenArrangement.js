import { ContactsTwoTone, SettingsInputAntennaTwoTone } from "@material-ui/icons";
import { useRef, useState } from "react";
import axios from "axios";

function ScreenArrangement() {
    const [rowstate,setRow]=useState(0);
    const [colstate,setCol]=useState(0);
    const [grid,setGrid]=useState([]);

    const Submit_handler=async (e)=>{
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "/api/theat-admin/addscreen",
        {
            theater_id:"ABAD01",
            Screen_num:1,
            grid
            

        },
        config
      );

    } catch (error) {
        console.log(error);
    }   
    }

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
                <p> Row: </p>
                <input type="numeric" className="border border-2 border-red-600 rounded-md px-2" onChange={(e)=>{setRow(e.target.value)}}></input>
                </div>
                <div>
                <p> Columns: </p>
                <input type="numeric" className="border border-2 border-red-600 rounded-md px-2" onChange={(e)=>{setCol(e.target.value)}}></input>
                </div>
                <button className="rounded-sm bg-red-600 p-1 mt-2" onClick={()=>{initialiseStatusGrid(rowstate,colstate); }}>Press ME!!!</button>
            </div>
            <div className="mt-4">
                <table>
                {
                    createGrid().map(item=>item)
                }
               </table>
            </div>
            <button className="rounded-sm bg-green-600 p-1 mt-2" onClick={Submit_handler}>ADD ME!!!</button>
        </div>
    )
}

export default ScreenArrangement
