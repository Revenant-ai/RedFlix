import axios from "axios"
import { useEffect, useState } from "react"
import { useParams} from "react-router";
import { useNavigate } from "react-router-dom"


function SeatSelection({show,movie_name,theater_name}) {
    const show_id=show._id
    console.log(show)
    const [tickets,setTickets]=useState({id:[],index:[]})
    const [warning,setWarning]=useState(" ")
    const grid=show.grid
    let Navigate = useNavigate()


    const changeSeatSelection = (index,id)=>
    {
        if(tickets.id.includes(id))
        {
            if(tickets.id.length>=10)
            {
            setWarning("");
            }
           const newTickets=tickets.id.filter((value)=>{return value!==id;});
           const newTicketsIndex=tickets.index.filter((value)=>{return value!==index;});
           setTickets({id:newTickets,index:newTicketsIndex});
        }
        else{
            if(tickets.id.length>=10)
            {
            setWarning("Cannot select more than 10 tickets!!!");
            return;
            }
            const newTickets=[...tickets.id,id];
            const newTicketsIndex=[...tickets.index,index]
            setTickets({id:newTickets,index:newTicketsIndex});
        }
    }


    const onBookClick=async ()=>{
        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
          console.log(movie_name)
          
        const {data}=await axios.post("/api/home/book", {
            movie_title:movie_name,
            ticket_qty:tickets.id.length,
            seats:tickets,
            date:show.date.split("T")[0],
            time:show.time,
            amount:tickets.id.length*show.price,
            show_id:show_id,
        },config);
        console.log(data)
        Navigate(`/confirm/${data.booking_id}`)
    }

    const createRows = (i,totalCols)=>{
            const cols=[];
            let counter=1;
            for(let j=0;j<totalCols;j++)
            {
                let bg=grid[i][j].isSeat?(grid[i][j].isAvailable?"border border-green-600 text-red-600 hover:bg-green-600 hover:text-red-800 hover:border-red-600 cursor-pointer":"border border-gray-600 bg-gray-400 text-gray-800 opacity-30"):"text-black";
                if(tickets.id.includes(grid[i][j].id)===true)
                {
                    bg="border bg-green-600 text-red-800 border-red-600 cursor-pointer"
                }
                const data=grid[i][j].isSeat?counter++:"--";
                cols.push(<div onClick={(e)=>{if(grid[i][j].isSeat){changeSeatSelection(i+"-"+j,grid[i][j].id)}

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
        <div className="flex flex-col bg-black min-h-screen">
            <section className="flex justify-between items-end mt-2 py-2 px-5 mx-16 mb-5 mt-5 border border-red-600 rounded-lg">
            <section>
            <h1 className="text-2xl sm:text-4xl text-white mb-2">{movie_name}</h1>
            <h1 className="text-lg sm:text-xl text-white">{theater_name}</h1>
            </section>
            <h4 className="text-sm sm:text-lg text-white">Total tickets: {tickets.id.length}</h4>
            </section>
            <p className="text-md text-red-700 place-self-center mb-2 h-6">{warning}</p>
            <div className=" text-white place-self-center mb-2">
                <table>
                {
                    createGrid().map(item=>item)
                }
               </table>
            </div>
            <div className="place-self-center">
                <button onClick={onBookClick} className="bg-red-600 text-white px-4 py-2 rounded-md">Book, Total amount: {tickets.id.length*parseInt(show.price)}</button>
            </div>
        </div>
    )
}

export default SeatSelection
