import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router";


function SeatSelection({show,movie_name,theater_name}) {
    const show_id=show._id
    const [tickets,setTickets]=useState([])
    const grid=show.grid


    const changeSeatSelection = (id)=>
    {
        if(tickets.includes(id))
        {
           const newTickets=tickets.filter((value)=>{return value!==id;});
           setTickets(newTickets);
        }
        else{
            const newTickets=[...tickets,id];
            setTickets(newTickets);
        }
    }


    const onBookClick=async ()=>{
        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
          
        const {data}=await axios.post("/api/home/book", {
            ticket_qty:tickets.length,
            seats:tickets,
            amount:tickets.length*show.price,
            show_id:show_id,
        },config);
        console.log(data)
    }

    const createRows = (i,totalCols)=>{
            const cols=[];
            let counter=1;
            for(let j=0;j<totalCols;j++)
            {
                let bg=grid[i][j].isSeat?(grid[i][j].isAvailable?"border border-green-600 text-red-600 hover:bg-green-600 hover:text-red-800 hover:border-red-600 cursor-pointer":"border border-gray-600 bg-gray-400 text-gray-800 opacity-30"):"text-black";
                if(tickets.includes(i+"-"+j)===true)
                {
                    bg="border bg-green-600 text-red-800 border-red-600 cursor-pointer"
                }
                const data=grid[i][j].isSeat?counter++:"--";
                cols.push(<div onClick={(e)=>{if(grid[i][j].isSeat){changeSeatSelection(i+"-"+j)}
                    }} className={`${bg} flex flex-col items-center justify-center text-sm font-medium rounded-md m-1 px-2 py-1 w-7 h-7`} key={`${i}${j}`}>{data}</div>);
            }
            return cols;
    }

    const createGrid=()=>{
        console.log(tickets)
        const totalRows=grid.length;
        const totalCols=totalRows?grid[0].length:0;
        const renderGrid=[];
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
        <div className="bg-black min-h-screen">
            <h1 className="text-xl text-white">{movie_name}</h1>
            <h1 className="text-lg text-white">{theater_name}</h1>
            <div className=" text-white">
                <table>
                {
                    createGrid().map(item=>item)
                }
               </table>
            </div>
            <div>
                <button onClick={onBookClick} className="bg-red-600 text-white px-4 py-2 rounded-md">Book</button>
            </div>
        </div>
    )
}

export default SeatSelection
