import React from 'react'
import { MdDelete } from 'react-icons/md'

const Table = ({userData,deleteUser}) => {
  return (
    <table border={1} cellSpacing={0}  width={"100%"} style={{textAlign:"center"}}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Img</th>
                    <th>Action</th>
                </tr>
                {
                    userData.map((ele)=>{
                        return(
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.login}</td>
                                <td><img src={ele.avatar_url} alt="" width={100} /></td>
                                <td><MdDelete size={50} fill="red" cursor={"pointer"} onClick={()=>{deleteUser(ele.id)}}/></td>
                            </tr>
                        )
                    })
                }
            </table>
  )
}

export default Table